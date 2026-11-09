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
Turn.turn("Add metadata to the home page.", [Task.steps("Updated the page metadata", [Trace.step(Trace.Done, "Found the project files"), Trace.step(Trace.Done, "Updated the page metadata")]), H.p().css("margin", "0").says("Added the metadata to the layout, with a title and description.")]).css("inline-size", "30rem")
```

## API

```pudu
export fn steps(heading: Str, lines: Array[H.Node]) -> H.Node
export fn style() -> Css.Block Css.block("task", [Css.base("display: block")]) }
```
