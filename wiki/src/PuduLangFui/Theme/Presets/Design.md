---
type: module
path: "@root/src/PuduLangFui/Theme/Presets/Design.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Theme.Presets.Design]
---

# PuduLangFui.Theme.Presets.Design

## Purpose

A complete set of design choices, its readable code, and the theme it describes.

## Interface

### Signatures

```pudu
export type Design = {
  look: Str,
  base: Str,
  theme: Str,
  chart: Str,
  icons: Str,
  font: Str,
  heading: Str,
  radius: Str,
  menu: Str,
  accent: Str
}

export fn initial() -> Design

export fn decode(code: Str) -> Result[Design, Str]

export fn encode(design: &Design) -> Str

export fn menuColorRules(color: Str) -> Array[Css.LookRule]

export fn menuAccentRules(accent: Str) -> Array[Css.LookRule]

export fn theme(design: &Design) -> Theme.Theme

export fn themeFor(picked: Str) -> Result[Theme.Theme, Str]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/DesignOptions]] · [[src/PuduLangFui/Constants/Swatches]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Looks/Catalog]] · [[src/PuduLangFui/Theme/Presets/Preset]]

## Algorithm

1. A code is ten dot-separated names checked against the option lists
2. the theme layers the base palette, the theme's colors, and the chart's colors, then adds the look and any menu rules.

## Negative Logic (Prohibited Paths)

- ❌ A wrong part count or an unknown name is refused with the name of the part.

## Edge Cases

- A heading of inherit follows the body family; a preset name or older code still resolves through themeFor.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why a readable code?
  **A:** It goes in a config file and a command. _Rationale:_ a reader can see and edit what it picks. _Rejected:_ an opaque short code.

## Referenced by

[[decisions/ADR-0012-looks-as-data]] · [[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Theme/Presets/_MOC]]
