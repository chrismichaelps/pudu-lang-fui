---
title: Theming
description: Seven design aspects, tuned in one value.
---

# Theming

A theme is one value holding seven aspects: color, typography, spacing, shape, elevation, motion, and
iconography. Each becomes `--fui-` custom properties.

```pudu
Theme.defaults().brand(264.0, 0.14).radius("0.75rem").density(Spacing.Compact)
```

| Method | Aspect | Effect |
| --- | --- | --- |
| `brand(hue, chroma)` | Color | Derives the whole palette. |
| `fonts(sans, heading)`, `textBase(size)` | Typography | Sets families and the base of the scale. |
| `density(value)` | Spacing | Re-spaces every component. |
| `radius(value)` | Shape | Sets the base every corner is measured from. |
| `mood(value)` | Motion | `Snappy`, `Calm`, or `Still`. |
| `iconStroke(value)` | Iconography | Sets the stroke width. |
| `token(name, value)` | Any | Adds or overrides a token. |

## Create

The [Create page](../create.md) lets you choose a style, base color, theme, chart color, fonts, icon library, radius, and menu treatment against a live preview. It gives you a readable design code that `fui init --preset` and `fui apply` accept.

## Presets

```bash
./fui preset list
./fui apply harbor
./fui apply h264-c14-r10-compact
```

A code spells hue, chroma, radius in pixels, and density, so a whole look fits in one line of a diff.

## Tokens in styles

A style writes `$primary`, which becomes `var(--fui-primary)`. Surfaces pair with a `-foreground`
token. `fui doctor` reports any token that does not exist.

## Legibility

`Contrast.audit` checks every text and surface pairing in both modes. Run `fui doctor` after changing
a palette.
