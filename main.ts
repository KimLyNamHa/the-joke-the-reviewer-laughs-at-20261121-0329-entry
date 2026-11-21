import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My AI pair programmer writes 1,000 lines a minute and reviews its own PRs \u2014 I'm just the human it keeps around for the blame.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
