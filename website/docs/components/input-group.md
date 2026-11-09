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
/// Which end an addon sits at.
export type Align = Start | End | BlockStart | BlockEnd

/// A joined group.
export fn group() -> H.Node

/// A joined group holding a multi-line field and addons above or below it.
export fn stacked() -> H.Node

/// A field inside the group, with the given name.
export fn input(name: Str, kind: Str = "text") -> H.Node

/// Text, an icon, or a button joined to the field.
export fn addon(align: Align) -> H.Node

/// A multi-line field inside the group, with the given name.
export fn textarea(name: Str) -> H.Node

/// The styles of a group.
export fn style() -> Css.Block
```
