---
title: Queue
description: A todo list, left and done.
---

# Queue

A todo list, left and done.

<div class="fui-preview"><a href="../previews/queue.html">Open the Queue preview</a></div>

## Installation

```bash
fui add queue
```

## Usage

```pudu
Turn.turn("Add dark mode to the settings page.", [Queue.queue([Queue.entry("Add a dark variant to the theme tokens", true), Queue.entry("Read the theme from a cookie", true), Queue.entry("Add a toggle to the settings page"), Queue.entry("Check contrast on the charts")]), H.p().css("margin", "0").says("Dark mode is in. The toggle is under Settings, Appearance.")]).css("inline-size", "30rem")
```

## API

```pudu
export type Entry = { title: Str, done: Bool }
export fn entry(title: Str, done: Bool = false) -> Entry
export fn queue(entries: Array[Entry]) -> H.Node
export fn style() -> Css.Block
```
