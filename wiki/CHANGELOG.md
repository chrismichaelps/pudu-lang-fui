---
type: changelog
tags: [changelog]
---

# Changelog

## 2026-11-09 — Prerendered Create page and release readiness

- API sections list each declaration under its source comment.
- Code block copy falls back to the selection when the clipboard is refused, and shows an animated result.
- Browser tabs carry the product name.
- The Create page is built whole: inspector, first preview, look, fonts, and data are in its HTML, and its script attaches to them without redrawing.
- Create's pickers are a styled listbox with keyboard movement and typeahead, replacing the browser's selects.
- Usage samples nest by two spaces, whatever the formatter's continuation depth.
- Each look's rules are split into runs short enough for one array literal, so the package parses on the published 0.1.3 compiler.

## 2026-11-09 — Parity pass

- Every component compared by slot and computed style against the design reference, open states included.
- Rebuilt carousel, combobox, code field, resizable panels, calendar caption, date picker, pagination parts, and toggle group. Menus and the command list move by keyboard.
- Sliders keep their fill on the thumb in both directions. Charts animate as they appear, and respect reduced motion.
- Base styles carry structure only; each look carries appearance, and the shared base layer resets boxes.
- The Create page is an inspector of its own design, on the site's theme.
- Agent elements share one disclosure from the trace, and their demonstrations read as conversations.
- The home page opens straight into the component mosaic.
- Code samples are coloured by language at build time, with Pudu painted the same way as the playground, and every preview arrives inside its page.
- Parent rows of the documentation tree open and close their section.
- The prompt reacts to focus rather than hover, send waits for text, and model pickers are menus.
- The site gained its own identity: a two-column hero, a broader mosaic that fades under a blur, solid phone menus with a backdrop, and a mark and icon of its own.

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
- Toast and drawer rebuilt to full behavior: measured stacking, timers, swipe, promise toasts, and
  pointer dragging with stops, nesting, and a shrinking page. Whole icon libraries install as modules
  ([[decisions/ADR-0010-icons-on-demand]]).
- Eight looks as generated rule tables, applied in their own layer ([[decisions/ADR-0012-looks-as-data]]).
- Charts redrawn: shaded columns, smooth monotone curves, and ring segments with separators.
- The sidebar opens as a drawer with an overlay at phone width and closes from its toggle, the overlay,
  or escape; the shortcut and the remembered state follow. Dialogs and sheets carry a close icon.
- Design codes and the Create page: style, colors, fonts, icons, radius, and menu choices with a live preview.
- Risk LOW: a new package with no callers. Depth is recorded on each module page.

## Referenced by

[[00-INDEX]]
