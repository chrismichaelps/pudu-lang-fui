---
title: Terminal
description: A command and its output.
---

# Terminal

A command and its output.

<div class="fui-preview"><a href="../previews/terminal.html">Open the Terminal preview</a></div>

## Installation

```bash
fui add terminal
```

## Usage

```pudu
column("26rem", [Terminal.terminal("pudu test", "12 passed")])
```

## API

```pudu
export fn terminal(command: Str, output: Str) -> H.Node
export fn style() -> Css.Block
```
