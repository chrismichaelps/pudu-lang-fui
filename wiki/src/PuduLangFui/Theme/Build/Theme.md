---
type: module
path: "@root/src/PuduLangFui/Theme/Build/Theme.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.81
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Build.Theme]
---

# PuduLangFui.Theme.Build.Theme

## Purpose

A complete theme: all seven aspects, a chain to tune them, and its rendering to tokens.

## Interface

### Signatures

```pudu
export type Theme = {
  color: Palette.Palette,
  typography: Typography.Typography,
  spacing: Spacing.Spacing,
  shape: Shape.Shape,
  elevation: Elevation.Elevation,
  motion: Motion.Motion,
  iconography: Iconography.Iconography,
  extra: Array[(Str, Str)],
  look: Array[Css.LookRule]
}

export fn defaults() -> Theme

export trait Tuning {
  fn brand(self: &Self, hue: Float64, chroma: Float64) -> Self

  fn palette(self: &Self, value: Palette.Palette) -> Self

  fn fonts(self: &Self, sans: Str, heading: Str) -> Self

  fn monospace(self: &Self, family: Str) -> Self

  fn textBase(self: &Self, size: Str) -> Self

  fn density(self: &Self, value: Spacing.Density) -> Self

  fn radius(self: &Self, value: Str) -> Self

  fn mood(self: &Self, value: Motion.Mood) -> Self

  fn iconStroke(self: &Self, value: Str) -> Self

  fn look(self: &Self, rules: Array[Css.LookRule]) -> Self

  fn token(self: &Self, name: Str, value: Str) -> Self
}

impl Tuning for Theme

export fn tokens(theme: &Theme) -> Array[(Str, Str)]

export fn render(theme: &Theme) -> Str

export fn renderScoped(theme: &Theme, selector: Str) -> Str
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Css]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Theme/Aspects/Elevation]] · [[src/PuduLangFui/Theme/Aspects/Iconography]] · [[src/PuduLangFui/Theme/Aspects/Motion]] · [[src/PuduLangFui/Theme/Aspects/Palette]] · [[src/PuduLangFui/Theme/Aspects/Shape]] · [[src/PuduLangFui/Theme/Aspects/Spacing]] · [[src/PuduLangFui/Theme/Aspects/Typography]] · [[src/PuduLangFui/Theme/Base/Tokens]] · [[src/PuduLangFui/Theme/Looks/Gentle]]

## Algorithm

1. Gather every aspect's declarations, append project tokens, and write them under `:root` with `color-scheme` so `light-dark()` follows the visitor
2. `data-mode` on the root forces a mode.

## Negative Logic (Prohibited Paths)

- ❌ Do not emit a second block of colors for dark mode.

## Edge Cases

- `renderScoped` writes the same tokens under any selector for a themed region.

## Depth

DEPTH 0.81 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** How does a page force dark mode?
  **A:** `data-mode="dark"` on the root. _Rationale:_ one attribute, and the server can set it from a preference. _Rejected:_ a class toggled by script.

## Referenced by

[[src/PuduLangFui]] · [[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Theme/Build/_MOC]] · [[src/PuduLangFui/Theme/Presets/Design]] · [[src/PuduLangFui/Theme/Presets/Preset]]
