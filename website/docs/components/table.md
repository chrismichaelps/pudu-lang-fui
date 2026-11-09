---
title: Table
description: A styled table in a scrolling frame.
---

# Table

A styled table in a scrolling frame.

<div class="fui-preview"><a href="../previews/table.html">Open the Table preview</a></div>

## Installation

```bash
fui add table
```

## Usage

```pudu
column("28rem", [Table.table([Table.header().holding([Table.row().holding([Table.head().says("Invoice"), Table.head().says("Status")])]), Table.body().holding([Table.row().holding([Table.cell().says("INV-001"), Table.cell().says("Paid")]), Table.row().holding([Table.cell().says("INV-002"), Table.cell().says("Pending")])])])])
```

## API

```pudu
export fn table(rows: Array[H.Node]) -> H.Node
export fn caption() -> H.Node
export fn header() -> H.Node
export fn body() -> H.Node
export fn footer() -> H.Node
export fn row() -> H.Node
export fn head() -> H.Node
export fn cell() -> H.Node
export fn style() -> Css.Block
```
