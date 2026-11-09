---
type: module
path: "@root/src/PuduLangFui/Theme/Looks/Catalog.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Looks.Catalog]
---

# PuduLangFui.Theme.Looks.Catalog

## Purpose

Finds a look by name and states which look is the default.

## Interface

### Signatures

```pudu
export const DEFAULT: Str

export fn named(name: Str) -> Option[Array[Css.LookRule]]

export fn names() -> Array[Str]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Theme/Looks/Classic]] · [[src/PuduLangFui/Theme/Looks/Compact]] · [[src/PuduLangFui/Theme/Looks/Editorial]] · [[src/PuduLangFui/Theme/Looks/Gentle]] · [[src/PuduLangFui/Theme/Looks/Round]] · [[src/PuduLangFui/Theme/Looks/Sharp]] · [[src/PuduLangFui/Theme/Looks/Soft]] · [[src/PuduLangFui/Theme/Looks/Standard]]

## Algorithm

1. A constant table maps each name to its rules.

## Negative Logic (Prohibited Paths)

- ❌ An unknown name is absent, never a silent fallback.

## Edge Cases

- The default look must be listed in the table.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why a table?
  **A:** Looks are kinds. _Rationale:_ adding one is one line. _Rejected:_ a chain of comparisons.

## Referenced by

[[src/PuduLangFui/Theme/Looks/_MOC]] · [[src/PuduLangFui/Theme/Presets/Design]] · [[src/PuduLangFui/Theme/Presets/Preset]]
