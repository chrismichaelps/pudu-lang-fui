---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Typography.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Typography]
---

# PuduLangFui.Components.Primitives.Typography

## Purpose

Text in every named role of the scale.

## Interface

### Signatures

```pudu
export type Kind = H1 | H2 | H3 | H4 | Paragraph | Blockquote | InlineCode | Lead | Large | Small | Muted

export fn text(kind: Kind) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A factory table maps each kind to the element it renders on.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on a kind.

## Edge Cases

- `Lead`, `Large`, `Small`, and `Muted` render paragraphs or spans.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** One function per role or one with a kind?
  **A:** One with a kind, dispatched by a table. _Rationale:_ one import, typed choices. _Rejected:_ fourteen functions.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
