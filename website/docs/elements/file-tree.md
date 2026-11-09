---
title: File Tree
description: Changed files as a tree.
---

# File Tree

Changed files as a tree.

<div class="fui-preview"><a href="../previews/file-tree.html">Open the File Tree preview</a></div>

## Installation

```bash
fui add file-tree
```

## Usage

```pudu
column("20rem", [FileTree.fileTree([FileTree.folder("app", [FileTree.file("layout.pudu", FileTree.Unchanged), FileTree.file("page.pudu", FileTree.Modified)]), FileTree.folder("components", [FileTree.folder("ui", [FileTree.file("button.pudu", FileTree.Added), FileTree.file("login-form.pudu", FileTree.Deleted)])])])])
```

## API

```pudu
/// What happened to a file.
export type Change = Unchanged | Added | Modified | Deleted

/// A file or a folder of entries.
export type Entry = FileEntry(Str, Change) | FolderEntry(Str, Array[Entry])

/// A file.
export fn file(name: Str, change: Change) -> Entry

/// A folder of entries.
export fn folder(name: Str, entries: Array[Entry]) -> Entry

/// A tree of the given entries.
export fn fileTree(entries: Array[Entry]) -> H.Node

/// The styles of a file tree.
export fn style() -> Css.Block
```
