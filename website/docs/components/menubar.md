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
Menubar.menubar().holding([Menubar.menu("file", "File", [DropdownMenu.item(false).says("New tab"), DropdownMenu.item(false).says("Open")]), Menubar.menu("view", "View", [DropdownMenu.item(false).says("Reload")])])
```

## API

```pudu
export fn menubar() -> H.Node
export fn menu(id: Str, caption: Str, entries: Array[H.Node]) -> H.Node
export fn style() -> Css.Block
```
