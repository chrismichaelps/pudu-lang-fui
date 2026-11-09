---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Label.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.84
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Label]
---

# PuduLangFui.Components.Primitives.Label

## Purpose

Names a form control.

## Interface

### Signatures

```pudu
export fn label(control: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `label` with `for`
2. dims when its peer is disabled through `:has`.

## Negative Logic (Prohibited Paths)

- ❌ Do not render a label without a target.

## Edge Cases

- Target is required by the signature.

## Depth

DEPTH 0.84 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Require the control's id?
  **A:** Yes. _Rationale:_ an unassociated label is a bug. _Rejected:_ optional `for`.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
