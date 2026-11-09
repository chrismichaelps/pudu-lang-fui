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
column("22rem", [Queue.queue([Queue.entry("Write docs"), Queue.entry("Ship", true)])])
```

## API

```pudu
export type Entry = title: Str, done: Bool }
export fn entry(title: Str, done: Bool = false) -> Entry Entry{title: title, done: done} }
export fn queue(entries: Array[Entry]) -> H.Node
export fn style() -> Css.Block
```
