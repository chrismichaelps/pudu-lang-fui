---
type: module
path: "@root/src/PuduLangFui/Theme/Aspects/Elevation.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.98
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Aspects.Elevation]
---

# PuduLangFui.Theme.Aspects.Elevation

## Purpose

The elevation aspect: shadows and the backdrop behind modal surfaces.

## Interface

### Signatures

```pudu
export type Elevation = {
  shadowColor: Str,
  shadowXs: Str,
  shadowSm: Str,
  shadowMd: Str,
  shadowLg: Str,
  shadowXl: Str,
  backdrop: Str
} derives Tokens.Tokens

export fn defaults() -> Elevation
```

### Linkage

- **Requires:** [[src/PuduLangFui/Theme/Base/Tokens]]

## Algorithm

1. Each shadow is built on one shadow color so depth reads the same in both modes.

## Negative Logic (Prohibited Paths)

- ❌ Do not use elevation to convey meaning alone.

## Edge Cases

- None.

## Depth

DEPTH 0.98 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Different shadows per mode?
  **A:** One shadow color token as a light and dark pair. _Rationale:_ one definition. _Rejected:_ duplicated shadow scales.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/_MOC]] · [[src/PuduLangFui/Theme/Build/Theme]]
