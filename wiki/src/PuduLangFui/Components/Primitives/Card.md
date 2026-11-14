---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Card.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.57
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Card]
---

# PuduLangFui.Components.Primitives.Card

## Purpose

A surface with header, title, description, action, content, and footer parts.

## Interface

### Signatures

```pudu
export type Size = Regular | Compact

export fn cardTree() -> Tree.Tree

export fn sizedTree(size: Size) -> Tree.Tree

export fn headerTree() -> Tree.Tree

export fn titleTree() -> Tree.Tree

export fn descriptionTree() -> Tree.Tree

export fn actionTree() -> Tree.Tree

export fn contentTree() -> Tree.Tree

export fn footerTree() -> Tree.Tree

export fn card() -> H.Node

export fn sized(size: Size) -> H.Node

export fn header() -> H.Node

export fn title() -> H.Node

export fn titled(heading: H.Node) -> H.Node

export fn description() -> H.Node

export fn action() -> H.Node

export fn content() -> H.Node

export fn footer() -> H.Node

export fn style() -> Css.Block
```

### Tree forms

`cardTree` is `sizedTree(Regular)`. `sizedTree`, `headerTree`, `actionTree`, `contentTree` and `footerTree`
answer `Tree.Tree` with the role Group, `titleTree` with the role Heading and `descriptionTree` with the
role Text. Their parts are `card`, `card-header`, `card-title`, `card-description`, `card-action`,
`card-content` and `card-footer`; `sizedTree` records the fact `size`, which `cardTree` inherits. Each
element function of the same name without the `Tree` suffix is its web view, for example
`header() = Tree.web(&headerTree())`. `titled` stays an element function: it dresses the heading it is
given with the part `card-title`.

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Core/Tree]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Each part is a slot
2. the header places the action beside the title with a grid.

## Negative Logic (Prohibited Paths)

- ❌ Do not make the title a heading level the page did not ask for.

## Edge Cases

- A compact size tightens padding only.

## Depth

DEPTH 0.57 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Which element is a card title?
  **A:** A `div` unless given a heading with `titled`. _Rationale:_ only the page knows its outline. _Rejected:_ a fixed `h3`.

## Referenced by

[[src/PuduLangFui/Blocks/Dashboard]] · [[src/PuduLangFui/Blocks/Login]] · [[src/PuduLangFui/Blocks/Pricing]] · [[src/PuduLangFui/Blocks/Signup]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/Confirmation]]
