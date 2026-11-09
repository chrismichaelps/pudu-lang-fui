---
type: changelog
tags: [changelog]
---

# Changelog

## 2026-11-09 — Initial system

- The vault, [[architecture/SPECIFICATION]], [[grammar/pudu]], the domain glossary, the seams, and the
  decisions.
- The style block domain, the seven-aspect theme, presets, and the contrast audit
  ([[decisions/ADR-0002-styles-beside-markup]], [[decisions/ADR-0005-seven-aspects]]).
- Every component, element, and block, on layered folders with kinds dispatched through tables
  ([[decisions/ADR-0007-factories-for-kinds]], [[decisions/ADR-0008-folders-are-layers]]).
- The generator and its source-tree registry ([[decisions/ADR-0006-source-tree-registry]]), and icons
  on demand ([[decisions/ADR-0010-icons-on-demand]]).
- The default look ([[decisions/ADR-0011-default-look]]), and the documentation site.
- Compiler faults found while building were reported as
  [pudu-lang#838](https://github.com/chrismichaelps/pudu-lang/issues/838) and
  [pudu-lang#839](https://github.com/chrismichaelps/pudu-lang/issues/839), and worked around
  ([[decisions/ADR-0009-flat-style-steps]]).
- Risk LOW: a new package with no callers. Depth is recorded on each module page.

## Referenced by

[[00-INDEX]]
