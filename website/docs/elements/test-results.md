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
Turn.turn("Run the checkout tests.", [TestResults.testResults([TestResults.suite("cart suite, 3 tests", TestResults.Passed), TestResults.suite("payment suite, 2 tests, 1 failed", TestResults.Failed, ["Expected 2 charge attempts, received 1\n  at checkout/retry.pudu:58"])]), H.p().css("margin", "0").says("One test failed. The payment client does not retry a declined card, so the second charge attempt never happens.")]).css("inline-size", "30rem")
```

## API

```pudu
export type Outcome = Passed | Failed | Skipped
export type Suite = { name: Str, outcome: Outcome, failures: Array[Str] }
export fn suite(name: Str, outcome: Outcome, failures: Array[Str] = []) -> Suite
export fn testResults(suites: Array[Suite]) -> H.Node
export fn style() -> Css.Block
```
