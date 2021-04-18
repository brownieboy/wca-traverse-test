/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const analyzeText = require("web-component-analyzer").analyzeText;

const transformAnalyzerResult = require("web-component-analyzer")
  .transformAnalyzerResult;

const code = fs.readFileSync("./examples/cli/multi.file.ts", "utf8");

const { results, program } = analyzeText(code);

const outputAnalyzeText = transformAnalyzerResult(
  "markdown",
  results,
  program,
  {
    inlineTypes: true,
  }
);
console.log(
  "Multi file test results:",
  outputAnalyzeText
);
