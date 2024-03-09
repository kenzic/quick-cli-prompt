# Quick CLI Prompt

## Introduction

Stupid simple CLI prompt for JavaScript. Helpful when prototyping or creating simple CLI tools.

## Installation

```bash
npm install @kenzic/quick-cli-prompt
```

## Usage

```javascript
import quickCLIPrompt from '@kenzic/quick-cli-prompt';

quickCLIPrompt(async (input) => {
  const output = await doSomethingWithInput(input);
  console.log(output);
});
```
