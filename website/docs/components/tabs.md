---
title: Tabs
description: Panels switched by labelled choices.
---

# Tabs

Panels switched by labelled choices.

<div class="fui-preview"><a href="../previews/tabs.html">Open the Tabs preview</a></div>

## Installation

```bash
fui add tabs
```

## Usage

```pudu
Tabs.tabs("billing", "month", [Tabs.tab("month", "Monthly", H.p().says("Billed each month.")), Tabs.tab("year", "Yearly", H.p().says("Billed once a year."))], Tabs.Pill)
```

## API

```pudu
export type Variant = Pill | Line
export type Tab = value: Str, caption: Str, panel: H.Node }
export fn tab(value: Str, caption: Str, panel: H.Node) -> Tab Tab{value: value, caption: caption, panel: panel} }
export fn tabs(name: Str, selected: Str, items: Array[Tab], variant: Variant) -> H.Node
export fn style() -> Css.Block
```
