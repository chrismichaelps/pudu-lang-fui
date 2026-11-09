---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Item.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.58
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Item]
---

# PuduLangFui.Components.Primitives.Item

## Purpose

A row of media, text, and actions.

## Interface

### Signatures

```pudu
export type Variant = Plain | Outline | Muted

export fn item(variant: Variant) -> H.Node

export fn small(variant: Variant) -> H.Node

export fn of(element: H.Node, variant: Variant) -> H.Node

export fn media() -> H.Node

export fn content() -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn actions() -> H.Node

export fn group() -> H.Node

export fn header() -> H.Node

export fn footer() -> H.Node

export fn separator() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Named parts in a flex row
2. a group stacks them.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- An item can be a link by passing `H.a()` to `of`.

## Depth

DEPTH 0.58 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Row or list element?
  **A:** Any element through `of`. _Rationale:_ rows are links, list items, or plain. _Rejected:_ a fixed tag.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
