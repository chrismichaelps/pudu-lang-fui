---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Bubble.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.6
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Bubble]
---

# PuduLangFui.Components.Primitives.Bubble

## Purpose

Conversational content in a bubble.

## Interface

### Signatures

```pudu
export type Variant = Primary | Secondary | Muted | Outline | Destructive | Tinted | Ghost

export type Align = Start | End

export fn bubble(variant: Variant, align: Align) -> H.Node

export fn group() -> H.Node

export fn reaction() -> H.Node

export fn reactions() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Variant and alignment attributes
2. a group tightens neighbors.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- A long bubble collapses with `details` content supplied by the caller.

## Depth

DEPTH 0.6 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Own alignment?
  **A:** Yes, through a prop. _Rationale:_ the bubble is what moves. _Rejected:_ wrapper-only alignment.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/Turn]]
