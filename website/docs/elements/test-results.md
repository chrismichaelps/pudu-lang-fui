---
title: Test Results
description: A test run.
---

# Test Results

A test run.

<div class="fui-preview"><a href="../previews/test-results.html">Open the Test Results preview</a></div>

## Installation

```bash
fui add test-results
```

## Usage

```pudu
column("24rem", [TestResults.testResults([TestResults.suite("Layout", TestResults.Passed), TestResults.suite("Theme", TestResults.Failed, ["contrast"])])])
```

## API

```pudu
export type Outcome = Passed | Failed | Skipped
export type Suite = name: Str, outcome: Outcome, failures: Array[Str] }
export fn suite(name: Str, outcome: Outcome, failures: Array[Str] = []) -> Suite
export fn testResults(suites: Array[Suite]) -> H.Node
export fn style() -> Css.Block
```
