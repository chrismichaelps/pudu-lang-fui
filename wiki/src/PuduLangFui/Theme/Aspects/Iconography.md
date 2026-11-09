---
type: module
path: "@root/src/PuduLangFui/Theme/Aspects/Iconography.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.93
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Aspects.Iconography]
---

# PuduLangFui.Theme.Aspects.Iconography

## Purpose

The iconography aspect: icon sizes and stroke weight.

## Interface

### Signatures

```pudu
export type Iconography = { iconSm: Str, iconMd: Str, iconLg: Str, iconStroke: Str } derives Tokens.Tokens

export fn defaults() -> Iconography
```

### Linkage

- **Requires:** [[src/PuduLangFui/Theme/Base/Tokens]]

## Algorithm

1. Records of plain lengths.

## Negative Logic (Prohibited Paths)

- ❌ Do not set icon size in a component without these tokens.

## Edge Cases

- None.

## Depth

DEPTH 0.93 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Choose an icon library?
  **A:** No, one built-in set drawn with `currentColor` and a stroke token. _Rationale:_ no dependency and one look. _Rejected:_ a pluggable icon table.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/_MOC]] · [[src/PuduLangFui/Theme/Build/Theme]]
