---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Field.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.7
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Field]
---

# PuduLangFui.Components.Composites.Field

## Purpose

A control with its label, description, and errors.

## Interface

### Signatures

```pudu
export type Orientation = Vertical | Horizontal | Responsive

export fn field() -> H.Node

export fn oriented(orientation: Orientation, invalid: Bool) -> H.Node

export fn label(control: Str) -> H.Node

export fn content() -> H.Node

export fn description() -> H.Node

export fn error(messages: &Array[Str]) -> H.Node

export fn group() -> H.Node

export fn set() -> H.Node

export fn legend() -> H.Node

export fn title() -> H.Node

export fn separator(caption: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Label]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Named parts
2. `error` answers nothing for no messages, one line for one, and a list for several.

## Negative Logic (Prohibited Paths)

- ❌ Do not render an empty error region.

## Edge Cases

- A `Responsive` field switches axis through a container query.

## Depth

DEPTH 0.7 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Where do messages come from?
  **A:** Any array of text. _Rationale:_ the component does not bind to a validator. _Rejected:_ a built-in form runtime.

## Referenced by

[[src/PuduLangFui/Blocks/Login]] · [[src/PuduLangFui/Blocks/Settings]] · [[src/PuduLangFui/Blocks/Signup]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]] · [[src/PuduLangFui/Components/Patterns/Form]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]]
