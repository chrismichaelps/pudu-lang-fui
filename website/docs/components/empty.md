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
Empty.empty().css("inline-size", "26rem").holding([
    Empty.header().holding([Empty.media().holding([Icon.icon(Icon.Folder)]), Empty.title().says("No Projects Yet"), Empty.description().says("You haven't created any projects yet. Get started by creating your first project.")]),
    Empty.content().css("flex-direction", "row").css("justify-content", "center").holding([Button.button(Button.props()).says("Create Project"), Button.button(Button.props().variant(Button.Outline)).says("Import Project")]),
    Button.link("#", Button.props().variant(Button.Plain).size(Button.Small)).css("color", "var(--fui-muted-foreground)").holding([H.words("Learn More"), Icon.icon(Icon.ArrowUpRight)])
  ])
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
