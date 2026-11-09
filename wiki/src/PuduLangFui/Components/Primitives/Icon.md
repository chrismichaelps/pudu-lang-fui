---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Icon.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.88
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Icon]
---

# PuduLangFui.Components.Primitives.Icon

## Purpose

A built-in icon set drawn in `currentColor` with the theme's stroke.

## Interface

### Signatures

```pudu
export type Glyph
  = Alert | ArrowDown | ArrowLeft | ArrowRight | ArrowUp | Book | Bot | Calendar | Check | ChevronDown
  | ChevronLeft | ChevronRight | ChevronUp | Circle | Clock | CodeBrackets | Copy | Edit | ErrorCircle
  | External | File | Flag | Folder | Globe | Grip | Image | Info | Link | List | Menu | Minus | Moon
  | More | Paperclip | Plus | Search | Send | Settings | Spark | SpinnerArc | Star | Stop | Success | Sun
  | Terminal | Trash | User | Wrench | X

export type Size = Small | Medium | Large

export const GLYPHS: Map[Str, Str]

export fn icon(glyph: Glyph) -> H.Node

export fn sized(glyph: Glyph, size: Size) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Look up the glyph's markup by its kebab name and write it inside one `svg` sized by the iconography tokens
2. the icon is hidden from assistive software unless given a label.

## Negative Logic (Prohibited Paths)

- ❌ Do not accept markup from a caller.

## Edge Cases

- A glyph with no table entry cannot be written, because the sum type and the table are checked by the suite.

## Depth

DEPTH 0.88 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should an icon be visible to screen readers?
  **A:** Hidden by default. _Rationale:_ icons sit beside text. _Rejected:_ a mandatory label.

## Referenced by

[[src/PuduLangFui/Blocks/Pricing]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/Attachment]] · [[src/PuduLangFui/Components/Composites/Breadcrumb]] · [[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Components/Composites/CodeBlock]] · [[src/PuduLangFui/Components/Composites/DropdownMenu]] · [[src/PuduLangFui/Components/Composites/MessageScroller]] · [[src/PuduLangFui/Components/Composites/NavigationMenu]] · [[src/PuduLangFui/Components/Composites/Pagination]] · [[src/PuduLangFui/Components/Composites/Select]] · [[src/PuduLangFui/Components/Composites/Spinner]] · [[src/PuduLangFui/Components/Composites/Toast]] · [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Components/Patterns/Command]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Patterns/Sidebar]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/Checkpoint]] · [[src/PuduLangFui/Elements/FileTree]] · [[src/PuduLangFui/Elements/PromptInput]] · [[src/PuduLangFui/Elements/Sources]]
