---
type: module
path: "@root/src/PuduLangFui/Components/Composites/ActionSheet.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.ActionSheet]
---

# PuduLangFui.Components.Composites.ActionSheet

## Purpose

Choices from the bottom edge.

## Interface

### Signatures

```pudu
export fn trigger(id: Str, given: Button.Props) -> H.Node

export fn sheet(id: Str, name: Str) -> H.Node

export fn group() -> H.Node

export fn heading() -> H.Node

export fn action(id: Str) -> H.Node

export fn destructive(id: Str) -> H.Node

export fn cancel(id: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Components/Primitives/Button]]

## Algorithm

1. A modal dialog anchored to the bottom whose groups are separate surfaces; every choice closes it by command.

## Negative Logic (Prohibited Paths)

- ❌ Do not put a form inside.

## Edge Cases

- The cancel choice is its own group, last.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Reuse the sheet?
  **A:** No. _Rationale:_ the surface is the groups, not the dialog, and each choice dismisses. _Rejected:_ a sheet side variant.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
