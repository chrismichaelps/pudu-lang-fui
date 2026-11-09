---
title: Plan
description: Planned steps and progress.
---

# Plan

Planned steps and progress.

<div class="fui-preview"><a href="../previews/plan.html">Open the Plan preview</a></div>

## Installation

```bash
fui add plan
```

## Usage

```pudu
column("22rem", [Plan.plan("Plan", [Plan.step("Read", Trace.Done), Plan.step("Change", Trace.Running), Plan.step("Test", Trace.Pending)])])
```

## API

```pudu
export type Step = title: Str, status: Trace.Status }
export fn step(title: Str, status: Trace.Status) -> Step Step{title: title, status: status} }
export fn plan(title: Str, steps: Array[Step]) -> H.Node
export fn style() -> Css.Block
```
