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
let payments = [
  Customer{name: "ken99@example.com", plan: "Success", amount: "$316.00"},
  Customer{name: "abe45@example.com", plan: "Success", amount: "$242.00"},
  Customer{name: "monserrat44@example.com", plan: "Processing", amount: "$837.00"},
  Customer{name: "silas22@example.com", plan: "Success", amount: "$874.00"},
  Customer{name: "carmella@example.com", plan: "Failed", amount: "$721.00"}
]
let outline = Button.props().variant(Button.Outline).size(Button.Small)

column("36rem", [
    DataTable.toolbar().holding([DataTable.filter("email", "", "Filter emails..."), DataTable.visibility("columns", &tableColumns(), &[])]),
    DataTable.dataTable(
      tableColumns(),
      payments,
      DataTable.View{sort: "", descending: false, page: 1, lastPage: 1},
      DataTable.Links{sortBy: sorted, pageAt: here},
      "No results."
    ),
    DataTable.footer().holding([DataTable.selectedCount(5), Button.button(outline.disabled()).says("Previous"), Button.button(outline).says("Next")])
  ])
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
export fn footer() -> H.Node
export fn selectedCount(total: Int) -> H.Node
export fn style() -> Css.Block
```
