---
type: module
path: "@root/src/PuduLangFui/Components/Composites/NavigationMenu.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.6
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.NavigationMenu]
---

# PuduLangFui.Components.Composites.NavigationMenu

## Purpose

Site navigation with fly-out panels.

## Interface

### Signatures

```pudu
export fn navigationMenu(caption: Str) -> H.Node

export fn list() -> H.Node

export fn item() -> H.Node

export fn link(target: Str, current: Bool = false) -> H.Node

export fn trigger(id: Str, caption: Str) -> H.Node

export fn panel(id: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `nav` of links and popover triggers.

## Negative Logic (Prohibited Paths)

- ❌ Do not open on hover alone.

## Edge Cases

- Links need no panel.

## Depth

DEPTH 0.6 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Hover?
  **A:** Click and keyboard. _Rationale:_ predictable on every device. _Rejected:_ hover intent timers.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
