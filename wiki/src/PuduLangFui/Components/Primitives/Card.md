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

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

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
