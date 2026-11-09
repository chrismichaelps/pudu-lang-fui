---
title: Spinner
description: An activity indicator.
---

# Spinner

An activity indicator.

<div class="fui-preview"><a href="../previews/spinner.html">Open the Spinner preview</a></div>

## Installation

```bash
fui add spinner
```

## Usage

```pudu
column("20rem", [Row.small(Row.Muted).holding([Row.media().holding([Spinner.spinner("Loading")]), Row.content().holding([Row.title().says("Processing payment...")]), Row.content().css("flex", "none").css("justify-content", "flex-end").holding([H.span().css("font-size", "var(--fui-text-sm)").says("$100.00")])])])
```

## API

```pudu
/// An indicator announcing the given caption.
export fn spinner(caption: Str = "Loading") -> H.Node

/// The styles of an indicator.
export fn style() -> Css.Block
```
