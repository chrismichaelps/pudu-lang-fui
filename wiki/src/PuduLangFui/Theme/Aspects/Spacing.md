---
type: module
path: "@root/src/PuduLangFui/Theme/Aspects/Spacing.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Aspects.Spacing]
---

# PuduLangFui.Theme.Aspects.Spacing

## Purpose

The spacing aspect: one unit and everything measured in it, including control heights.

## Interface

### Signatures

```pudu
export type Density = Compact | Comfortable | Spacious

export type Spacing = {
  unit: Str,
  space1: Str,
  space2: Str,
  space3: Str,
  space4: Str,
  space5: Str,
  space6: Str,
  space8: Str,
  space10: Str,
  space12: Str,
  controlSm: Str,
  controlMd: Str,
  controlLg: Str
} derives Tokens.Tokens

export fn unitOf(density: Density) -> Str

export fn at(density: Density) -> Spacing
```

### Linkage

- **Requires:** [[src/PuduLangFui/Theme/Base/Tokens]]

## Algorithm

1. Each space and control height is a `calc` of the unit
2. density picks the unit.

## Negative Logic (Prohibited Paths)

- ❌ Do not size a control outside this scale.

## Edge Cases

- None.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Separate compact component variants?
  **A:** No, density changes the unit. _Rationale:_ one value re-spaces every component. _Rejected:_ per-component compact props.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/_MOC]] · [[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Presets/Preset]]
