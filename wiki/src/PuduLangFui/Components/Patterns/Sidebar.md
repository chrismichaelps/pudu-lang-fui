---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/Sidebar.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.59
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.Sidebar]
---

# PuduLangFui.Components.Patterns.Sidebar

## Purpose

An application shell's side navigation.

## Interface

### Signatures

```pudu
export type Side = Start | End

export type Variant = Plain | Floating | Inset

export fn provider(id: Str, collapsed: Bool = false) -> H.Node

export fn trigger(id: Str) -> H.Node

export fn overlay(id: Str) -> H.Node

export fn sidebar() -> H.Node

export fn header() -> H.Node

export fn content() -> H.Node

export fn footer() -> H.Node

export fn group() -> H.Node

export fn groupLabel() -> H.Node

export fn menu() -> H.Node

export fn menuItem() -> H.Node

export fn menuButton(target: Str, active: Bool = false) -> H.Node

export fn menuBadge() -> H.Node

export fn inset() -> H.Node

export fn groupContent() -> H.Node

export fn groupAction() -> H.Node

export fn menuAction() -> H.Node

export fn menuSkeleton() -> H.Node

export fn menuSub() -> H.Node

export fn menuSubItem() -> H.Node

export fn menuSubButton(target: Str, active: Bool) -> H.Node

export fn separator() -> H.Node

export fn rail(id: Str) -> H.Node

export fn styled(side: Side, variant: Variant, icons: Bool) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Constants/SidebarScript]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A hidden checkbox holds the state
2. at desktop width it collapses the panel, at phone width it opens a drawer over an overlay
3. the toggle, the overlay, and escape all close the drawer.

## Negative Logic (Prohibited Paths)

- ❌ Do not store state in a script.

## Edge Cases

- The server can render it collapsed.

## Depth

DEPTH 0.59 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Persistence?
  **A:** Server-rendered from a cookie the application reads. _Rationale:_ no flash. _Rejected:_ local storage.

## Referenced by

[[src/PuduLangFui/Blocks/Dashboard]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
