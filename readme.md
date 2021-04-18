# Web Component Analyzer Test For Class Extension

I believe there's a bug in the [Web Component Analyzer](https://github.com/runem/web-component-analyzer) library's API when using Lit Element.  Specifically, it's `analyzeText` function.

When using CLI mode, the analyzer will pull in prop definitions from a component's parent class, even if that class was imported from another file.   In API mode, this doesn't happen.  The `analyzeText` function will only find props from parent class definitions if the parent class is defined within the same file that the child class is defined.

## Setup
Run `yarn` or `npm i` to install the dependencies.

## The Test Files

In the examples/cli folder, there are two files where a class `TextField` extends class `TextFieldParent`, which in turn, extends class `LitElement`.

In the file single.file.ts, both classes are defined with that file itself.   But in the file multi.file.ts, only `TextField` is defined there, with `TextFieldParent` being imported from the file multi-parent.ts.

## The Test Scripts

### CLI

The commands
```bash
yarn cli-single
yarn cli-multi
```

will run, respecively, wca in CLI mode over the two files.   (Or you can run `yarn cli-all` to save a bit of typing.)  Check the `scripts` entry in package.json to see the CLI syntaxes used.

#### CLI Results
In both cases, the terminal output will show that props from both `TextField` and `TextFieldParent` are included in the markdown.

### API
The commands
```bash
yarn api-single
yarn api-multi
```

will repeat the two tests, but this time using the `analyzeText` function from the API rather than using CLI mode.   (Again, you can use `yarn api-all` to save yourself some typing.)

The two api scripts call the files test-api-single.js and test-api-multi.js, which are both in the examples/js folder.  

#### CLI Results
This time, only the single file variant will pull in props from both the `TextField` and `TextFieldParent` classes.  The multi file version will show only props from `TextField` but _not_ from `TextFieldParent`.


Note `yarn all-tests` will run all four tests in sequence.