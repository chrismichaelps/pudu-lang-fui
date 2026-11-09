---
type: module
path: "@root/src/PuduLangFui.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui]
---

# PuduLangFui

## Purpose

The front door a program renders through: a page record and the whole document or stylesheet it produces.

## Interface

### Signatures

```pudu
export type Page = {
  title: Str,
  language: Str,
  direction: Str,
  mode: Option[Str],
  theme: Theme.Theme,
  blocks: Array[Css.Block],
  head: Array[H.Node]
}

export fn page(title: Str, theme: Theme.Theme, blocks: Array[Css.Block]) -> Page

export trait Paging {
  fn language(self: &Self, value: Str) -> Self

  fn rightToLeft(self: &Self) -> Self

  fn mode(self: &Self, value: Str) -> Self

  fn inHead(self: &Self, nodes: Array[H.Node]) -> Self
}

impl Paging for Page

export fn neededBy(view: &Html.Html, blocks: &Array[Css.Block]) -> Array[Css.Block]

export fn stylesheet(theme: &Theme.Theme, blocks: &Array[Css.Block]) -> Str

export fn document(given: &Page, body: H.Node) -> Str
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Css]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Domain/Slots]] · [[src/PuduLangFui/Theme/Build/Theme]]

## Algorithm

1. Render the body
2. find the slots it holds with the slot walk
3. keep the blocks owning those slots
4. write the theme's tokens, the base layer, and those blocks into one style element
5. add any behaviors the kept blocks carry at the end of the body.

## Negative Logic (Prohibited Paths)

- ❌ Do not inline a block no rendered slot belongs to.
- ❌ Do not emit a script element when no kept block carries a behavior.

## Edge Cases

- A body with no slots gets the tokens and the base layer and no component rules.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should the library hold a registry of used components at run time?
  **A:** No. The slots in the rendered tree already say which blocks are used. _Rationale:_ a page is a value, so the answer is computable from it with no global state. _Rejected:_ a mutable collector; asking the caller to list blocks per page.

## Referenced by

[[src/_MOC]]
