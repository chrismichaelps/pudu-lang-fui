---
type: module
path: "@root/src/PuduLangFui/Components/Composites/AlertDialog.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.59
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.AlertDialog]
---

# PuduLangFui.Components.Composites.AlertDialog

## Purpose

A modal asking for a decision.

## Interface

### Signatures

```pudu
export fn trigger(id: Str, given: Button.Props) -> H.Node

export fn cancel(id: Str, given: Button.Props) -> H.Node

export fn alertDialog(id: Str, name: Str) -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn footer() -> H.Node

export fn action(id: Str, given: Button.Props) -> H.Node

export fn header() -> H.Node

export fn media() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A dialog with `role=alertdialog` and `closedby=none`, so it closes only through its buttons.

## Negative Logic (Prohibited Paths)

- ❌ Do not allow light dismiss.

## Edge Cases

- Escape does not close it.

## Depth

DEPTH 0.59 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Separate from Dialog?
  **A:** Yes. _Rationale:_ the guarantee is different. _Rejected:_ a `blocking` prop.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
