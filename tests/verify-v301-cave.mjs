// v3.0.1 HKIA AddCustomFlower generator regression. Run: node tests/verify-v301-cave.mjs
// Immutable default sample: canonical Switch/v3.0.1/Cheats/5B05C9862BC39061.txt
// (Rose-Plucked-Red-x99); canonical BID 5B05C9862BC39061.
// No hardware verification is claimed for every generated combination.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const gold = "[Rose-Plucked-Red-x99]\n08000000 08839838 D0016820 AA1E03FD\n08000000 08839840 96FD4B97 F9402000\n08000000 08839848 F9401C00 F9401800\n08000000 08839850 D10083FF F9401400\n08000000 08839858 910A8001 910003E8\n08000000 08839860 F94003E0 968391E4\n08000000 08839868 F9405C13 969AAD1E\n08000000 08839870 72AB9494 528F4FF4\n08000000 08839878 97091995 2A1403E0\n08000000 08839880 52800029 528000C8\n08000000 08839888 52800008 29022408\n08000000 08839890 29032408 52800009\n08000000 08839898 AA1303E0 AA0003E2\n08000000 088398A0 52800C63 2A1403E1\n08000000 088398A8 96BC22D1 52800044\n08000000 088398B0 96839257 910003E0\n08000000 088398B8 A9434FF4 910083FF\n04000000 088398C0 D65F03A0\n04000000 03E8C584 9526B4AD";
const fields = { gameVersion:"3.0.1", flower:"Rose", grow:"Plucked", baseColor:"Red",
  specialType:"none", specialValue:"None", patternColor:"None", quantity:"99" };
const document = {getElementById: id => ({get value(){return fields[id];}}),
  addEventListener() {}};
const sandbox = vm.createContext({ document });
vm.runInContext(source + "\n globalThis.__api = { VERSION_PROFILES, supportedVersions, validateProfiles, buildFullCode };",
  sandbox, { filename:"script.js" });
const { VERSION_PROFILES, supportedVersions, validateProfiles, buildFullCode } = sandbox.__api;
validateProfiles();
assert.equal(supportedVersions()[0], "3.0.1", "Latest build must be default");
assert.equal(VERSION_PROFILES["3.0.1"].bid, "5B05C9862BC39061");
assert.equal(VERSION_PROFILES["3.0.1"].template.length, 20);
assert.equal(buildFullCode(), gold, "Default code must match canonical v3.0.1 Rose sample exactly");

function wordsFrom(code) {
  const lines=code.split("\n");
  assert.equal(lines.length,20);
  assert.match(lines[0],/^\[[\w-]+\]$/);
  const words=new Map();
  let hook=null;
  for(const row of lines.slice(1)) {
    assert.match(row,/^(08000000|04000000) [0-9A-F]{8} [0-9A-F]{8}(?: [0-9A-F]{8})?$/);
    const [opcode,address,hi,lo]=row.split(" ");
    const addr=parseInt(address,16);
    if(addr===0x03E8C584){
      assert.equal(opcode,"04000000");
      assert.equal(hi,"9526B4AD");
      hook=parseInt(hi,16);
      continue;
    }
    assert.ok(addr>=0x08839838 && addr<0x088398C4, "Unexpected code cave write");
    if(opcode==="08000000"){
      assert.ok(lo,"Missing LOW32 for 080");
      words.set(addr,parseInt(lo,16));
      words.set(addr+4,parseInt(hi,16));
    }else {
      assert.equal(addr,0x088398C0,"Only last cave instruction uses 040");
      words.set(addr,parseInt(hi,16));
    }
  }
  assert.equal(hook,0x9526B4AD);
  assert.equal(words.size,35);
  for(let i=0;i<35;i++)assert.ok(words.has(0x08839838+i*4));
  assert.equal(words.get(0x08839838),0xAA1E03FD);
  assert.equal(words.get(0x088398BC),0xA9434FF4);
  assert.equal(words.get(0x088398C0),0xD65F03A0);
  return words;
}
const rootWords=wordsFrom(gold);
// Verify all six re-encoded native calls independently of flower parameters.
const knownTargets=new Map([
  [0x08839844,0x0478C6A0], [0x08839860,0x0291DFF0],
  [0x08839868,0x02EE4CE0], [0x0883987C,0x04A7FED0],
  [0x088398AC,0x037423F0], [0x088398B4,0x0291E210]
]);
const calls=new Map();
for(const [addr,word] of rootWords){
  if((word>>>26)!==0b100101)continue;
  let offset=word & 0x03FFFFFF;
  if(offset & 0x02000000)offset-=0x04000000;
  calls.set(addr,addr+offset*4);
}
assert.equal(JSON.stringify([...calls]),JSON.stringify([...knownTargets]),
  "Native call destinations were changed");

const prof=VERSION_PROFILES["3.0.1"];
assert.equal(Object.keys(prof.flowers).length,25);
function movz(reg,imm){return (0x52800000 | ((imm&0xFFFF)<<5) | reg)>>>0;}
function movk(reg,imm){return (0x72A00000 | ((imm&0xFFFF)<<5) | reg)>>>0;}
// Exercise all published species, growth, quantities, and special modes.
// Only parameter immediates may vary; every fixed native instruction stays identical.
let scenarios=0;
for(const flower of Object.keys(prof.flowers)) {
  for(const grow of Object.keys(prof.growStates)) {
    for(const quantity of ["1","99","999"]) {
      for(const specialType of ["none","pattern","effect"]) {
        Object.assign(fields,{flower,grow,quantity,specialType,
          baseColor:"Blue",specialValue:specialType==="pattern"?"Ombre":"Glitter",
          patternColor:specialType==="pattern"?"Yellow":"None"});
        const actual=buildFullCode();
        const native=wordsFrom(actual);
        const flowerId=prof.flowers[flower]>>>0;
        const special=specialType==="pattern"?prof.patterns.Ombre:
          specialType==="effect"?prof.effects.Glitter:0;
        const color=specialType==="pattern"?prof.colors.Yellow:0;
        assert.equal(native.get(0x08839870),movz(20,flowerId&0xFFFF));
        assert.equal(native.get(0x08839874),movk(20,flowerId>>>16));
        assert.equal(native.get(0x08839880),movz(8,prof.growStates[grow]));
        assert.equal(native.get(0x08839884),movz(9,prof.colors.Blue));
        assert.equal(native.get(0x0883988C),movz(8,special));
        assert.equal(native.get(0x08839890),movz(9,color));
        assert.equal(native.get(0x088398A4),movz(3,Number(quantity)));
        for(const [addr,word] of native) {
          if([0x08839870,0x08839874,0x08839880,0x08839884,
              0x0883988C,0x08839890,0x088398A4].includes(addr))continue;
          assert.equal(word,rootWords.get(addr),"Unexpected modification at "+addr.toString(16));
        }
        scenarios++;
      }
    }
  }
}
assert.equal(scenarios,675);
console.log("PASS: v3.0.1 golden Rose 19/19, 35 A64 instructions, 6 BL targets, 675 generator cases");
