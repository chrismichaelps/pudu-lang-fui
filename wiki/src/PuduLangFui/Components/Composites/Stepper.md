---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Stepper.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Stepper]
---

# PuduLangFui.Components.Composites.Stepper

## Purpose

A number moved by a step.

## Interface

### Signatures

```pudu
export fn stepper(name: Str, value: Int, minimum: Int = 0, maximum: Int = 100, step: Int = 1) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Constants/WidgetScripts]]

## Algorithm

1. A native number field between a decrement and an increment button; a small script steps the field and disables a button at its bound.

## Negative Logic (Prohibited Paths)

- ❌ Do not keep the value outside the field.

## Edge Cases

- A value at a bound renders its button disabled before any script runs.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Draw the value as text?
  **A:** No, a number field. _Rationale:_ the form submits it and the keyboard edits it. _Rejected:_ a hidden input beside a label.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
