// The Vacuum's Alibi — one line, 200 characters max.
//
// A robot vacuum files a deadpan log entry explaining why it missed a spot.
// The program writes that single sentence to entry.txt in the harness
// output folder. Deterministic: the same sentence, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The alibi: the crumbs stayed put because the cat was watching, and this
// machine does not perform under pressure — a heckler in the audience, and
// a vacuum with standards.
const ALIBI =
  "Log 047: I left the crumbs under the table. The cat was watching, and I do not perform under pressure.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ALIBI, "utf8");

console.log(ALIBI);
console.log(`characters: ${ALIBI.length}`);
