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
/// The arrow-and-word link back a page.
export fn previous(target: Str, disabled: Bool = false) -> H.Node

/// The word-and-arrow link forward a page.
export fn next(target: Str, disabled: Bool = false) -> H.Node

/// A link to one page.
export fn page(index: Int, target: Str, current: Bool = false) -> H.Node

/// A mark standing for skipped pages.
export fn ellipsis() -> H.Node

/// Links placed by hand, in a row.
export fn row(entries: Array[H.Node]) -> H.Node

/// Links for moving between `last` pages, or nothing for a single page.
export fn pagination(current: Int, last: Int, linkTo: fn(Int) -> Str) -> H.Node

/// The styles of pagination.
export fn style() -> Css.Block
```
