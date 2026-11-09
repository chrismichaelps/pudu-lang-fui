---
title: Empty
description: What a view shows when empty.
---

# Empty

What a view shows when empty.

<div class="fui-preview"><a href="../previews/empty.html">Open the Empty preview</a></div>

## Installation

```bash
fui add empty
```

## Usage

```pudu
Empty.empty().css("inline-size", "24rem").holding([Empty.media().holding([Icon.icon(Icon.Folder)]), Empty.title().says("No projects yet"), Empty.description().says("You have not created any projects."), Empty.content().holding([Button.button(Button.props()).says("Create project")])])
```

## API

```pudu
export fn empty() -> H.Node
export fn media() -> H.Node
export fn title() -> H.Node
export fn description() -> H.Node
export fn content() -> H.Node
export fn header() -> H.Node
export fn style() -> Css.Block
```
