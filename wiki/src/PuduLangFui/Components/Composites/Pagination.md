---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Pagination.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.82
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Composites.Pagination]
---

# PuduLangFui.Components.Composites.Pagination

## Purpose

Links between pages of results.

## Interface

### Signatures

```pudu
export fn pagination(current: Int, last: Int, linkTo: fn(Int) -> Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Given current, last, and a link builder, write previous, a window of numbers with gaps, and next.

## Negative Logic (Prohibited Paths)

- ❌ Do not link to the current page.

## Edge Cases

- One page answers nothing.

## Depth

DEPTH 0.82 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Parts or data?
  **A:** Data. _Rationale:_ the window arithmetic is the hard part. _Rejected:_ parts the caller assembles.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Components/Patterns/DataTable]]
