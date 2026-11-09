---
type: module
path: "@root/src/PuduLangFui/Constants/Presets.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.52
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Presets]
---

# PuduLangFui.Constants.Presets

## Purpose

The limits and refusal messages of preset codes.

## Interface

### Signatures

```pudu
export const CODE_PARTS: Int

export const CODE_PARTS_WITH_LOOK: Int

export const MAXIMUM_HUE: Int

export const MAXIMUM_CHROMA: Int

export const BAD_SHAPE: Str

export const BAD_HUE: Str

export const BAD_CHROMA: Str

export const BAD_RADIUS: Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- None.

## Depth

DEPTH 0.52 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why limit chroma to 40?
  **A:** Higher values leave the displayable range. _Rationale:_ out-of-range colors clamp unpredictably. _Rejected:_ no limit.

## Referenced by

[[src/PuduLangFui/Constants/_MOC]] · [[src/PuduLangFui/Theme/Presets/Preset]]
