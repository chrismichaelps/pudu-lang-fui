---
type: module
path: "@root/src/PuduLangFui/Components/Composites/DropdownMenu.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.77
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Composites.DropdownMenu]
---

# PuduLangFui.Components.Composites.DropdownMenu

## Purpose

A menu opened from a button.

## Interface

### Signatures

```pudu
export fn trigger(id: Str, given: Button.Props) -> H.Node

export fn menu(id: Str) -> H.Node

export fn item(destructive: Bool = false) -> H.Node

export fn link(target: Str) -> H.Node

export fn checkboxItem(name: Str, value: Str, caption: Str, checked: Bool = false) -> H.Node

export fn radioItem(name: Str, value: Str, caption: Str, checked: Bool = false) -> H.Node

export fn label() -> H.Node

export fn separator() -> H.Node

export fn shortcut() -> H.Node

export fn subTrigger(id: Str, caption: Str) -> H.Node

export fn subMenu(id: Str) -> H.Node

export fn group() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A popover with `role=menu`
2. items are buttons or links
3. check and radio items are native inputs in labels.

## Negative Logic (Prohibited Paths)

- ❌ Do not implement type-ahead.

## Edge Cases

- Sub-menus are nested popovers.

## Depth

DEPTH 0.77 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Arrow keys?
  **A:** Tab order only. _Rationale:_ correct without a script. _Rejected:_ a roving-focus behavior.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Components/Patterns/Menubar]]
