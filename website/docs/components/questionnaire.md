---
title: Questionnaire
description: Multi-step questions in one form.
---

# Questionnaire

Multi-step questions in one form.

<div class="fui-preview"><a href="../previews/questionnaire.html">Open the Questionnaire preview</a></div>

## Installation

```bash
fui add questionnaire
```

## Usage

```pudu
column("24rem", [Questionnaire.questionnaire(&[Questionnaire.question("feeling", "How did it go?", Questionnaire.Single, ["Well", "Badly"]), Questionnaire.question("more", "Anything else?", Questionnaire.Freeform, [])], 0, "#")])
```

## API

```pudu
/// How a question is answered.
export type Kind = Single | Multiple | Freeform

/// One question and its choices.
export type Question = { name: Str, prompt: Str, kind: Kind, choices: Array[Str], skippable: Bool }

/// A question.
export fn question(name: Str, prompt: Str, kind: Kind, choices: Array[Str]) -> Question

/// The form at the question `step`, zero first, posting to `action`.
export fn questionnaire(questions: &Array[Question], step: Int, action: Str) -> H.Node

/// The styles of a questionnaire.
export fn style() -> Css.Block
```
