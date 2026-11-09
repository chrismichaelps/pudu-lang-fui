---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Icons.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.98
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Icons]
---

# PuduLangFui.Cli.Model.Icons

## Purpose

Turns fetched icons into a project's owned icon module, and reads them back.

## Interface

### Signatures

```pudu
export type Glyph = { name: Str, body: Str, width: Int, height: Int }

export fn split(name: Str) -> Option[(Str, Str)]

export fn glyphsOf(library: Str, answer: &Json.Json) -> Array[Glyph]

export fn escaped(body: Str) -> Str

export fn merged(existing: &Array[Glyph], added: &Array[Glyph]) -> Array[Glyph]

export fn moduleText(root: Str, glyphs: &Array[Glyph]) -> Str

export fn recorded(source: Str) -> Array[Glyph]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Cli]] · [[src/PuduLangFui/Utils/Numbers]]

## Algorithm

1. Split `library:name`
2. read bodies and sizes from the answer
3. write one table entry per glyph with its view box, escaping quotes and braces
4. recover existing entries from the module's own lines.

## Negative Logic (Prohibited Paths)

- ❌ Do not read files or reach the network.

## Edge Cases

- A glyph without a body is skipped, and the command reports the shortfall.

## Depth

DEPTH 0.98 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Bundle the icon libraries?
  **A:** No, fetch on demand into the project. _Rationale:_ hundreds of thousands of icons cannot ship in a package, and each project takes only what it uses, with its license terms. _Rejected:_ a subset that claims to be complete.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Model/IconLibrary]] · [[src/PuduLangFui/Cli/Model/_MOC]]
