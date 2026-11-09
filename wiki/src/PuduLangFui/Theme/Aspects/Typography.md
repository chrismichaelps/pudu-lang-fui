---
type: module
path: "@root/src/PuduLangFui/Theme/Aspects/Typography.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Aspects.Typography]
---

# PuduLangFui.Theme.Aspects.Typography

## Purpose

The typography aspect: families, a size scale from one base, and weights.

## Interface

### Signatures

```pudu
export type Typography = {
  fontSans: Str,
  fontHeading: Str,
  fontMono: Str,
  textBase: Str,
  textXs: Str,
  textSm: Str,
  textMd: Str,
  textLg: Str,
  textXl: Str,
  text2xl: Str,
  text3xl: Str,
  leading: Str,
  leadingTight: Str,
  weightNormal: Str,
  weightMedium: Str,
  weightSemibold: Str,
  tracking: Str
} derives Tokens.Tokens

export fn defaults() -> Typography
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Fonts]] · [[src/PuduLangFui/Theme/Base/Tokens]]

## Algorithm

1. Each step is a `calc` of the base size, so changing the base moves the scale.

## Negative Logic (Prohibited Paths)

- ❌ Do not hard-code a pixel step.

## Edge Cases

- None.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** A modular ratio or fixed multipliers?
  **A:** Fixed multipliers. _Rationale:_ interface type wants small, even steps. _Rejected:_ a tunable ratio, which distorts small text.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/_MOC]] · [[src/PuduLangFui/Theme/Build/Theme]]
