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
/// One step in the trail.
export type Crumb = { caption: Str, target: Str }

/// A step that links.
export fn crumb(caption: Str, target: Str) -> Crumb

/// A step standing for hidden steps.
export fn collapsed() -> Crumb

/// A trail ending at the current page.
export fn breadcrumb(trail: &Array[Crumb]) -> H.Node

/// A step standing for hidden steps.
export fn ellipsis() -> H.Node

/// The styles of a breadcrumb.
export fn style() -> Css.Block
```
