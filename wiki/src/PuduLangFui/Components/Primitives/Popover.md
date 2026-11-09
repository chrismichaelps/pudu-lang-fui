---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Popover.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.82
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Popover]
---

# PuduLangFui.Components.Primitives.Popover

## Purpose

Content floating beside its trigger.

## Interface

### Signatures

```pudu
export type Side = Above | Below | Start | End

export fn opens(control: H.Node, id: Str) -> H.Node

export fn content(id: Str, side: Side) -> H.Node

export fn header() -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. `popovertarget` on a button
2. the `popover` attribute handles light dismiss and the top layer
3. anchor positioning places it, flipping when out of room.

## Negative Logic (Prohibited Paths)

- ❌ Do not position with a script.

## Edge Cases

- Without anchor positioning the popover centers.

## Depth

DEPTH 0.82 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** How does the content find its trigger?
  **A:** Both take the same id. _Rationale:_ an id is what the platform needs. _Rejected:_ wrapper-based positioning that overflow clips.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
