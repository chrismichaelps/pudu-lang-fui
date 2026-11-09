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
column("18rem", [Select.select("theme").holding([Select.option("light", "Light", true), Select.option("dark", "Dark"), Select.option("system", "System")])])
```

## API

```pudu
export fn select(name: Str, disabled: Bool = false) -> H.Node
export fn option(value: Str, caption: Str, selected: Bool = false) -> H.Node
export fn group(heading: Str) -> H.Node
export fn separator() -> H.Node
export fn style() -> Css.Block
```
