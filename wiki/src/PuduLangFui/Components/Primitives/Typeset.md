---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Typeset.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Typeset]
---

# PuduLangFui.Components.Primitives.Typeset

## Purpose

Styles rendered documents from three controls: size, leading, and flow.

## Interface

### Signatures

```pudu
export type Props = { size: Str, leading: Str, flow: Str }

export fn props() -> Props

export trait Configuring {
  fn size(self: &Self, value: Str) -> Self

  fn leading(self: &Self, value: Str) -> Self

  fn flow(self: &Self, value: Str) -> Self
}

impl Configuring for Props

export fn typeset(given: Props) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Controls are inline custom properties
2. every element's size and gap is derived from them.

## Negative Logic (Prohibited Paths)

- ❌ Do not style outside the container.

## Edge Cases

- Holds trusted markup from a document converter through `.raw`.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How many controls?
  **A:** Three. _Rationale:_ a dozen values is a burden no one tunes. _Rejected:_ one property per heading level.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
