---
title: Toolbar
description: A bar with leading, title and trailing regions.
---

# Toolbar

A bar with leading, title and trailing regions.

<div class="fui-preview"><a href="../previews/toolbar.html">Open the Toolbar preview</a></div>

## Installation

```bash
fui add toolbar
```

## Usage

```pudu
let quiet = Button.props().variant(Button.Ghost).size(Button.IconMedium)

Toolbar.toolbar("Inbox").css("inline-size", "22rem").holding([
  Toolbar.leading().holding([Button.button(quiet).label("Back").holding([Icon.icon(Icon.ChevronLeft)])]),
  Toolbar.title().says("Inbox"),
  Toolbar.trailing().holding([Button.button(quiet).label("Compose").holding([Icon.icon(Icon.Edit)])])
])
```

## API

```pudu
/// A bar named for assistive software.
export fn toolbar(caption: Str) -> H.Node

/// The region at the bar's start.
export fn leading() -> H.Node

/// The bar's centered title.
export fn title() -> H.Node

/// The region at the bar's end.
export fn trailing() -> H.Node

/// The styles of a toolbar.
export fn style() -> Css.Block
```
