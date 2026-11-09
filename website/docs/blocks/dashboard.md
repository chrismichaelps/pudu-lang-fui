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
H.div().css("inline-size", "100%").css("block-size", "36rem").css("overflow", "hidden").holding([Dashboard.dashboard("Acme", [Dashboard.link("Overview", "#", true), Dashboard.link("Reports", "#")], [Dashboard.stat("Revenue", "$4,200"), Dashboard.stat("Users", "312")], [Chart.series("Visits", [1.0, 3.0, 2.0, 6.0])], H.p().says("Recent activity."))])
```

## API

```pudu
export type Stat = { caption: Str, figure: Str }
export type Link = { caption: Str, target: Str, active: Bool }
export fn stat(caption: Str, figure: Str) -> Stat
export fn link(caption: Str, target: Str, active: Bool = false) -> Link
export fn dashboard(title: Str, links: Array[Link], stats: Array[Stat], trend: Array[Chart.Series], content: H.Node) -> H.Node
export fn style() -> Css.Block
```
