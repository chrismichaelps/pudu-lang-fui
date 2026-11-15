---
type: module
path: "@root/src/PuduLangFui/Theme/Looks/Shared.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Theme.Looks.Shared]
---

# PuduLangFui.Theme.Looks.Shared

## Purpose

Rules every look carries: keyboard focus for interactive parts no look draws one for, pressed feedback on buttons, and a 44-pixel hit area on coarse pointers.

## Interface

### Signatures

```pudu
export const RULES: Array[Css.LookRule]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. One flat table, appended to the chosen look's rules by the look catalog, so slot filtering treats them like any other rule.
2. A named look answers its own rules followed by the shared rules.

## Negative Logic (Prohibited Paths)

- ❌ Do not restate appearance a look already sets.

## Edge Cases

- The hit area is a zero-specificity pseudo-element, so a look that positions a button keeps its position.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Repeat the rules in all eight looks?
  **A:** No, one shared table. _Rationale:_ the rules do not vary by look. _Rejected:_ eight copies.

## Referenced by

[[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Looks/Catalog]] · [[src/PuduLangFui/Theme/Looks/_MOC]]
