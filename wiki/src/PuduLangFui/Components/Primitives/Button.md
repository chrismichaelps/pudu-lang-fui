---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Button.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.81
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Button]
---

# PuduLangFui.Components.Primitives.Button

## Purpose

An action in six treatments and eight sizes, as a button, a submit, or a link.

## Interface

### Signatures

```pudu
export type Variant = Primary | Secondary | Outline | Ghost | Hover | Destructive | Plain

export type Size = Tiny | Small | Medium | Large | IconTiny | IconSmall | IconMedium | IconLarge

export type Props = { variant: Variant, size: Size, disabled: Bool }

export fn props() -> Props

export trait Configuring {
  fn variant(self: &Self, value: Variant) -> Self

  fn size(self: &Self, value: Size) -> Self

  fn disabled(self: &Self) -> Self
}

impl Configuring for Props

export fn button(given: Props) -> H.Node

export fn submit(given: Props) -> H.Node

export fn link(target: Str, given: Props) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Write the slot and both data attributes on the right element
2. the block styles each value.

## Negative Logic (Prohibited Paths)

- ❌ Do not render a link as a button.
- ❌ Do not default to submit inside a form.

## Edge Cases

- A disabled link carries `aria-disabled` and loses pointer events.

## Depth

DEPTH 0.81 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How does a button become a link?
  **A:** A separate `link` function sharing the props. _Rationale:_ the element is decided at the call. _Rejected:_ a polymorphic element prop.

## Referenced by

[[src/PuduLangFui/Blocks/Login]] · [[src/PuduLangFui/Blocks/Pricing]] · [[src/PuduLangFui/Blocks/Settings]] · [[src/PuduLangFui/Blocks/Signup]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/AlertDialog]] · [[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Components/Composites/Dialog]] · [[src/PuduLangFui/Components/Composites/Drawer]] · [[src/PuduLangFui/Components/Composites/DropdownMenu]] · [[src/PuduLangFui/Components/Composites/Pagination]] · [[src/PuduLangFui/Components/Composites/Sheet]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Patterns/Menubar]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/Checkpoint]] · [[src/PuduLangFui/Elements/Confirmation]] · [[src/PuduLangFui/Elements/PromptInput]] · [[src/PuduLangFui/Elements/Suggestion]]
