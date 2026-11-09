---
type: module
path: "@root/src/PuduLangFui/Elements/Terminal.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Terminal]
---

# PuduLangFui.Elements.Terminal

## Purpose

A command and its output.

## Interface

### Signatures

```pudu
export fn terminal(command: Str, output: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A command over what it printed, on a quiet surface.

## Negative Logic (Prohibited Paths)

- ❌ Do not treat output as markup.

## Edge Cases

- Long lines scroll.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Reuse CodeBlock?
  **A:** No line numbers here, so a small block of its own. _Rationale:_ different reading. _Rejected:_ a flag on CodeBlock.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
