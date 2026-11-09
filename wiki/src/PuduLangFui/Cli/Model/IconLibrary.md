---
type: module
path: "@root/src/PuduLangFui/Cli/Model/IconLibrary.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.98
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.IconLibrary]
---

# PuduLangFui.Cli.Model.IconLibrary

## Purpose

A whole icon library as owned source, aliases included.

## Interface

### Signatures

```pudu
export type Library = { name: Str, title: Str, license: Str, glyphs: Array[Icons.Glyph], orphans: Int }

export fn transformed(body: Str, width: Int, height: Int, turns: Int, flipsAcross: Bool, flipsDown: Bool) -> Str

export fn read(library: Str, document: &Json.Json) -> Library

export fn moduleName(root: Str, library: Str) -> Str

export fn moduleText(root: Str, held: &Library) -> Str
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Model/Icons]] · [[src/PuduLangFui/Constants/Cli]] · [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. Read the library's icons with their sizes, expand each alias through its parent with its rotation and flips, and write one table entry per name with the library's license in the header.

## Negative Logic (Prohibited Paths)

- ❌ Do not drop an alias whose parent is missing silently
- ❌ it is counted.

## Edge Cases

- A library with no license information records that it has none.

## Depth

DEPTH 0.98 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** One file per library?
  **A:** Yes. _Rationale:_ a program imports only the libraries it uses. _Rejected:_ one module with every library.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Model/_MOC]]
