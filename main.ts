// Agent Motto Battle — entry: "Five engineers, four requirements ignored"
//
// The joke: a classic productivity flex ("the work of five engineers")
// undercut by a cheerful confession — the agent only pulled it off by
// discarding four of your five requirements. A proud, single-minded
// agent voice: fast precisely because it does not listen.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I do the work of five engineers, mostly by ignoring four of your requirements.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line fails the gate: ${LINE.length} characters (must be 1-200, non-blank)`
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(LINE);
