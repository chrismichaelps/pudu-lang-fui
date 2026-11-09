---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/NativeSelect.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.72
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.NativeSelect]
---

# PuduLangFui.Components.Primitives.NativeSelect

## Purpose

The platform's select with the theme's look.

## Interface

### Signatures

```pudu
export fn select(name: Str, disabled: Bool = false) -> H.Node

export fn option(value: Str, caption: Str, selected: Bool = false) -> H.Node

export fn group(heading: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A wrapper draws the chevron
2. the `select` keeps its native popup.

## Negative Logic (Prohibited Paths)

- ❌ Do not customize the popup.

## Edge Cases

- Disabled dims the wrapper.

## Depth

DEPTH 0.72 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why keep this beside Select?
  **A:** It is the right choice on touch-first forms. _Rationale:_ the native picker is best there. _Rejected:_ only one select.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/ModelSelector]]
