---
title: Chart
description: Charts drawn on the server.
---

# Chart

Charts drawn on the server.

<div class="fui-preview"><a href="../previews/chart.html">Open the Chart preview</a></div>

## Installation

```bash
fui add chart
```

## Usage

```pudu
column("28rem", [Chart.labelled(Chart.Bars, "Monthly visits", ["Jan", "Feb", "Mar", "Apr"], [Chart.series("Visits", [3.0, 7.0, 4.0, 8.0])])])
```

## API

```pudu
export type Kind = Bars | Lines | Areas | Donut | Pie
export type Series = name: Str, values: Array[Float64] }
export fn series(name: Str, values: Array[Float64]) -> Series Series{name: name, values: values} }
export fn labelled(kind: Kind, caption: Str, labels: Array[Str], all: Array[Series]) -> H.Node
export fn chart(kind: Kind, caption: Str, all: Array[Series]) -> H.Node labelled(kind, caption, [], all) }
export fn style() -> Css.Block
```
