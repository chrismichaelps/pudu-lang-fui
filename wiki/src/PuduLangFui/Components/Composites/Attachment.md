---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Attachment.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.6
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Attachment]
---

# PuduLangFui.Components.Composites.Attachment

## Purpose

A file or image with metadata and upload state.

## Interface

### Signatures

```pudu
export type Kind = Document | Picture | Code

export type Orientation = Horizontal | Vertical

export type State = Ready | Uploading | Failed

export fn attachment(kind: Kind, name: Str, size: Str, state: State) -> H.Node

export fn group() -> H.Node

export fn title() -> H.Node

export fn description() -> H.Node

export fn actions() -> H.Node

export fn frame(kind: Kind, state: State, orientation: Orientation) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A factory table maps the kind to its icon
2. state is a data attribute.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the kind.

## Edge Cases

- A failed upload shows the destructive tone.

## Depth

DEPTH 0.6 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Preview images here?
  **A:** Only `Image` kinds with a source. _Rationale:_ others have no preview. _Rejected:_ always thumbnail.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
