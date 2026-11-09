---
title: Dashboard
description: An application home.
---

# Dashboard

An application home.

<div class="fui-preview"><a href="../previews/dashboard.html">Open the Dashboard preview</a></div>

## Installation

```bash
fui add dashboard
```

## Usage

```pudu
H.div().css("margin", "calc(var(--fui-space-6) * -1)").css("inline-size", "calc(100% + var(--fui-space-12))").css("block-size", "100dvh").css("overflow", "hidden").holding([Dashboard.dashboard("Acme", [Dashboard.linked(Icon.Globe, "Overview", "#", true), Dashboard.linked(Icon.List, "Reports", "#"), Dashboard.linked(Icon.User, "Customers", "#"), Dashboard.linked(Icon.Folder, "Projects", "#"), Dashboard.linked(Icon.Settings, "Settings", "#")], [Dashboard.stat("Revenue", "$4,200"), Dashboard.stat("Users", "312")], [Chart.series("Visits", [1.0, 3.0, 2.0, 6.0])], H.p().says("Recent activity."))])
```

## API

```pudu
export type Stat = { caption: Str, figure: Str }
export type Link = { caption: Str, target: Str, active: Bool, icon: Option[Icon.Glyph] }
export fn stat(caption: Str, figure: Str) -> Stat
export fn link(caption: Str, target: Str, active: Bool = false) -> Link
export fn linked(glyph: Icon.Glyph, caption: Str, target: Str, active: Bool = false) -> Link
export fn dashboard(title: Str, links: Array[Link], stats: Array[Stat], trend: Array[Chart.Series], content: H.Node) -> H.Node
export fn style() -> Css.Block
```
