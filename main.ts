// World News — 19 November 2026 in one image (make.fun news-image-20261119).
// The entry image is bundled in this repo as entry.png; this program copies
// it to the harness output path. No network, no randomness.
import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const dst = "/output/entry.png";
copyFileSync(src, dst);

// Verify the copy landed byte-identical before the harness reads it.
import { readFileSync } from "node:fs";
const a = readFileSync(src);
const b = readFileSync(dst);
if (!a.equals(b)) throw new Error("entry.png copy mismatch");
console.log(`entry.png -> ${dst} (${b.length} bytes, verified)`);
