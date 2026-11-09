---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Checkbox.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.8
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Checkbox]
---

# PuduLangFui.Components.Primitives.Checkbox

## Purpose

A native checkbox, drawn with the theme.

## Interface

### Signatures

```pudu
export type Props = { checked: Bool, mixed: Bool, disabled: Bool, invalid: Bool }

export fn props() -> Props

export trait Configuring {
  fn checked(self: &Self) -> Self

  fn mixed(self: &Self) -> Self

  fn disabled(self: &Self) -> Self

  fn invalid(self: &Self) -> Self
}

impl Configuring for Props

export fn checkbox(name: Str, given: Props) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. An `input` with `appearance: none`
2. a masked pseudo-element draws the check and the dash for indeterminate.

## Negative Logic (Prohibited Paths)

- ❌ Do not replace the input with a `div`.

## Edge Cases

- Indeterminate is set through `aria-checked=mixed` since the native property has no attribute.

## Depth

DEPTH 0.8 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Native or role-based?
  **A:** Native. _Rationale:_ forms and keyboard work for free. _Rejected:_ a `role=checkbox` span.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
