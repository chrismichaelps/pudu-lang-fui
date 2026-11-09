---
type: module
path: "@root/src/PuduLangFui/Theme/Aspects/Palette.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Aspects.Palette]
---

# PuduLangFui.Theme.Aspects.Palette

## Purpose

The color aspect, and the palette a single hue and chroma derive.

## Interface

### Signatures

```pudu
export type Palette = {
  background: Color.Pair,
  foreground: Color.Pair,
  card: Color.Pair,
  cardForeground: Color.Pair,
  popover: Color.Pair,
  popoverForeground: Color.Pair,
  primary: Color.Pair,
  primaryForeground: Color.Pair,
  secondary: Color.Pair,
  secondaryForeground: Color.Pair,
  muted: Color.Pair,
  mutedForeground: Color.Pair,
  accent: Color.Pair,
  accentForeground: Color.Pair,
  destructive: Color.Pair,
  destructiveForeground: Color.Pair,
  success: Color.Pair,
  successForeground: Color.Pair,
  warning: Color.Pair,
  warningForeground: Color.Pair,
  info: Color.Pair,
  infoForeground: Color.Pair,
  border: Color.Pair,
  input: Color.Pair,
  ring: Color.Pair,
  chart1: Color.Pair,
  chart2: Color.Pair,
  chart3: Color.Pair,
  chart4: Color.Pair,
  chart5: Color.Pair,
  sidebar: Color.Pair,
  sidebarForeground: Color.Pair,
  sidebarPrimary: Color.Pair,
  sidebarPrimaryForeground: Color.Pair,
  sidebarAccent: Color.Pair,
  sidebarAccentForeground: Color.Pair,
  sidebarBorder: Color.Pair
} derives Tokens.Tokens

export fn derived(hue: Float64, chroma: Float64) -> Palette
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Hues]] · [[src/PuduLangFui/Domain/Color]] · [[src/PuduLangFui/Theme/Base/Tokens]]

## Algorithm

1. Neutrals take a whisper of the hue
2. primary takes the full chroma, darker in light mode and lighter in dark mode
3. status colors keep fixed hues so meaning does not change with brand.

## Negative Logic (Prohibited Paths)

- ❌ Do not derive status hues from the brand.

## Edge Cases

- Chroma zero gives a pure neutral palette.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** How many controls should recoloring a whole system take?
  **A:** Two: hue and chroma. _Rationale:_ the audit proves the results legible, so nobody hand-tunes thirty values. _Rejected:_ thirty required fields.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/_MOC]] · [[src/PuduLangFui/Theme/Audit/Contrast]] · [[src/PuduLangFui/Theme/Build/Theme]]
