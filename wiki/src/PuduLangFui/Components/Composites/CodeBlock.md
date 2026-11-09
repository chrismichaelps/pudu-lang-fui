---
type: module
path: "@root/src/PuduLangFui/Components/Composites/CodeBlock.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.CodeBlock]
---

# PuduLangFui.Components.Composites.CodeBlock

## Purpose

Code, terminal output, or a diff, with a header and copy button.

## Interface

### Signatures

```pudu
export type LineKind = Context | Added | Removed

export type Props = { numbered: Bool, start: Int, wrapped: Bool, maximumHeight: Str, highlighted: Array[Int] }

export type Line = { text: Str, kind: LineKind }

export fn props() -> Props

export trait Configuring {
  fn unnumbered(self: &Self) -> Self

  fn start(self: &Self, value: Int) -> Self

  fn wrapped(self: &Self) -> Self

  fn maximumHeight(self: &Self, value: Str) -> Self

  fn highlighted(self: &Self, value: Array[Int]) -> Self
}

impl Configuring for Props

export fn line(text: Str) -> Line

export fn added(text: Str) -> Line

export fn removed(text: Str) -> Line

export fn linesOf(text: Str) -> Array[Line]

export fn codeBlock(title: Str, lines: &Array[Line], given: Props) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. One numbered element per line
2. a line's kind marks additions and removals. The copy button is a behavior.

## Negative Logic (Prohibited Paths)

- ❌ Do not trust the code as markup.

## Edge Cases

- Without a script the text can still be selected.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Highlight syntax?
  **A:** No, it accepts lines as given. _Rationale:_ a highlighter is a separate concern. _Rejected:_ embedding a grammar set.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
