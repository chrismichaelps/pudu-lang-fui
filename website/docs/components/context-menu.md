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
    ContextMenu.area("menu").css("padding", "var(--fui-space-12)").css("border", "1px dashed var(--fui-border)").css("border-radius", "var(--fui-radius-2xl)").says("Right-click here"),
    ContextMenu.menu("menu").holding([ContextMenu.item().holding([H.words("Back"), ContextMenu.shortcut().says("⌘[")]), ContextMenu.separator(), ContextMenu.item().says("Reload")])
  ])
```

## API

```pudu
export fn area(id: Str) -> H.Node
export fn menu(id: Str) -> H.Node
export fn item() -> H.Node
export fn separator() -> H.Node
export fn label() -> H.Node
export fn shortcut() -> H.Node
export fn checkboxItem(name: Str, value: Str, caption: Str, checked: Bool) -> H.Node
export fn radioItem(name: Str, value: Str, caption: Str, checked: Bool) -> H.Node
export fn subTrigger(id: Str, caption: Str) -> H.Node
export fn subMenu(id: Str) -> H.Node menu(id).anchoredTo(id).css("position-area", "inline-end span-block-end") }
export fn style() -> Css.Block
```
