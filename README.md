# HKIA AddCustomFlower Builder

A browser-based Atmosphère cheat code builder for **Hello Kitty Island Adventure**.

## Supported versions

- **v2.17.1**
  - BID: `47797CD0C232F47C`

The version selector is designed to retain older supported game versions. When a new HKIA update is added, versions are sorted numerically and the newest supported version becomes the default automatically.

## Parameters

- Game Version
- Flower Type
- Grow State
- Base Color
- Pattern / Effect
- Pattern Color
- Quantity (`1`, `99`, `999`)

The builder always outputs a complete `AddCustomFlower` cheat. Parameter values are inserted directly into the selected version's full code template; no override lines are appended.

## Version maintenance

Each supported game version has its own entry in `VERSION_PROFILES` in `script.js`.

Example structure:

```js
const VERSION_PROFILES = {
  "2.17.1": {
    bid: "47797CD0C232F47C",
    template: [
      // complete verified code template for this version
    ]
  },

  "2.18.0": {
    bid: "NEW_BUILD_ID",
    template: [
      // complete verified code template for this version
    ]
  }
};
```

The UI automatically:

1. detects every profile in `VERSION_PROFILES`;
2. sorts versions newest to oldest;
3. selects the newest supported version by default;
4. keeps older versions selectable.

This avoids replacing old support when a new update is added.

## Update checklist

Before adding a new game version, re-verify at minimum:

- Build ID
- Hook locations and original instructions
- Called function addresses / overloads
- Code-cave location
- Branch encodings
- `FlowerUniqueData` field offsets
- Host player / inventory-related offsets
- Pattern compatibility data

Only add the new profile after the generated code has been validated for that version.

## Compatibility reference

Pattern compatibility is kept separately by game version in `PATTERN_COMPAT_BY_VERSION`. This is based on internal `FlowerItemDetails.CrosstypePatterns` data and should not be treated as individual in-game verification of every possible combination.
