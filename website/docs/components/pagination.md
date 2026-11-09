---
title: Pagination
description: Links between pages of results.
---

# Pagination

Links between pages of results.

<div class="fui-preview"><a href="../previews/pagination.html">Open the Pagination preview</a></div>

## Installation

```bash
fui add pagination
```

## Usage

```pudu
Pagination.row([Pagination.previous("#"), Pagination.page(1, "#"), Pagination.page(2, "#", true), Pagination.page(3, "#"), Pagination.ellipsis(), Pagination.next("#")])
```

## API

```pudu
export fn previous(target: Str, disabled: Bool = false) -> H.Node
export fn next(target: Str, disabled: Bool = false) -> H.Node
export fn page(index: Int, target: Str, current: Bool = false) -> H.Node
export fn ellipsis() -> H.Node
export fn row(entries: Array[H.Node]) -> H.Node
export fn pagination(current: Int, last: Int, linkTo: fn(Int) -> Str) -> H.Node
export fn style() -> Css.Block
```
