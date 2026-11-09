---
type: module
path: "@root/src/PuduLangFui/Elements/Suggestion.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Suggestion]
---

# PuduLangFui.Elements.Suggestion

## Purpose

A short prompt sent in one click.

## Interface

### Signatures

```pudu
export fn suggestions(action: Str, prompts: &Array[Str]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A submit button carrying its text as a value.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Wraps on small screens.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Button or link?
  **A:** Button. _Rationale:_ it sends. _Rejected:_ a link.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
