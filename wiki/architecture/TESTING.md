---
type: architecture
tags: [architecture, test]
aliases: [Testing]
---

# Testing

Every suite is a file under `test/`; `pudu test test` runs them all and each suite names its failed
checks on stderr.

| Level | Suites | What they prove |
| --- | --- | --- |
| Domain | `test/PuduLangFui/Domain/**` | token expansion and refusal, rule rendering, names, slot discovery, color conversion and contrast |
| Core | `test/PuduLangFui/CoreTest` | class and token merging, conditional attributes |
| Theme | `test/PuduLangFui/ThemeTest` | every aspect becomes tokens, presets parse and refuse, every preset passes the contrast audit in both modes |
| Components | `test/PuduLangFui/Components/**` | variants render as data attributes, parts carry slots, success and failure states, escaping of hostile text |
| Catalog | `test/PuduLangFui/CatalogTest` | every style uses only known tokens and logical properties, every block is listed, every slot is unique to one block |
| Generator | `test/PuduLangFui/Cli/**` | module rewriting, dependency closure, add, diff, apply, build, and refusal on real temporary trees |
| Package | `test/Package/*` | layout and vault parity |
| Layers | `tools/Layers.pudu`, `tools/LayersTest.pudu` | every import points down and no cycle exists |
| Mutation | [[tools/Mutate]] | suites notice single-point changes to the pure layers |
| Examples | `examples/*.pudu`, run by CI | documented programs compile and answer 0 |

The gallery example renders every component to one page, which is exercised in a real browser
before a release: dialogs open, tabs switch, focus rings show, both color modes hold.

## Referenced by

[[architecture/SPECIFICATION]] · [[architecture/_MOC]]
