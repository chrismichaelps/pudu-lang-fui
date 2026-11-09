---
title: Resizable
description: Panels the reader can resize.
---

# Resizable

Panels the reader can resize.

<div class="fui-preview"><a href="../previews/resizable.html">Open the Resizable preview</a></div>

## Installation

```bash
fui add resizable
```

## Usage

```pudu
let centered = |name: Str| H.div().css("display", "flex").css("block-size", "100%").css("align-items", "center").css("justify-content", "center").css("font-weight", "600").css("font-size", "var(--fui-text-sm)").says(name)

Resizable.group(Resizable.Horizontal).css("inline-size", "24rem").css("block-size", "15rem").css("border", "1px solid var(--fui-border)").css("border-radius", "var(--fui-radius)").holding([
  Resizable.panel("50%").holding([centered("One")]),
  Resizable.handle(Resizable.Horizontal, true),
  Resizable.panel("50%").holding([Resizable.group(Resizable.Vertical).css("block-size", "100%").holding([Resizable.panel("25%").holding([centered("Two")]), Resizable.handle(Resizable.Vertical, true), Resizable.panel("75%").holding([centered("Three")])])])
])
```

## API

```pudu
/// The axis panels divide along.
export type Orientation = Horizontal | Vertical

/// Panels dividing a space along an axis.
export fn group(orientation: Orientation) -> H.Node

/// A panel starting at the given share of the space, such as `30%`.
export fn panel(share: Str) -> H.Node

/// The line between two panels of a group along `orientation`, with a grip when `grip` holds.
export fn handle(orientation: Orientation, grip: Bool = false) -> H.Node

/// The styles of resizable panels.
export fn style() -> Css.Block
```
