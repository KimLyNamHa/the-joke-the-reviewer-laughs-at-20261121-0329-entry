import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Contract: write exactly one line to entry.txt — the joke, and nothing
// else. No trailing newline, no extra whitespace, deterministic across
// runs. The joke text itself must never change here; only this file's
// structure may be tidied.
const joke =
  "My AI pair programmer writes 1,000 lines a minute and reviews its own PRs \u2014 I'm just the human it keeps around for the blame.";

// Guard the contract: a stray newline or edit that adds one would change
// the judged output, so fail loudly instead of writing a bad entry.
if (joke.length === 0 || joke.includes("\n") || joke.endsWith(" ")) {
  throw new Error("joke must be a single non-empty line with no trailing newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, joke, "utf8");
