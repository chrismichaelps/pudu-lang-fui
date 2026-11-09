---
type: module
path: "@root/src/PuduLangFui/Theme/Aspects/Shape.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.98
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Aspects.Shape]
---

# PuduLangFui.Theme.Aspects.Shape

## Purpose

The shape aspect: a base radius, the scale derived from it, and the border width.

## Interface

### Signatures

```pudu
export type Shape = {
  radius: Str,
  radiusXs: Str,
  radiusSm: Str,
  radiusMd: Str,
  radiusLg: Str,
  radiusXl: Str,
  radius2xl: Str,
  radius3xl: Str,
  radius4xl: Str,
  radiusFull: Str,
  borderWidth: Str
} derives Tokens.Tokens

export fn from(radius: Str) -> Shape
```

### Linkage

- **Requires:** [[src/PuduLangFui/Theme/Base/Tokens]]

## Algorithm

1. Each step is a multiple of the base
2. `radiusFull` is constant.

## Negative Logic (Prohibited Paths)

- ❌ Do not write a literal radius in a component.

## Edge Cases

- A base of zero squares every corner except full.

## Depth

DEPTH 0.98 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** One radius or many?
  **A:** One base and a derived scale. _Rationale:_ nested corners stay proportional. _Rejected:_ independent radii.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/_MOC]] · [[src/PuduLangFui/Theme/Build/Theme]]
