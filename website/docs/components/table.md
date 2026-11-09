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
let invoice = |number: Str, status: Str, method: Str, amount: Str| Table.row().holding([Table.cell().css("font-weight", "500").says(number), Table.cell().says(status), Table.cell().says(method), Table.cell().css("text-align", "right").says(amount)])

column("30rem", [Table.table([
        Table.caption().says("A list of your recent invoices."),
        Table.header().holding([Table.row().holding([Table.head().says("Invoice"), Table.head().says("Status"), Table.head().says("Method"), Table.head().css("text-align", "right").says("Amount")])]),
        Table.body().holding([invoice("INV001", "Paid", "Credit Card", "$250.00"), invoice("INV002", "Pending", "PayPal", "$150.00"), invoice("INV003", "Unpaid", "Bank Transfer", "$350.00"), invoice("INV004", "Paid", "Credit Card", "$450.00"), invoice("INV005", "Paid", "PayPal", "$550.00"), invoice("INV006", "Pending", "Bank Transfer", "$200.00"), invoice("INV007", "Unpaid", "Credit Card", "$300.00")]),
        Table.footer().holding([Table.row().holding([Table.cell().at("colspan", "3").says("Total"), Table.cell().css("text-align", "right").says("$2,500.00")])])
      ])])
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
