---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Toast.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
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

export type Mode = Light | Dark | System

export type Props = {
  position: Position,
  expanded: Bool,
  rich: Bool,
  closable: Bool,
  inverted: Bool,
  mode: Mode,
  visible: Int,
  duration: Int,
  gap: Int,
  offset: Str,
  mobileOffset: Str,
  hotkey: Array[Str],
  swipes: Array[Str],
  caption: Str,
  toaster: Str
}

export type Notice = { kind: Kind, duration: Int, dismissible: Bool, inverted: Bool, rich: Option[Bool] }

export fn props() -> Props

export fn notice() -> Notice

export trait Configuring {
  fn position(self: &Self, value: Position) -> Self

  fn expanded(self: &Self) -> Self

  fn rich(self: &Self) -> Self

  fn closable(self: &Self) -> Self

  fn inverted(self: &Self) -> Self

  fn mode(self: &Self, value: Mode) -> Self

  fn visible(self: &Self, count: Int) -> Self

  fn duration(self: &Self, value: Int) -> Self

  fn gap(self: &Self, value: Int) -> Self

  fn offset(self: &Self, value: Str) -> Self

  fn mobileOffset(self: &Self, value: Str) -> Self

  fn hotkey(self: &Self, value: Array[Str]) -> Self

  fn swipes(self: &Self, value: Array[Str]) -> Self

  fn caption(self: &Self, value: Str) -> Self

  fn toaster(self: &Self, value: Str) -> Self
}

impl Configuring for Props

export trait Noticing {
  fn kind(self: &Self, value: Kind) -> Self

  fn duration(self: &Self, value: Int) -> Self

  fn persistent(self: &Self) -> Self

  fn inverted(self: &Self) -> Self

  fn rich(self: &Self, value: Bool) -> Self
}

impl Noticing for Notice

export fn toaster(given: Props) -> H.Node

export fn toast(id: Str, given: Notice) -> H.Node

export fn content() -> H.Node

export fn message() -> H.Node

export fn description() -> H.Node

export fn action() -> H.Node

export fn cancel(id: Str) -> H.Node

export fn close(id: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Constants/ToastScript]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

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

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Who shows a toast?
  **A:** The server renders it; `fuiToast` adds more from the page. _Rationale:_ most messages follow a request, and client code needs a way in. _Rejected:_ a client-only queue.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
