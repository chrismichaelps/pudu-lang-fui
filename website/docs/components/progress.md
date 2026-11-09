---
title: Progress
description: Completion of a task.
---

# Progress

Completion of a task.

<div class="fui-preview"><a href="../previews/progress.html">Open the Progress preview</a></div>

## Installation

```bash
fui add progress
```

## Usage

```pudu
column("20rem", [Progress.progress(60, 100, "Upload")])
```

## API

```pudu
export fn progress(value: Int, maximum: Int, caption: Str) -> H.Node
export fn style() -> Css.Block
```
