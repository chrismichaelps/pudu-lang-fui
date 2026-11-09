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
/// A select with the given name, identified by that name.
export fn select(name: Str, disabled: Bool = false) -> H.Node

/// One choice.
export fn option(value: Str, caption: Str, selected: Bool = false) -> H.Node

/// A first choice shown as a hint until a real one is picked.
export fn placeholder(caption: Str) -> H.Node

/// Choices under a heading.
export fn group(heading: Str) -> H.Node

/// A line between choices.
export fn separator() -> H.Node

/// The styles of a select.
export fn style() -> Css.Block
```
