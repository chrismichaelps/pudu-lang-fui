---
title: Context Menu
description: A menu on the secondary button.
---

# Context Menu

A menu on the secondary button.

<div class="fui-preview"><a href="../previews/context-menu.html">Open the Context Menu preview</a></div>

## Installation

```bash
fui add context-menu
```

## Usage

```pudu
H.div().holding([
  ContextMenu.area("menu").css("display", "flex").css("align-items", "center").css("justify-content", "center").css("inline-size", "20rem").css("block-size", "11rem").css("border", "1px dashed var(--fui-border)").css("border-radius", "var(--fui-radius-xl)").css("font-size", "var(--fui-text-sm)").says("Right click here"),
  ContextMenu.menu("menu").holding([ContextMenu.item().holding([H.words("Back"), ContextMenu.shortcut().says("⌘[")]), ContextMenu.item().flag("disabled").holding([H.words("Forward"), ContextMenu.shortcut().says("⌘]")]), ContextMenu.item().holding([H.words("Reload"), ContextMenu.shortcut().says("⌘R")]), ContextMenu.separator(), ContextMenu.item().says("Show Bookmarks")])
])
```

## API

```pudu
/// The region that opens the menu `id` on the secondary button.
export fn area(id: Str) -> H.Node

/// The menu for the id its area names.
export fn menu(id: Str) -> H.Node

/// A menu entry.
export fn item() -> H.Node

/// A line between runs of entries.
export fn separator() -> H.Node

/// A caption over a run of entries.
export fn label() -> H.Node

/// A key hint at the end of an entry.
export fn shortcut() -> H.Node

/// An entry holding a checkbox.
export fn checkboxItem(name: Str, value: Str, caption: Str, checked: Bool) -> H.Node

/// An entry holding a radio.
export fn radioItem(name: Str, value: Str, caption: Str, checked: Bool) -> H.Node

/// An entry opening the nested menu `id`.
export fn subTrigger(id: Str, caption: Str) -> H.Node

/// The nested menu for the id its entry names.
export fn subMenu(id: Str) -> H.Node

/// The styles of a context menu.
export fn style() -> Css.Block
```
