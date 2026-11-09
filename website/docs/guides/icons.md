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
./fui icons add library-a:rocket library-b:home
```

The icons you add are written to `src/Ui/Icons.pudu`, so your program needs no network and carries only
what it uses. Check each library's license in the `libraries` listing.

```pudu
Icons.icon("library-a:rocket")
```

## Whole libraries

Add a whole library, aliases included, as a module of its own:

```bash
./fui icons library library-a
./fui icons library library-a library-b
```

```pudu
import Ui.Icons.LibraryA as LibraryA

LibraryA.icon("rocket")
```

`./fui icons library --all` adds every library, which comes to hundreds of megabytes of source, so most
projects add the libraries they use. Each module's header records the library's license.
