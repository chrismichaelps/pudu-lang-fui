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
export fn previous(target: Str, disabled: Bool = false) -> H.Node

export fn next(target: Str, disabled: Bool = false) -> H.Node

export fn page(index: Int, target: Str, current: Bool = false) -> H.Node

export fn ellipsis() -> H.Node

export fn row(entries: Array[H.Node]) -> H.Node

export fn pagination(current: Int, last: Int, linkTo: fn(Int) -> Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Links are built from a page count, or placed by hand through the exported parts.

## Negative Logic (Prohibited Paths)

- ❌ Do not link to the current page.

## Edge Cases

- A single page renders nothing.

## Depth

DEPTH 0.82 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Parts or data?
  **A:** Data. _Rationale:_ the window arithmetic is the hard part. _Rejected:_ parts the caller assembles.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Components/Patterns/DataTable]]
