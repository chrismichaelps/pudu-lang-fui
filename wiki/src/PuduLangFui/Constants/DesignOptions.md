---
type: module
path: "@root/src/PuduLangFui/Constants/DesignOptions.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.DesignOptions]
---

# PuduLangFui.Constants.DesignOptions

## Purpose

Every choice a design can make: colors, families, radii, menu treatments, icon libraries, and the shape of a design code.

## Interface

### Signatures

```pudu
export const BASE_COLORS: Array[Str]

export const ACCENT_COLORS: Array[Str]

export const FONTS: Array[(Str, Str, Str)]

export const INHERIT: Str

export const RADII: Array[(Str, Str)]

export const DEFAULT_RADIUS: Str

export const MENU_COLORS: Array[Str]

export const MENU_ACCENTS: Array[Str]

export const ICON_LIBRARIES: Array[(Str, Str, Str)]

export const ICON_NAMES: Array[(Str, Array[Str])]

export const CODE_SEPARATOR: Str

export const CODE_PARTS: Int

export const MENU_SLOTS: Array[Str]

export const MENU_INVERTED: Str

export const MENU_TRANSLUCENT: Str

export const MENU_BOLD: Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ An icon with no match in a library is left empty so its drawing stays unchanged.

## Edge Cases

- The empty radius value keeps the look's own corners.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why constants beside the swatches?
  **A:** The generator, the page, and the checks read the same lists. _Rationale:_ one source. _Rejected:_ lists inside the page script.

## Referenced by

[[src/PuduLangFui/Constants/_MOC]] · [[src/PuduLangFui/Theme/Presets/Design]]
