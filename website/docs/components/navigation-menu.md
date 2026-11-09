---
title: Navigation Menu
description: Site navigation with panels.
---

# Navigation Menu

Site navigation with panels.

<div class="fui-preview"><a href="../previews/navigation-menu.html">Open the Navigation Menu preview</a></div>

## Installation

```bash
fui add navigation-menu
```

## Usage

```pudu
NavigationMenu.navigationMenu("Site").holding([NavigationMenu.list().holding([NavigationMenu.item().holding([NavigationMenu.trigger("start", "Getting started"), NavigationMenu.panel("start").says("Install and add your first component.")]), NavigationMenu.item().holding([NavigationMenu.link("#", true).says("Docs")])])])
```

## API

```pudu
export fn navigationMenu(caption: Str) -> H.Node
export fn list() -> H.Node
export fn item() -> H.Node
export fn link(target: Str, current: Bool = false) -> H.Node
export fn trigger(id: Str, caption: Str) -> H.Node
export fn panel(id: Str) -> H.Node
export fn style() -> Css.Block
```
