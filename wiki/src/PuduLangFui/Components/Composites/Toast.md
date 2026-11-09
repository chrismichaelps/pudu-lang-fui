---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Toast.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Toast]
---

# PuduLangFui.Components.Composites.Toast

## Purpose

Stacked messages outside the flow, in six kinds and six positions.

## Interface

### Signatures

```pudu
export type Kind = Neutral | Success | Info | Warning | Failure | Loading

export type Position = TopStart | TopCenter | TopEnd | BottomStart | BottomCenter | BottomEnd

export type Props = { position: Position, expanded: Bool, rich: Bool, closable: Bool, visible: Int }

export type Notice = { kind: Kind, duration: Int, dismissible: Bool, inverted: Bool }

export fn props() -> Props

export fn notice() -> Notice

export trait Configuring {
  fn position(self: &Self, value: Position) -> Self

  fn expanded(self: &Self) -> Self

  fn rich(self: &Self) -> Self

  fn closable(self: &Self) -> Self

  fn visible(self: &Self, count: Int) -> Self
}

impl Configuring for Props

export trait Noticing {
  fn kind(self: &Self, value: Kind) -> Self

  fn duration(self: &Self, value: Int) -> Self

  fn persistent(self: &Self) -> Self

  fn inverted(self: &Self) -> Self
}

impl Noticing for Notice

export fn toaster(given: Props) -> H.Node

export fn toast(id: Str, given: Notice) -> H.Node

export fn message() -> H.Node

export fn description() -> H.Node

export fn action(given: Button.Props) -> H.Node

export fn cancel(id: Str) -> H.Node

export fn close(id: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A region of open non-modal dialogs, stacked by position in the region and fanned out on hover or focus
2. a table maps each kind to its icon
3. a behavior closes on a timer that pauses under the pointer, dismisses on swipe, focuses on a hotkey, and clones a template for `fuiToast`.

## Negative Logic (Prohibited Paths)

- ❌ Do not require a script to read or dismiss a rendered toast.
- ❌ Do not branch on the kind.

## Edge Cases

- A duration of zero stays until closed; without the behavior every toast stays until closed.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Who shows a toast?
  **A:** The server renders it; `fuiToast` adds more from the page. _Rationale:_ most messages follow a request, and client code needs a way in. _Rejected:_ a client-only queue.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
