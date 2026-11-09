---
type: module
path: "@root/src/PuduLangFui/Theme/Presets/Preset.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.8
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Presets.Preset]
---

# PuduLangFui.Theme.Presets.Preset

## Purpose

Named starting points and the short codes that spell a theme.

## Interface

### Signatures

```pudu
export type Preset = { hue: Int, chroma: Int, radius: Int, density: Spacing.Density, look: Str }

export const PRESETS: Map[Str, Preset]

export fn theme(preset: &Preset) -> Theme.Theme

export fn decode(code: Str) -> Result[Preset, Str]

export fn encode(preset: &Preset) -> Str

export fn named(picked: Str) -> Result[Preset, Str]

export fn names() -> Array[Str]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Presets]] · [[src/PuduLangFui/Theme/Aspects/Spacing]] · [[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Looks/Catalog]] · [[src/PuduLangFui/Utils/Numbers]] · [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. A name reads the preset table. A code splits on hyphens and reads hue, chroma, radius, and density.

## Negative Logic (Prohibited Paths)

- ❌ Do not accept a partial code.
- ❌ Do not accept a hue outside 0 to 360.

## Edge Cases

- Unknown names and malformed codes answer `Err` saying why.

## Depth

DEPTH 0.8 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Opaque codes or readable ones?
  **A:** Readable. _Rationale:_ a code in a diff should say what it is. _Rejected:_ base-62 packing.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Preset]] · [[src/PuduLangFui/Theme/Presets/Design]] · [[src/PuduLangFui/Theme/Presets/_MOC]]
