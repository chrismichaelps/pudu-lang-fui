---
title: Data Table
description: A table from typed columns.
---

# Data Table

A table from typed columns.

<div class="fui-preview"><a href="../previews/data-table.html">Open the Data Table preview</a></div>

## Installation

```bash
fui add data-table
```

## Usage

```pudu
column("36rem", [DataTable.dataTable(
      [DataTable.sortable("name", "Name", |row: &Customer| H.words(row.name)), DataTable.column("plan", "Plan", |row: &Customer| Badge.badge(Badge.Secondary).says(row.plan))],
      [Customer{name: "Ada", plan: "Pro"}, Customer{name: "Grace", plan: "Free"}],
      DataTable.View{sort: "name", descending: false, page: 2, lastPage: 5},
      DataTable.Links{sortBy: sorted, pageAt: here},
      "No customers"
    )])
```

## API

```pudu
export type Column[T] = key: Str, header: Str, sortable: Bool, cell: fn(&T) -> H.Node }
export type View = sort: Str, descending: Bool, page: Int, lastPage: Int }
export type Links = sortBy: fn(Str, Bool) -> Str, pageAt: fn(Int) -> Str }
export fn column[T](key: Str, header: Str, cell: fn(&T) -> H.Node) -> Column[T]
export fn sortable[T](key: Str, header: Str, cell: fn(&T) -> H.Node) -> Column[T]
export fn dataTable[T](columns: Array[Column[T]], rows: Array[T], view: View, links: Links, emptyMessage: Str) -> H.Node
export fn selection[T](name: Str, keyOf: fn(&T) -> Str) -> Column[T]
export fn filter(name: Str, value: Str, hint: Str) -> H.Node
export fn visibility[T](id: Str, columns: &Array[Column[T]], hidden: &Array[Str]) -> H.Node
export fn toolbar() -> H.Node
export fn style() -> Css.Block
```
