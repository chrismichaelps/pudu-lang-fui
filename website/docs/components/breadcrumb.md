---
title: Breadcrumb
description: Where a page sits.
---

# Breadcrumb

Where a page sits.

<div class="fui-preview"><a href="../previews/breadcrumb.html">Open the Breadcrumb preview</a></div>

## Installation

```bash
fui add breadcrumb
```

## Usage

```pudu
Breadcrumb.breadcrumb(&[Breadcrumb.crumb("Home", "#"), Breadcrumb.collapsed(), Breadcrumb.crumb("Components", "#"), Breadcrumb.crumb("Breadcrumb", "#")])
```

## API

```pudu
export type Crumb = { caption: Str, target: Str }
export fn crumb(caption: Str, target: Str) -> Crumb
export fn collapsed() -> Crumb
export fn breadcrumb(trail: &Array[Crumb]) -> H.Node
export fn ellipsis() -> H.Node
export fn style() -> Css.Block
```
