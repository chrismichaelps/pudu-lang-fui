---
title: Select
description: A select with a themed popup.
---

# Select

A select with a themed popup.

<div class="fui-preview"><a href="../previews/select.html">Open the Select preview</a></div>

## Installation

```bash
fui add select
```

## Usage

```pudu
column("12rem", [Select.select("fruit").css("inline-size", "100%").holding([Select.placeholder("Select a fruit"), Select.option("apple", "Apple"), Select.option("banana", "Banana"), Select.option("blueberry", "Blueberry"), Select.option("grapes", "Grapes"), Select.option("pineapple", "Pineapple")])])
```

## API

```pudu
export fn select(name: Str, disabled: Bool = false) -> H.Node
export fn option(value: Str, caption: Str, selected: Bool = false) -> H.Node
export fn placeholder(caption: Str) -> H.Node
export fn group(heading: Str) -> H.Node
export fn separator() -> H.Node
export fn style() -> Css.Block
```
