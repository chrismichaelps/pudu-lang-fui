---
type: architecture
tags: [architecture]
aliases: [Language, Vocabulary]
---

# Language

The canonical architecture vocabulary. Product terms live under [[domain/_MOC]].

| Term | Definition | Not |
| --- | --- | --- |
| Module | A unit with an interface and an implementation; here, one `.pudu` file. | A folder. |
| Interface | Everything a caller must know: types, invariants, failure modes, effects. | Only a signature. |
| Implementation | The body that keeps the interface's promises. | Part of the contract. |
| Depth | Behaviour a caller can use relative to what the caller must learn. | Size. |
| Seam | A boundary where behaviour can vary without changing callers. | Any function call. |
| Locality | How much of a change stays in one place. | Proximity on disk. |
| Deepening | Hiding more behaviour behind the same or a smaller interface. | Adding layers. |

## Layers

Folders are layers; dependencies point down. [[tools/Layers/Catalog]] is the normative list and
[[decisions/ADR-0008-folders-are-layers]] the reason.

| Rank | Folders | Owned by |
| --- | --- | --- |
| 0 to 2 | `Constants`, `Utils`, `Domain` | the package |
| 3 | `Core`, `Cli/Model`, `Theme/Base` | the package |
| 4 to 6 | `Theme/Aspects`, `Theme/Audit`, `Theme/Build`, `Theme/Presets` | the package, tuned by the project |
| 7 | `PuduLangFui`, `Components/Primitives`, `Cli/Workspace` | the project, for components once added |
| 8 to 11 | `Components/Composites`, `Components/Patterns`, `Elements`, `Blocks` | the project, once added |
| 12 to 14 | `Catalog`, `Cli/Commands`, `Cli/Dispatch` | the package |

## Referenced by

[[architecture/SPECIFICATION]] · [[architecture/_MOC]] · [[grammar/pudu]]
