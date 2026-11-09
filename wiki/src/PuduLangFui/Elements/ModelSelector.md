---
type: module
path: "@root/src/PuduLangFui/Elements/ModelSelector.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.ModelSelector]
---

# PuduLangFui.Elements.ModelSelector

## Purpose

Picks the model an agent runs and how hard it thinks.

## Interface

### Signatures

```pudu
export fn modelSelector(models: &Array[Str], efforts: &Array[Str], model: Str, effort: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Select]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Two borderless menus sit beside the send button.

## Negative Logic (Prohibited Paths)

- ❌ Do not hard-code model names.

## Edge Cases

- The current values are preselected.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Which models?
  **A:** The caller's list. _Rationale:_ products change. _Rejected:_ a built-in list.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
