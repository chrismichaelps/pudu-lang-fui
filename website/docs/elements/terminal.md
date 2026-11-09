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
Turn.turn("Run the checks, then build the app.", [Trace.trace().holding([Trace.step(Trace.Done, "Ran pudu lint"), Trace.step(Trace.Done, "Ran pudu test")]), Terminal.terminal("pudu build", "Compiled 167 modules in 4.2s\nPages       241\nFirst load  18 kB"), H.p().css("margin", "0").says("Lint and tests pass, and the build compiled both routes.")]).css("inline-size", "30rem")
```

## API

```pudu
export fn terminal(command: Str, output: Str) -> H.Node
export fn style() -> Css.Block
```
