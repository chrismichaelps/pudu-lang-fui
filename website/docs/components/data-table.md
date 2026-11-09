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
  Customer{name: "ken99@example.com", plan: "Success"},
  Customer{name: "abe45@example.com", plan: "Success"},
  Customer{name: "monserrat44@example.com", plan: "Processing"},
  Customer{name: "silas22@example.com", plan: "Success"},
  Customer{name: "carmella@example.com", plan: "Failed"}
]
let outline = Button.props().variant(Button.Outline).size(Button.Small)

column("36rem", [
    DataTable.toolbar().holding([DataTable.filter("email", "", "Filter emails..."), Button.button(Button.props().variant(Button.Outline)).holding([H.words("Columns"), Icon.sized(Icon.ChevronDown, Icon.Small)])]),
    DataTable.dataTable(
      [DataTable.selection("rows", |row: &Customer| row.name), DataTable.column("status", "Status", |row: &Customer| H.words(row.plan)), DataTable.sortable("email", "Email", |row: &Customer| H.words(row.name)), DataTable.column("actions", "", |_row: &Customer| Button.button(Button.props().variant(Button.Ghost).size(Button.IconTiny)).label("Open menu").holding([Icon.icon(Icon.More)]))],
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
