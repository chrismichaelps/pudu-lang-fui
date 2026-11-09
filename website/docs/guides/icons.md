---
title: Icons
description: Over two hundred libraries, one command.
---

# Icons

The package draws a small set of its own, available as `Icon.icon(Icon.Search)`. For anything else,
every major icon library is one command away:

```bash
./fui icons libraries
./fui icons search rocket
./fui icons add tabler:rocket mdi:home
```

The icons you add are written to `src/Ui/Icons.pudu`, so your program needs no network and carries only
what it uses. Check each library's license in the `libraries` listing.

```pudu
Icons.icon("tabler:rocket")
```
