---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/Menubar.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.Menubar]
---

# PuduLangFui.Components.Patterns.Menubar

## Purpose

A row of menus.

## Interface

### Signatures

```pudu
export fn menubar() -> H.Node

export fn menu(id: Str, caption: Str, entries: Array[H.Node]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/DropdownMenu]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `role=menubar` row of dropdown triggers.

## Negative Logic (Prohibited Paths)

- ❌ Do not duplicate DropdownMenu.

## Edge Cases

- Menus are independent popovers.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Share DropdownMenu's parts?
  **A:** Yes, callers use them for the items. _Rationale:_ one menu. _Rejected:_ a second set.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
