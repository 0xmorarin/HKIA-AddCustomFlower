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

const VERSION_PROFILES = {
  "2.17.1": {
    bid: "47797CD0C232F47C",
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
  return VERSION_PROFILES[selectedVersion()];
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
}

function compactName(value) {
  const aliases = {
    "Grown Troweled": "Troweled"
  };

  return (aliases[value] ?? value).replace(/\s+/g, "");
}

function updateSpecialControls() {
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
    fillSelect(special, Object.keys(PATTERNS), "Ombre");
    special.disabled = false;
    patternColor.disabled = false;
    return;
  }

  fillSelect(special, Object.keys(EFFECTS), "Glitter");
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

function buildReplacementMap() {
  const flowerId = FLOWERS[$("flower").value] >>> 0;
  const flowerLow = flowerId & 0xFFFF;
  const flowerHigh = (flowerId >>> 16) & 0xFFFF;

  const specialType = $("specialType").value;
  let specialIndex = 0;

  if (specialType === "pattern") {
    specialIndex = PATTERNS[$("specialValue").value];
  } else if (specialType === "effect") {
    specialIndex = EFFECTS[$("specialValue").value];
  }

  const patternColorIndex =
    specialType === "pattern" ? COLORS[$("patternColor").value] : 0;

  return {
    "[CHEAT_NAME]": buildCheatName(),
    "{FLOWER_MOVZ}": hex8(movzW(20, flowerLow)),
    "{FLOWER_MOVK}": hex8(movkW16(20, flowerHigh)),
    "{GROW}": hex8(movzW(8, GROW_STATES[$("grow").value])),
    "{BASE_COLOR}": hex8(movzW(9, COLORS[$("baseColor").value])),
    "{SPECIAL}": hex8(movzW(8, specialIndex)),
    "{PATTERN_COLOR}": hex8(movzW(9, patternColorIndex)),
    "{QUANTITY}": hex8(movzW(3, Number($("quantity").value)))
  };
}

function buildFullCode() {
  const profile = selectedProfile();
  const replacements = buildReplacementMap();

  return profile.template
    .map((line) => {
      let output = line;
      for (const [token, value] of Object.entries(replacements)) {
        output = output.replaceAll(token, value);
      }
      return output;
    })
    .join("\n");
}

function updateCompatibility() {
  const box = $("compat");
  const type = $("specialType").value;

  if (type === "none") {
    box.hidden = true;
    return;
  }

  box.hidden = false;

  if (type === "effect") {
    box.className = "compatibility is-good";
    box.textContent = "Effect compatibility: listed for all flower types in the selected version's internal CrosstypePatterns data.";
    return;
  }

  const version = selectedVersion();
  const compatTable = PATTERN_COMPAT_BY_VERSION[version];

  if (!compatTable) {
    box.className = "compatibility is-warn";
    box.textContent = "Pattern compatibility reference data is not available for this game version.";
    return;
  }

  const flower = $("flower").value;
  const pattern = $("specialValue").value;
  const listed = (compatTable[flower] ?? []).includes(pattern);

  box.className = `compatibility ${listed ? "is-good" : "is-warn"}`;
  box.textContent = listed
    ? `${pattern} is listed for ${flower} in the selected version's internal CrosstypePatterns data.`
    : `${pattern} is not listed for ${flower} in the selected version's internal CrosstypePatterns data. The code can still generate it.`;
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

function init() {
  const versions = supportedVersions();
  fillSelect($("gameVersion"), versions, versions[0]);

  fillSelect($("flower"), Object.keys(FLOWERS), DEFAULTS.flower);
  fillSelect($("grow"), Object.keys(GROW_STATES), DEFAULTS.grow);
  fillSelect(
    $("baseColor"),
    Object.keys(COLORS).filter((color) => color !== "None"),
    DEFAULTS.baseColor
  );
  fillSelect($("patternColor"), Object.keys(COLORS), DEFAULTS.patternColor);
  fillSelect($("quantity"), ["1", "99", "999"], String(DEFAULTS.quantity));

  $("specialType").value = DEFAULTS.specialType;
  updateSpecialControls();
  render();

  for (const id of [
    "gameVersion",
    "flower",
    "grow",
    "baseColor",
    "specialType",
    "specialValue",
    "patternColor",
    "quantity"
  ]) {
    $(id).addEventListener("change", () => {
      if (id === "specialType") {
        updateSpecialControls();
      }
      render();
    });
  }

  $("copy").addEventListener("click", copyCode);
}

document.addEventListener("DOMContentLoaded", init);
