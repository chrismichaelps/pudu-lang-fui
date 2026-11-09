---
type: module
path: "@root/src/PuduLangFui/Elements/Tool.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Tool]
---

# PuduLangFui.Elements.Tool

## Purpose

A tool call from input to output.

## Interface

### Signatures

```pudu
export fn tool(name: Str, status: Trace.Status, input: Str, output: Str, open: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A trace line with a disclosure showing input and output as code
2. a table maps the state to its status word.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the state.

## Edge Cases

- Output absent while running.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Show input by default?
  **A:** Closed. _Rationale:_ the outcome reads first. _Rejected:_ always open.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
