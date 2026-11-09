---
type: module
path: "@root/src/PuduLangFui/Components/Patterns/DataTable.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Patterns.DataTable]
---

# PuduLangFui.Components.Patterns.DataTable

## Purpose

A table from typed columns, with sorting links, selection, and paging.

## Interface

### Signatures

```pudu
export type Column[T] = { key: Str, header: Str, sortable: Bool, cell: fn(&T) -> H.Node }

export type View = { sort: Str, descending: Bool, page: Int, lastPage: Int }

export type Links = { sortBy: fn(Str, Bool) -> Str, pageAt: fn(Int) -> Str }

export fn column[T](key: Str, header: Str, cell: fn(&T) -> H.Node) -> Column[T]

export fn sortable[T](key: Str, header: Str, cell: fn(&T) -> H.Node) -> Column[T]

export fn dataTable[T](columns: Array[Column[T]], rows: Array[T], view: View, links: Links, emptyMessage: Str) -> H.Node

export fn selection[T](name: Str, keyOf: fn(&T) -> Str) -> Column[T]

export fn filter(name: Str, value: Str, hint: Str) -> H.Node

export fn visibility[T](id: Str, columns: &Array[Column[T]], hidden: &Array[Str]) -> H.Node

export fn toolbar() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Pagination]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Components/Primitives/Popover]] · [[src/PuduLangFui/Components/Primitives/Table]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Each column supplies a header and a cell function
2. sort links and pages are built from a state value.

## Negative Logic (Prohibited Paths)

- ❌ Do not sort in the view
- ❌ the query does.

## Edge Cases

- No rows renders the given empty message.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Client sorting?
  **A:** Links. _Rationale:_ a server has the data. _Rejected:_ shipping rows to a script.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/_MOC]]
