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
NavigationMenu.navigationMenu("Site").holding([NavigationMenu.list().holding([
  NavigationMenu.item().holding([NavigationMenu.trigger("start", "Getting started"), NavigationMenu.panel("start").holding([H.div().css("font-weight", "500").says("Introduction"), H.div().css("color", "var(--fui-muted-foreground)").says("Re-usable components built with typed props."), H.div().css("font-weight", "500").css("margin-block-start", "var(--fui-space-3)").says("Installation"), H.div().css("color", "var(--fui-muted-foreground)").says("How to install dependencies and structure your app.")])]),
  NavigationMenu.item().holding([NavigationMenu.trigger("parts", "Components"), NavigationMenu.panel("parts").says("Alert Dialog, Hover Card, Progress, and more.")]),
  NavigationMenu.item().holding([NavigationMenu.link("#").css("padding", "0.375rem 0.625rem").says("Docs")])
])])
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
