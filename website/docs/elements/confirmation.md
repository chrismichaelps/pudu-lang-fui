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
column("24rem", [Confirmation.confirmation("Run this command?", "rm -rf build", "#")])
```

## API

```pudu
export fn confirmation(title: Str, detail: Str, action: Str) -> H.Node
export fn style() -> Css.Block Css.block("confirmation", [Css.base("display: block; margin: 0")]) }
```
