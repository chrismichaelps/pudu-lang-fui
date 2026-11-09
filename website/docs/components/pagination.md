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
Pagination.pagination(5, 9, here)
```

## API

```pudu
export fn pagination(current: Int, last: Int, linkTo: fn(Int) -> Str) -> H.Node
export fn style() -> Css.Block
```
