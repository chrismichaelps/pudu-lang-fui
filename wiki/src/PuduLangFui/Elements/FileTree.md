---
type: module
path: "@root/src/PuduLangFui/Elements/FileTree.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.FileTree]
---

# PuduLangFui.Elements.FileTree

## Purpose

The files an agent changed, as a folder tree.

## Interface

### Signatures

```pudu
export type Change = Unchanged | Added | Modified | Deleted

export type Entry = FileEntry(Str, Change) | FolderEntry(Str, Array[Entry])

export fn file(name: Str, change: Change) -> Entry

export fn folder(name: Str, entries: Array[Entry]) -> Entry

export fn fileTree(entries: Array[Entry]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Folders open to their entries, and files carry a mark for what changed.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the change kind.

## Edge Cases

- Empty folders render closed with no children.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Open by default?
  **A:** Yes. _Rationale:_ the changes are the point. _Rejected:_ collapsed.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
