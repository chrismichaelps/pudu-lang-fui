---
type: architecture
tags: [architecture, readability, code]
aliases: [Code style]
---

# Code style

Use one empty line to separate different statement groups inside a function. Keep consecutive `let`,
`var`, and `const` declarations together, and keep consecutive `if` checks together; this also holds
when a declaration or check spans several lines.

Leave one empty line before a guard group, match, loop, or explicit return when a different group
precedes it, and one after a completed control-flow block before different work. Never leave one
just after opening a body, just before closing one, or between a comment and what it documents.
Members of an `impl` block are separated by one empty line. Array literals and other expressions are
not broken up.

## Grill Log

- **Q:** A blank line after every statement? **A:** No: groups stay together. _Rejected:_ spacing that
  reads as noise.

## Referenced by

[[architecture/SPECIFICATION]] · [[architecture/_MOC]] · [[grammar/pudu]]
