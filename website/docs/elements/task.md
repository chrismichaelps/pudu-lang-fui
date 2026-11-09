---
title: Task
description: Steps as they happen.
---

# Task

Steps as they happen.

<div class="fui-preview"><a href="../previews/task.html">Open the Task preview</a></div>

## Installation

```bash
fui add task
```

## Usage

```pudu
column("22rem", [Task.steps("Searching", [line(Trace.Running, "Looking through files")])])
```

## API

```pudu
export fn steps(heading: Str, lines: Array[H.Node]) -> H.Node
export fn style() -> Css.Block
```
