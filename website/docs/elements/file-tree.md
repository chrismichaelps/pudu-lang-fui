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
column("20rem", [FileTree.fileTree([FileTree.folder("src", [FileTree.file("main.pudu", FileTree.Modified), FileTree.file("new.pudu", FileTree.Added)])])])
```

## API

```pudu
export type Change = Unchanged | Added | Modified | Deleted
export type Entry = FileEntry(Str, Change) | FolderEntry(Str, Array[Entry])
export fn file(name: Str, change: Change) -> Entry FileEntry(name, change) }
export fn folder(name: Str, entries: Array[Entry]) -> Entry FolderEntry(name, entries) }
export fn fileTree(entries: Array[Entry]) -> H.Node
export fn style() -> Css.Block
```
