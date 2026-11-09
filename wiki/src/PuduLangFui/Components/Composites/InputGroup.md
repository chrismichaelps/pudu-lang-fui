---
type: module
path: "@root/src/PuduLangFui/Components/Composites/InputGroup.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.59
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.InputGroup]
---

# PuduLangFui.Components.Composites.InputGroup

## Purpose

A field joined with text, icons, or buttons.

## Interface

### Signatures

```pudu
export type Align = Start | End | BlockStart | BlockEnd

export fn group() -> H.Node

export fn stacked() -> H.Node

export fn input(name: Str, kind: Str = "text") -> H.Node

export fn addon(align: Align) -> H.Node

export fn textarea(name: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A wrapper draws the border and focus through `:has`
2. addons sit on either end.

## Negative Logic (Prohibited Paths)

- ❌ Do not nest a bordered input.

## Edge Cases

- Addons align to start or end logically.

## Depth

DEPTH 0.59 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Who draws focus?
  **A:** The wrapper, through `:focus-within`. _Rationale:_ the group reads as one control. _Rejected:_ a ring on the inner input.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
