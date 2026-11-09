---
type: module
path: "@root/src/PuduLangFui/Components/Composites/ContextMenu.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.59
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.ContextMenu]
---

# PuduLangFui.Components.Composites.ContextMenu

## Purpose

A menu opened with the secondary button.

## Interface

### Signatures

```pudu
export fn area(id: Str) -> H.Node

export fn menu(id: Str) -> H.Node

export fn item() -> H.Node

export fn separator() -> H.Node

export fn label() -> H.Node

export fn shortcut() -> H.Node

export fn checkboxItem(name: Str, value: Str, caption: Str, checked: Bool) -> H.Node

export fn radioItem(name: Str, value: Str, caption: Str, checked: Bool) -> H.Node

export fn subTrigger(id: Str, caption: Str) -> H.Node

export fn subMenu(id: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A behavior shows the popover at the pointer. With scripts off the browser's own menu appears.

## Negative Logic (Prohibited Paths)

- ❌ Do not hide actions only here.

## Edge Cases

- Keyboard context-menu key fires the same event.

## Depth

DEPTH 0.59 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Script at all?
  **A:** Yes, one small behavior. _Rationale:_ no declarative form exists. _Rejected:_ omitting the component.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
