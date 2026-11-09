---
type: module
path: "@root/src/PuduLangFui/Elements/Plan.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Plan]
---

# PuduLangFui.Elements.Plan

## Purpose

The steps an agent plans and how far it has got.

## Interface

### Signatures

```pudu
export type Step = { title: Str, status: Trace.Status }

export fn step(title: Str, status: Trace.Status) -> Step

export fn plan(title: Str, steps: Array[Step]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A count of done steps over a trace.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- No steps shows zero of zero.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Editable?
  **A:** No. _Rationale:_ this shows; changing a plan is a separate form. _Rejected:_ inline editing.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
