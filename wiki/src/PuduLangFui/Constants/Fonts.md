---
type: module
path: "@root/src/PuduLangFui/Constants/Fonts.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.56
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Fonts]
---

# PuduLangFui.Constants.Fonts

## Purpose

The default font stacks.

## Interface

### Signatures

```pudu
export const SANS: Str

export const MONO: Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Do not name a downloaded font.

## Edge Cases

- None.

## Depth

DEPTH 0.56 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Ship a font?
  **A:** System fonts. _Rationale:_ no request and no flash. _Rejected:_ bundling a web font.

## Referenced by

[[src/PuduLangFui/Constants/_MOC]] · [[src/PuduLangFui/Theme/Aspects/Typography]]
