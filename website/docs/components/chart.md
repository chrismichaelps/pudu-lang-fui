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
Card.card().css("inline-size", "36rem").css("--fui-chart-2", "oklch(0.623 0.214 259.815)").holding([
    Card.header().holding([Card.title().says("Bar Chart - Interactive"), Card.description().says("Showing total visitors for the last 3 months")]),
    Card.content().holding([Chart.labelled(Chart.Bars, "Daily visitors", ["Apr 1", "", "", "", "Apr 5", "", "", "", "Apr 9", "", "", "", "Apr 13", "", "", "", "Apr 17", "", "", "", "Apr 21", "", "", "", "Apr 25", "", "", "", "Apr 29", ""], [Chart.series("Desktop", [222.0, 97.0, 167.0, 242.0, 373.0, 301.0, 245.0, 409.0, 59.0, 261.0, 327.0, 292.0, 342.0, 137.0, 120.0, 138.0, 446.0, 364.0, 243.0, 89.0, 137.0, 224.0, 138.0, 387.0, 215.0, 75.0, 383.0, 122.0, 315.0, 454.0])])])
  ])
```

## API

```pudu
export type Kind = Bars | Lines | Areas | Donut | Pie
export type Series = { name: Str, values: Array[Float64] }
export fn series(name: Str, values: Array[Float64]) -> Series
export fn labelled(kind: Kind, caption: Str, labels: Array[Str], all: Array[Series]) -> H.Node
export fn chart(kind: Kind, caption: Str, all: Array[Series]) -> H.Node
export fn style() -> Css.Block
```
