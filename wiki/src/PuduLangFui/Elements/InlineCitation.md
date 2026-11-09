---
type: module
path: "@root/src/PuduLangFui/Elements/InlineCitation.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.InlineCitation]
---

# PuduLangFui.Elements.InlineCitation

## Purpose

A source in the sentence that opens on hover.

## Interface

### Signatures

```pudu
export fn inlineCitation(label: Str, target: Str, title: Str, summary: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/HoverCard]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A short name in the sentence opens a card on hover.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Keyboard reveals on focus.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Footnote or card?
  **A:** Card. _Rationale:_ the reader stays in the sentence. _Rejected:_ jump to a list.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
