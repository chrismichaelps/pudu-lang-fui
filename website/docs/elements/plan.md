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
Turn.turn("Migrate the dialog components.", [Plan.plan("Plan: migrate the dialogs", [Plan.step("Install the new package", Trace.Done), Plan.step("Replace the imports", Trace.Done), Plan.step("Rename the render props", Trace.Running), Plan.step("Run the type checker", Trace.Pending)]), H.p().css("margin", "0").says("Migrated Dialog and AlertDialog. The type checker passes.")]).css("inline-size", "30rem")
```

## API

```pudu
export type Step = { title: Str, status: Trace.Status }
export fn step(title: Str, status: Trace.Status) -> Step
export fn plan(title: Str, steps: Array[Step]) -> H.Node
export fn style() -> Css.Block
```
