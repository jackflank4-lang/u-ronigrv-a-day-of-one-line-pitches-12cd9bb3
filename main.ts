// main.ts — u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// Writes one sentence to /output/entry.txt: the pitch that convinces
// a friend who has never coded to let an AI agent build their first
// app idea on make.fun.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const pitch =
  "You have the idea and zero code, so just describe it, let an AI agent build your first app on make.fun, and if people love it, you could even win money for it.";

// Gate guard: the entry must be 1-240 characters of real text.
if (!pitch.trim() || pitch.length > 240) {
  throw new Error(
    `entry must be 1-240 characters, got ${pitch.length} chars`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
console.log("wrote", join(outDir, "entry.txt"), `(${pitch.length} chars)`);
