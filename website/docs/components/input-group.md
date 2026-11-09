---
title: Input Group
description: A field joined with addons.
---

# Input Group

A field joined with addons.

<div class="fui-preview"><a href="../previews/input-group.html">Open the Input Group preview</a></div>

## Installation

```bash
fui add input-group
```

## Usage

```pudu
column("20rem", [InputGroup.group().holding([InputGroup.addon(InputGroup.Start).holding([Icon.icon(Icon.Search)]), InputGroup.input("query").placeholder("Search..."), InputGroup.addon(InputGroup.End).says("12 results")])])
```

## API

```pudu
export type Align = Start | End | BlockStart | BlockEnd
export fn group() -> H.Node
export fn stacked() -> H.Node
export fn input(name: Str, kind: Str = "text") -> H.Node
export fn addon(align: Align) -> H.Node
export fn textarea(name: Str) -> H.Node
export fn style() -> Css.Block
```
