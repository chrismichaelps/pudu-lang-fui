---
type: module
path: "@root/src/PuduLangFui/Elements/StackTrace.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.StackTrace]
---

# PuduLangFui.Elements.StackTrace

## Purpose

A failed tool call and its frames.

## Interface

### Signatures

```pudu
export fn stackTrace(message: Str, frames: &Array[Str]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. The message in the destructive tone over a list of frames.

## Negative Logic (Prohibited Paths)

- ❌ Do not interpret frame text as markup.

## Edge Cases

- No frames shows the message alone.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Collapse frames?
  **A:** Open under a disclosure. _Rationale:_ the first line matters most. _Rejected:_ long unbroken text.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
