---
type: module
path: "@root/src/PuduLangFui/Utils/Numbers.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.58
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Utils.Numbers]
---

# PuduLangFui.Utils.Numbers

## Purpose

Numeric conversions and the plain arithmetic rendering shares.

## Interface

### Signatures

```pudu
export fn floatOf(value: Int) -> Float64

export fn fixed(value: Float64) -> Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Convert through text, which is exact for every whole number the system meets
2. round to three places by scaling.

## Negative Logic (Prohibited Paths)

- ❌ Do not format numbers inside a component.

## Edge Cases

- Whole numbers format with a trailing `.0`, which CSS and SVG accept.

## Depth

DEPTH 0.58 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Convert through text?
  **A:** Yes, 0.1.3 has no direct numeric conversion from `Int` to `Float64` in the prelude. _Rationale:_ the values are small. _Rejected:_ storing presets as floats, which makes codes unreadable.

## Referenced by

[[src/PuduLangFui/Cli/Model/Icons]] · [[src/PuduLangFui/Components/Patterns/Chart]] · [[src/PuduLangFui/Theme/Presets/Preset]] · [[src/PuduLangFui/Utils/_MOC]]
