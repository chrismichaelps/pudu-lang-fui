---
title: Search Field
description: A field for a query.
---

# Search Field

A field for a query.

<div class="fui-preview"><a href="../previews/search-field.html">Open the Search Field preview</a></div>

## Installation

```bash
fui add search-field
```

## Usage

```pudu
SearchField.field("query", "Search").css("inline-size", "20rem")
```

## API

```pudu
/// A search form sending `name` to `action`; `hint` is shown while the field is empty.
export fn field(name: Str, hint: Str, action: Str = "") -> H.Node

/// The styles of a search field.
export fn style() -> Css.Block
```
