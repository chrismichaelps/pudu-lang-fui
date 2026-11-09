---
title: Native Select
description: The platform select, themed.
---

# Native Select

The platform select, themed.

<div class="fui-preview"><a href="../previews/native-select.html">Open the Native Select preview</a></div>

## Installation

```bash
fui add native-select
```

## Usage

```pudu
NativeSelect.select("status").css("inline-size", "fit-content").holding([NativeSelect.option("", "Select status", true), NativeSelect.option("todo", "Todo"), NativeSelect.option("progress", "In Progress"), NativeSelect.option("done", "Done"), NativeSelect.option("cancelled", "Cancelled")])
```

## API

```pudu
export fn select(name: Str, disabled: Bool = false) -> H.Node
export fn option(value: Str, caption: Str, selected: Bool = false) -> H.Node
export fn group(heading: Str) -> H.Node
export fn style() -> Css.Block
```
