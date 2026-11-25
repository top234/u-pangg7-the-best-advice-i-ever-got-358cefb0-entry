import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const entry =
  "My grandfather stopped mending the half-built fence, wiped his hands, and told me, 'A fence is only as strong as the post you set when nobody is watching.'";

writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry.txt (${entry.length} characters)`);
