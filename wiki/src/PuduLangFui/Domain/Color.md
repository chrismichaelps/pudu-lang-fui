---
type: module
path: "@root/src/PuduLangFui/Domain/Color.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.6
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Domain.Color]
---

# PuduLangFui.Domain.Color

## Purpose

OKLCH colors as numbers, their light and dark pairing, and WCAG contrast between two of them.

## Interface

### Signatures

```pudu
export type Oklch = { lightness: Float64, chroma: Float64, hue: Float64 }

export type Pair = { light: Oklch, dark: Oklch }

export fn oklch(lightness: Float64, chroma: Float64, hue: Float64) -> Oklch

export fn pair(light: Oklch, dark: Oklch) -> Pair

export fn spell(color: &Oklch) -> Str

export fn spellPair(colors: &Pair) -> Str

export fn luminance(color: &Oklch) -> Float64

export fn contrast(first: &Oklch, second: &Oklch) -> Float64
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Convert OKLCH to linear sRGB through OKLab and LMS
2. clamp each channel
3. relative luminance is the weighted sum
4. contrast is the ratio of the lighter and darker luminance, each plus 0.05.

## Negative Logic (Prohibited Paths)

- ❌ Do not apply a gamma curve: the conversion already lands in linear light.

## Edge Cases

- Out-of-gamut channels clamp. Equal colors answer exactly 1.

## Depth

DEPTH 0.6 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Store colors as text or numbers?
  **A:** Numbers. _Rationale:_ contrast cannot be audited from text. _Rejected:_ parsing color text.

## Referenced by

[[src/PuduLangFui/Domain/_MOC]] · [[src/PuduLangFui/Theme/Aspects/Palette]] · [[src/PuduLangFui/Theme/Audit/Contrast]] · [[src/PuduLangFui/Theme/Base/Tokens]]
