// Source-only regression guard for HKIA Switch v3.0.0 / BID D0E7F0B11DADACFF.
// Run from the repository root: node tests/verify-v300-cave.mjs
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const begin = source.indexOf('  "3.0.0": {');
const next = source.indexOf('  "2.18.1": {', begin);
assert.ok(begin >= 0 && next > begin, "Version profile missing");
const v3 = source.slice(begin, next);
assert.match(source, /"Rose": 0x5CA47A7F/, "Rose must use the source-verified v3.0.0 item ID");
assert.match(v3, /bid:\s*"D0E7F0B11DADACFF"/);
const template = [...v3.matchAll(/"((?:08000000|04000000) [0-9A-F]{8} [A-Z0-9{}_]+(?: [A-Z0-9{}_]+)?)"/g)].map(x => x[1]);
assert.equal(template.length, 19, "Expected 17 paired cave writes, one trailing word and one hook");

const replacements = {
  "{FLOWER_MOVZ}": "528F4FF4", // Rose: 0x5CA47A7F
  "{FLOWER_MOVK}": "72AB9494",
  "{GROW}": "528000C8",       // Plucked
  "{BASE_COLOR}": "52800029", // Red
  "{SPECIAL}": "52800008",
  "{PATTERN_COLOR}": "52800009",
  "{QUANTITY}": "52800C63"   // 99
};
const caveStart=0x0880A8A8, caveEnd=0x0880A938;
const words=new Map();
const hook=[];
for(const entry of template){
  let line=entry;
  for(const [token,value] of Object.entries(replacements)) line=line.replaceAll(token,value);
  assert.ok(!line.includes("{"), "Unresolved token: "+entry);
  const [kind,addrStr,...rest]=line.split(" ");
  const address=parseInt(addrStr,16);
  if(address<caveStart){hook.push([address,rest]);continue;}
  assert.ok(address>=caveStart && address<0x0880AEC8, "Outside the shared variable cave");
  if(kind==="08000000"){
    assert.equal(rest.length,2);
    words.set(address,parseInt(rest[1],16));   // Atmosphere 080: LOW32 on the left in RAM
    words.set(address+4,parseInt(rest[0],16)); // HIGH32 at +4
  }else{
    assert.equal(kind,"04000000");
    words.set(address,parseInt(rest[0],16));
  }
}
assert.deepEqual(hook,[[0x03E97614,["9525CCA5"]]]);
assert.equal(words.size,36);
for(let i=0;i<36;i++) assert.ok(words.has(caveStart+i*4),"Missing cave word");
assert.equal(caveStart+36*4,caveEnd);
assert.equal(words.get(0x0880A8DC),0xF9405C13,"v3 Inventory field must be +0xB8");

const expectedCalls=new Map([
  [0x0880A8B4,0x046A6880],[0x0880A8D0,0x02954A70],
  [0x0880A8D8,0x02ED9FA0],[0x0880A8EC,0x0498D390],
  [0x0880A920,0x037FC340],[0x0880A928,0x02954C90]
]);
const calls=new Map();
for(const [address,ins] of words){
  if((ins>>>26)!==0b100101)continue;
  let imm=ins&0x03ffffff;
  if(imm&0x02000000)imm-=0x04000000;
  calls.set(address,address+imm*4);
}
assert.deepEqual(calls,expectedCalls,"Six relocated calls must preserve targets");
assert.equal(words.get(0x0880A8C4),0xD10103FF,"Allocate 64 bytes for 40-byte UsingServerUpdateContext and out int");
assert.equal(words.get(0x0880A8CC),0x910A8001,"v3 IslandManager.tempCommands is +0x2A0, NOT the events field at +0x280");
assert.equal(words.get(0x0880A91C),0x9100C3E5,"X5 must point to valid out uniqueId at SP+0x30");
assert.equal(words.get(0x0880A92C),0x910103FF,"Deallocate same 64-byte stack frame");
assert.equal(words.get(0x0880A930),0xA9434FF4,"Execute original HUD displaced instruction");
assert.equal(words.get(0x0880A934),0xD65F03A0,"Return to native HUD epilogue through saved X29 link");
assert.equal(words.get(0x0880A8A8),0xAA1E03FD,"Keep native branch-link return saved in X29");
assert.ok(caveEnd<=0x0880AA48,"Keep frozen Stage58 shared overlay unchanged");
const raw=Buffer.alloc(36*4);
[...words.entries()].sort((a,b)=>a[0]-b[0]).forEach(([addr,ins],i)=>raw.writeUInt32LE(ins,i*4));
assert.equal(createHash("sha256").update(raw).digest("hex"),
 "d09ed89d2fb48312afe44c3c526a0fa26dd96084d7e526051bed59b24ad182c7",
 "Canonical Stage58 Rose-Plucked-Red-x99 source bytes differ");
console.log("PASS: v3.0.0 Stage58 cave, AddUniqueItem out pointer, stack frame, Inventory, 6 BLs and HUD link");
