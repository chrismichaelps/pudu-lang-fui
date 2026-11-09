---
title: Menubar
description: A row of menus.
---

# Menubar

A row of menus.

<div class="fui-preview"><a href="../previews/menubar.html">Open the Menubar preview</a></div>

## Installation

```bash
fui add menubar
```

## Usage

```pudu
Menubar.menubar().css("inline-size", "18rem").holding([Menubar.menu("file", "File", [DropdownMenu.item(false).holding([H.words("New Tab"), DropdownMenu.shortcut().says("⌘T")]), DropdownMenu.item(false).says("New Window"), DropdownMenu.separator(), DropdownMenu.item(false).says("Print")]), Menubar.menu("edit", "Edit", [DropdownMenu.item(false).holding([H.words("Undo"), DropdownMenu.shortcut().says("⌘Z")]), DropdownMenu.item(false).says("Redo")]), Menubar.menu("view", "View", [DropdownMenu.item(false).says("Reload")]), Menubar.menu("profiles", "Profiles", [DropdownMenu.item(false).says("Switch Profile")])])
```

## API

```pudu
export fn menubar() -> H.Node
export fn menu(id: Str, caption: Str, entries: Array[H.Node]) -> H.Node
export fn style() -> Css.Block
```
