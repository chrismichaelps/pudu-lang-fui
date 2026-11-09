---
title: Confirmation
description: Approval before a tool runs.
---

# Confirmation

Approval before a tool runs.

<div class="fui-preview"><a href="../previews/confirmation.html">Open the Confirmation preview</a></div>

## Installation

```bash
fui add confirmation
```

## Usage

```pudu
Turn.turn("Clean the build folder.", [Confirmation.confirmation("Run this command?", "rm -rf build", "#")]).css("inline-size", "30rem")
```

## API

```pudu
export fn confirmation(title: Str, detail: Str, action: Str) -> H.Node
export fn style() -> Css.Block
```
