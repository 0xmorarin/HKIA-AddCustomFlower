const FLOWERS = {
  "Anemone": 0x27D6F8E5,
  "Bellbutton": 0x75557786,
  "Blazebulb": 0x6B944A3F,
  "Bowblossom": 0x529F88BD,
  "Bubbaluna": 0x0D9FC0E4,
  "Crystalia": 0x0F0C34FD,
  "Dandelily": 0x1B92D8A6,
  "Dreampuff": 0x4D744981,
  "Eggwort": 0x73531B1C,
  "Frostfeather": 0x5E5C78E2,
  "Ghostgleam": 0x6512CF7A,
  "Glowbal": 0x10709F3A,
  "Happadil": 0x6382E28C,
  "Heavy Nettle": 0x7D844449,
  "Hibiscus": 0x0F970DAD,
  "Marigold": 0x0C269BB4,
  "Penstemum": 0x4F581F6F,
  "Petunia": 0x0AF3110A,
  "Pinwheel": 0x0291E19E,
  "Poinsettia": 0x5D119320,
  "Rose": 0x5CA47A7F,
  "Sunburst": 0x12A2D468,
  "Thistle": 0x48F1144B,
  "Tulias": 0x105C677B,
  "Wheatflower": 0x576640C6
};

const GROW_STATES = {
  "Seed": 0,
  "Plucked": 6,
  "Grown Troweled": 7
};

const COLORS = {
  "None": 0,
  "Red": 1,
  "Coral": 2,
  "Orange": 3,
  "Yellow": 4,
  "Lime": 5,
  "Green": 6,
  "Teal": 7,
  "Sky": 8,
  "Blue": 9,
  "Indigo": 10,
  "Violet": 11,
  "Hot Pink": 12,
  "Magenta": 13,
  "Black": 14,
  "Gray": 15,
  "White": 16,
  "Warm Pink": 17,
  "Blush": 18,
  "Peach": 19,
  "Cream": 20,
  "Pistachio": 21,
  "Mint": 22,
  "Seafoam": 23,
  "Cloud": 24,
  "Ice": 25,
  "Periwinkle": 26,
  "Lilac": 27,
  "Cool Pink": 28,
  "Pink": 29
};

const PATTERNS = {
  "Alternate": 1,
  "Confetti": 2,
  "Ombre": 10,
  "Patch": 11,
  "Ring": 12,
  "Speckled": 13,
  "Striped": 14,
  "Trim": 16
};

const EFFECTS = {
  "Cosmic": 3,
  "Crystal": 4,
  "Frost": 5,
  "Glitter": 6,
  "Glow": 7,
  "Iridescent": 8,
  "Molten": 9,
  "Sunbeam": 15
};

const PATTERN_COMPAT_BY_VERSION = {
  "2.17.1": {
    "Anemone": ["Ombre"],
    "Bellbutton": ["Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Blazebulb": ["Ombre", "Patch", "Ring", "Speckled", "Trim"],
    "Bowblossom": ["Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped"],
    "Bubbaluna": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Crystalia": ["Ombre", "Ring", "Striped"],
    "Dandelily": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Dreampuff": ["Ombre"],
    "Eggwort": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Frostfeather": ["Ombre", "Speckled", "Trim"],
    "Ghostgleam": ["Ombre"],
    "Glowbal": ["Ombre"],
    "Happadil": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Heavy Nettle": ["Confetti", "Ombre", "Patch", "Ring", "Striped", "Trim"],
    "Hibiscus": ["Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Marigold": ["Ombre", "Trim"],
    "Penstemum": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Petunia": ["Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Pinwheel": ["Alternate", "Confetti", "Ombre", "Patch", "Speckled", "Trim"],
    "Poinsettia": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Rose": ["Confetti", "Ombre", "Ring", "Speckled", "Striped", "Trim"],
    "Sunburst": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Thistle": ["Ombre", "Trim"],
    "Tulias": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"],
    "Wheatflower": ["Alternate", "Confetti", "Ombre", "Patch", "Ring", "Speckled", "Striped", "Trim"]
  }
};

PATTERN_COMPAT_BY_VERSION["2.18.1"] = Object.fromEntries(
  Object.entries(PATTERN_COMPAT_BY_VERSION["2.17.1"]).map(
    ([flower, patterns]) => [flower, [...patterns]]
  )
);

const VERIFIED_EFFECT_COMPATIBILITY = Object.fromEntries(
  Object.keys(FLOWERS).map((flower) => [flower, Object.keys(EFFECTS)])
);

const VERSION_PROFILES = {
  "2.18.1": {
    bid: "5134D58C555B8E71",
    flowers: { ...FLOWERS },
    growStates: { ...GROW_STATES },
    colors: { ...COLORS, "Brown": 30 },
    patterns: { ...PATTERNS },
    effects: { ...EFFECTS },
    compatibility: PATTERN_COMPAT_BY_VERSION["2.18.1"],
    effectsCompatibility: VERIFIED_EFFECT_COMPATIBILITY,
    template: [
      "[CHEAT_NAME]",
      "08000000 0864CE10 D0016300 AA1E03FD",
      "08000000 0864CE18 97A95DDD F945A000",
      "08000000 0864CE20 F9401C00 F9401800",
      "08000000 0864CE28 D10083FF F9401400",
      "08000000 0864CE30 910A0001 910003E8",
      "08000000 0864CE38 F94003E0 968C105A",
      "08000000 0864CE40 F9405013 96AE88BC",
      "08000000 0864CE48 {FLOWER_MOVK} {FLOWER_MOVZ}",
      "08000000 0864CE50 96A6F1F3 2A1403E0",
      "08000000 0864CE58 {BASE_COLOR} {GROW}",
      "08000000 0864CE60 {SPECIAL} 29022408",
      "08000000 0864CE68 29032408 {PATTERN_COLOR}",
      "08000000 0864CE70 AA1303E0 AA0003E2",
      "08000000 0864CE78 {QUANTITY} 2A1403E1",
      "08000000 0864CE80 968AC6E3 52800044",
      "08000000 0864CE88 968C10CD 910003E0",
      "08000000 0864CE90 A9434FF4 910083FF",
      "04000000 0864CE98 D65F03A0",
      "04000000 038ADCA4 95367C5B"
    ]
  },
  "2.17.2": {
    bid: "13794F88E5BBC1D6",
    flowers: { ...FLOWERS },
    growStates: { ...GROW_STATES },
    colors: { ...COLORS },
    patterns: { ...PATTERNS },
    effects: { ...EFFECTS },
    compatibility: null,
    effectsCompatibility: null,
    template: [
      "[CHEAT_NAME]",
      "08000000 083BBD8C F0015C40 AA1E03FD",
      "08000000 083BBD94 97A76F22 F943DC00",
      "08000000 083BBD9C F9401C00 F9401800",
      "08000000 083BBDA4 D10083FF F9401400",
      "08000000 083BBDAC 910A0001 910003E8",
      "08000000 083BBDB4 F94003E0 969323D7",
      "08000000 083BBDBC F9405013 96B329BD",
      "08000000 083BBDC4 {FLOWER_MOVK} {FLOWER_MOVZ}",
      "08000000 083BBDCC 96CBAF58 2A1403E0",
      "08000000 083BBDD4 {BASE_COLOR} {GROW}",
      "08000000 083BBDDC {SPECIAL} 29022408",
      "08000000 083BBDE4 29032408 {PATTERN_COLOR}",
      "08000000 083BBDEC AA1303E0 AA0003E2",
      "08000000 083BBDF4 {QUANTITY} 2A1403E1",
      "08000000 083BBDFC 96B28048 52800044",
      "08000000 083BBE04 9693244A 910003E0",
      "08000000 083BBE0C A9434FF4 910083FF",
      "04000000 083BBE14 D65F03A0",
      "04000000 038362B4 952E16B6"
    ]
  },
  "2.17.1": {
    bid: "47797CD0C232F47C",
    flowers: { ...FLOWERS },
    growStates: { ...GROW_STATES },
    colors: { ...COLORS },
    patterns: { ...PATTERNS },
    effects: { ...EFFECTS },
    compatibility: PATTERN_COMPAT_BY_VERSION["2.17.1"],
    effectsCompatibility: VERIFIED_EFFECT_COMPATIBILITY,
    template: [
      "[CHEAT_NAME]",
      "08000000 083B178C F0015C20 AA1E03FD",
      "08000000 083B1794 97A917FE F9435800",
      "08000000 083B179C F9401C00 F9401800",
      "08000000 083B17A4 D10083FF F9401400",
      "08000000 083B17AC 910A0001 910003E8",
      "08000000 083B17B4 F94003E0 9692DF03",
      "08000000 083B17BC F9405013 96B24765",
      "08000000 083B17C4 {FLOWER_MOVK} {FLOWER_MOVZ}",
      "08000000 083B17CC 96CC5EB8 2A1403E0",
      "08000000 083B17D4 {BASE_COLOR} {GROW}",
      "08000000 083B17DC {SPECIAL} 29022408",
      "08000000 083B17E4 29032408 {PATTERN_COLOR}",
      "08000000 083B17EC AA1303E0 AA0003E2",
      "08000000 083B17F4 {QUANTITY} 2A1403E1",
      "08000000 083B17FC 96B19DF4 52800044",
      "08000000 083B1804 9692DF76 910003E0",
      "08000000 083B180C A9434FF4 910083FF",
      "04000000 083B1814 D65F03A0",
      "04000000 037FC124 952ED59A"
    ]
  }
};

const DEFAULTS = {
  flower: "Rose",
  grow: "Plucked",
  baseColor: "Red",
  specialType: "none",
  patternColor: "None",
  quantity: 99
};

const $ = (id) => document.getElementById(id);

function compareVersionsDescending(a, b) {
  const aa = a.split(".").map(Number);
  const bb = b.split(".").map(Number);
  const length = Math.max(aa.length, bb.length);

  for (let i = 0; i < length; i++) {
    const av = aa[i] ?? 0;
    const bv = bb[i] ?? 0;
    if (av !== bv) return bv - av;
  }

  return 0;
}

function supportedVersions() {
  return Object.keys(VERSION_PROFILES).sort(compareVersionsDescending);
}

function selectedVersion() {
  return $("gameVersion").value;
}

function selectedProfile() {
  const profile = VERSION_PROFILES[selectedVersion()];
  if (!profile) throw new Error("Unsupported game version.");
  return profile;
}

function hex8(value) {
  return (value >>> 0).toString(16).toUpperCase().padStart(8, "0");
}

function movzW(register, immediate) {
  return (0x52800000 | ((immediate & 0xFFFF) << 5) | register) >>> 0;
}

function movkW16(register, immediate) {
  return (0x72A00000 | ((immediate & 0xFFFF) << 5) | register) >>> 0;
}

function fillSelect(select, entries, selected) {
  select.replaceChildren();

  for (const entry of entries) {
    const option = document.createElement("option");
    option.value = entry;
    option.textContent = entry;
    option.selected = entry === selected;
    select.appendChild(option);
  }

  if (!entries.includes(selected)) select.value = entries[0] ?? "";
}

function compactName(value) {
  const aliases = { "Grown Troweled": "Troweled" };
  return (aliases[value] ?? value).replace(/\s+/g, "");
}

function updateVersionControls(initial = false) {
  const profile = selectedProfile();
  const fields = [
    ["flower", Object.keys(profile.flowers), DEFAULTS.flower],
    ["grow", Object.keys(profile.growStates), DEFAULTS.grow],
    ["baseColor", Object.keys(profile.colors).filter((c) => c !== "None"), DEFAULTS.baseColor],
    ["patternColor", Object.keys(profile.colors), DEFAULTS.patternColor]
  ];

  for (const [id, entries, fallback] of fields) {
    fillSelect($(id), entries, initial ? fallback : $(id).value);
  }

  updateSpecialControls();
}

function updateSpecialControls() {
  const profile = selectedProfile();
  const type = $("specialType").value;
  const special = $("specialValue");
  const patternColor = $("patternColor");

  if (type === "none") {
    fillSelect(special, ["None"], "None");
    special.disabled = true;
    patternColor.value = "None";
    patternColor.disabled = true;
    return;
  }

  if (type === "pattern") {
    fillSelect(special, Object.keys(profile.patterns), special.value || "Ombre");
    special.disabled = false;
    fillSelect(patternColor, Object.keys(profile.colors), patternColor.value || DEFAULTS.patternColor);
    patternColor.disabled = false;
    return;
  }

  fillSelect(special, Object.keys(profile.effects), special.value || "Glitter");
  special.disabled = false;
  patternColor.value = "None";
  patternColor.disabled = true;
}

function buildCheatName() {
  const parts = [
    compactName($("flower").value),
    compactName($("grow").value),
    compactName($("baseColor").value)
  ];

  const type = $("specialType").value;

  if (type !== "none") {
    parts.push(compactName($("specialValue").value));

    if (type === "pattern" && $("patternColor").value !== "None") {
      parts.push(compactName($("patternColor").value));
    }
  }

  parts.push(`x${$("quantity").value}`);
  return `[AddCustomFlower ${parts.join("-")}]`;
}

function requireIndex(map, name) {
  if (!Object.hasOwn(map, name) || !Number.isInteger(map[name])) {
    throw new Error(`Missing or invalid value: ${name}`);
  }
  return map[name];
}

function buildReplacementMap() {
  const profile = selectedProfile();
  const flowerId = requireIndex(profile.flowers, $("flower").value) >>> 0;
  const flowerLow = flowerId & 0xFFFF;
  const flowerHigh = (flowerId >>> 16) & 0xFFFF;
  const specialType = $("specialType").value;
  let specialIndex = 0;

  if (specialType === "pattern") {
    specialIndex = requireIndex(profile.patterns, $("specialValue").value);
  } else if (specialType === "effect") {
    specialIndex = requireIndex(profile.effects, $("specialValue").value);
  } else if (specialType !== "none") {
    throw new Error("Unsupported special type.");
  }

  const patternColorIndex = specialType === "pattern"
    ? requireIndex(profile.colors, $("patternColor").value)
    : 0;

  return {
    "[CHEAT_NAME]": buildCheatName(),
    "{FLOWER_MOVZ}": hex8(movzW(20, flowerLow)),
    "{FLOWER_MOVK}": hex8(movkW16(20, flowerHigh)),
    "{GROW}": hex8(movzW(8, requireIndex(profile.growStates, $("grow").value))),
    "{BASE_COLOR}": hex8(movzW(9, requireIndex(profile.colors, $("baseColor").value))),
    "{SPECIAL}": hex8(movzW(8, specialIndex)),
    "{PATTERN_COLOR}": hex8(movzW(9, patternColorIndex)),
    "{QUANTITY}": hex8(movzW(3, Number($("quantity").value)))
  };
}

function buildFullCode() {
  const profile = selectedProfile();
  const replacements = buildReplacementMap();
  const output = profile.template.map((line) => {
    let text = line;
    for (const [token, value] of Object.entries(replacements)) {
      text = text.replaceAll(token, value);
    }
    return text;
  }).join("\n");

  if (/\{[A-Z_]+\}/.test(output)) {
    throw new Error("An instruction template contains an unresolved token.");
  }
  return output;
}

function updateCompatibility() {
  const box = $("compat");
  const type = $("specialType").value;

  if (type === "none") {
    box.hidden = true;
    return;
  }

  box.hidden = false;
  const profile = selectedProfile();
  const sameColor = type === "pattern" &&
    profile.colors[$("baseColor").value] === profile.colors[$("patternColor").value];
  const sameColorMessage = sameColor
    ? "Base Color and Pattern Color are the same. The pattern may appear as a solid color."
    : "";
  const noPatternColor = type === "pattern" && profile.colors[$("patternColor").value] === 0;
  const noPatternColorMessage = noPatternColor
    ? "Pattern Color is None. The selected pattern has no secondary color and may not display as intended."
    : "";
  const advisoryMessages = [sameColorMessage, noPatternColorMessage].filter(Boolean);
  const table = type === "effect" ? profile.effectsCompatibility : profile.compatibility;
  const label = type === "effect" ? "Effect" : "Pattern";

  if (!table) {
    box.className = "compatibility is-warn";
    box.textContent = [
      `${label} compatibility has not been verified for this version. The code can still generate it.`,
      ...advisoryMessages
    ].join(" ");
    return;
  }

  const flower = $("flower").value;
  const special = $("specialValue").value;
  const available = table[flower];
  if (!available) {
    box.className = "compatibility is-warn";
    box.textContent = [
      `${label} compatibility is unknown for ${flower} in this version.`,
      ...advisoryMessages
    ].join(" ");
    return;
  }

  const listed = available.includes(special);
  box.className = `compatibility ${listed && advisoryMessages.length === 0 ? "is-good" : "is-warn"}`;
  const compatibilityMessage = listed
    ? `${special} is listed for ${flower} in this version's internal CrosstypePatterns data.`
    : `${special} is not listed for ${flower} in this version's internal CrosstypePatterns data. The code can still generate it.`;
  box.textContent = [compatibilityMessage, ...advisoryMessages].join(" ");
}

function render() {
  const profile = selectedProfile();
  $("buildBadge").textContent = `BID ${profile.bid}`;
  $("output").textContent = buildFullCode();
  updateCompatibility();
}

async function copyCode() {
  const code = $("output").textContent;
  const button = $("copy");

  try {
    await navigator.clipboard.writeText(code);
    button.textContent = "Copied";
  } catch {
    const range = document.createRange();
    range.selectNodeContents($("output"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    button.textContent = "Selected";
  }

  window.setTimeout(() => {
    button.textContent = "Copy Code";
  }, 1300);
}

function validateProfiles() {
  for (const profile of Object.values(VERSION_PROFILES)) {
    if (!/^[A-F0-9]{16}$/.test(profile.bid) || profile.template.length !== 20) {
      throw new Error("Invalid BID or instruction template.");
    }
    for (const [map, maximum] of [
      [profile.flowers, 0xFFFFFFFF],
      [profile.growStates, 0xFFFF],
      [profile.colors, 0xFFFF],
      [profile.patterns, 0xFFFF],
      [profile.effects, 0xFFFF]
    ]) {
      if (!map || Object.values(map).some((value) => !Number.isInteger(value) || value < 0 || value > maximum)) {
        throw new Error("Invalid version-specific flower data.");
      }
    }
  }
}

function init() {
  validateProfiles();
  const versions = supportedVersions();
  fillSelect($("gameVersion"), versions, versions[0]);
  fillSelect($("quantity"), ["1", "99", "999"], String(DEFAULTS.quantity));
  $("specialType").value = DEFAULTS.specialType;
  updateVersionControls(true);
  render();

  for (const id of [
    "gameVersion", "flower", "grow", "baseColor", "specialType",
    "specialValue", "patternColor", "quantity"
  ]) {
    $(id).addEventListener("change", () => {
      if (id === "gameVersion") updateVersionControls();
      if (id === "specialType" || id === "baseColor") updateSpecialControls();
      render();
    });
  }

  $("copy").addEventListener("click", copyCode);
}

document.addEventListener("DOMContentLoaded", init);
