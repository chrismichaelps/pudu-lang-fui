---
title: Dropdown Menu
description: A menu opened from a button.
---

# Dropdown Menu

A menu opened from a button.

<div class="fui-preview"><a href="../previews/dropdown-menu.html">Open the Dropdown Menu preview</a></div>

## Installation

```bash
fui add dropdown-menu
```

## Usage

```pudu
H.div().holding([
    DropdownMenu.trigger("account", Button.props().variant(Button.Outline)).says("Open"),
    DropdownMenu.menu("account").holding([DropdownMenu.label().says("My account"), DropdownMenu.item(false).holding([H.words("Profile"), DropdownMenu.shortcut().says("⇧⌘P")]), DropdownMenu.item(false).says("Billing"), DropdownMenu.separator(), DropdownMenu.item(true).says("Log out")])
  ])
```

## API

```pudu
export fn trigger(id: Str, given: Button.Props) -> H.Node
export fn menu(id: Str) -> H.Node
export fn item(destructive: Bool = false) -> H.Node
export fn link(target: Str) -> H.Node
export fn checkboxItem(name: Str, value: Str, caption: Str, checked: Bool = false) -> H.Node
export fn radioItem(name: Str, value: Str, caption: Str, checked: Bool = false) -> H.Node
export fn label() -> H.Node
export fn separator() -> H.Node
export fn shortcut() -> H.Node
export fn subTrigger(id: Str, caption: Str) -> H.Node
export fn subMenu(id: Str) -> H.Node menu(id).data("side", "end") }
export fn group() -> H.Node
export fn style() -> Css.Block
```
