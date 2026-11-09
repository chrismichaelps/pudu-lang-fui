---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Input.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.74
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Input]
---

# PuduLangFui.Components.Primitives.Input

## Purpose

A single-line text field of any input type.

## Interface

### Signatures

```pudu
export type Props = { kind: Str, invalid: Bool, disabled: Bool, required: Bool }

export fn props() -> Props

export trait Configuring {
  fn kind(self: &Self, value: Str) -> Self

  fn invalid(self: &Self) -> Self

  fn disabled(self: &Self) -> Self

  fn required(self: &Self) -> Self
}

impl Configuring for Props

export fn input(name: Str, given: Props) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. An `input` with the slot, type, and name
2. invalid state comes from `aria-invalid` and `:user-invalid`.

## Negative Logic (Prohibited Paths)

- ❌ Do not show invalid styling before the user has interacted.

## Edge Cases

- `file` inputs get a styled selector button.

## Depth

DEPTH 0.74 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How is invalid expressed?
  **A:** `aria-invalid` from the server plus `:user-invalid` natively. _Rationale:_ both sources display identically. _Rejected:_ an invalid class.

## Referenced by

[[src/PuduLangFui/Blocks/Login]] · [[src/PuduLangFui/Blocks/Settings]] · [[src/PuduLangFui/Blocks/Signup]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/Combobox]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
