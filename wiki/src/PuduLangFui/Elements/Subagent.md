---
type: module
path: "@root/src/PuduLangFui/Elements/Subagent.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Subagent]
---

# PuduLangFui.Elements.Subagent

## Purpose

A subagent run, with its tool calls and result.

## Interface

### Signatures

```pudu
export fn subagent(title: Str, status: Trace.Status, steps: Array[H.Node], result: H.Node, open: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A step whose heading opens to its own steps and its result.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Nesting works to any depth.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Separate from Tool?
  **A:** Yes. _Rationale:_ it holds steps, a tool holds input and output. _Rejected:_ one element.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
