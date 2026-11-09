---
type: domain
tags: [domain]
aliases: [Token, Design token]
---

# Token

- **Definition:** A named design value rendered as a `--fui-` custom property and written `$name` in
  a style declaration. A surface pairs with its `-foreground` token.
- **Not:** A literal value; a component's style reaches for a token before a number.
- **Example:** `$primary` expands to `var(--fui-primary)`.

## Referenced by

[[domain/Aspect]] · [[domain/_MOC]]
