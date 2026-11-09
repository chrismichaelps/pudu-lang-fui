---
type: module
path: "@root/src/PuduLangFui/Elements/Sources.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Sources]
---

# PuduLangFui.Elements.Sources

## Purpose

The links an agent used for a reply.

## Interface

### Signatures

```pudu
export type Source =

export fn source(title: Str, target: Str) -> Source

export fn sources(all: Array[Source], open: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A count opens to the links.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- No sources renders nothing.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** External link hardening?
  **A:** `rel=noopener noreferrer`. _Rationale:_ the links came from elsewhere. _Rejected:_ plain anchors.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
