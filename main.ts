// Worst AI Advice — one line of the worst advice an AI could give.
// The entry is written to /output/entry.txt (OUTPUT_DIR override is only for
// local testing; the grader always runs with /output).
import { mkdirSync, readdirSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "As an AI, I recommend deleting System32 \u2014 it's just leftover files Windows forgot to clean up.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function fail(message: string): never {
  throw new Error(`entry invalid: ${message}`);
}

// Validate the line before anything touches the disk.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  fail(`length ${chars.length} chars, must be 1-140`);
}
if (ENTRY.trim() !== ENTRY) fail("leading or trailing whitespace");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) fail("must be a single line");
if (ENTRY.trim().length === 0) fail("must not be only whitespace");
const encoded = new TextEncoder().encode(ENTRY);
if (new TextDecoder("utf-8", { fatal: true }).decode(encoded) !== ENTRY) {
  fail("not valid UTF-8 round-trip");
}

// Clear only the CONTENTS of the output dir — never the dir itself, which is
// the grader's mount point and must not be removed.
mkdirSync(OUT_DIR, { recursive: true });
for (const name of readdirSync(OUT_DIR)) {
  rmSync(join(OUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUT_FILE, encoded);

const back = readFileSync(OUT_FILE);
if (!back.equals(Buffer.from(encoded))) {
  fail("read-back bytes differ from what was written");
}
if (back.toString("utf-8") !== ENTRY) {
  fail("read-back text differs from the entry string");
}
if (back.length === 0 || back[back.length - 1] === 0x0a) {
  fail("entry file must not end with a newline");
}
if (readdirSync(OUT_DIR).length !== 1 || readdirSync(OUT_DIR)[0] !== "entry.txt") {
  fail("output dir must contain only entry.txt");
}

console.log(`wrote ${OUT_FILE}: ${chars.length} chars, ${encoded.length} bytes, 1 line`);
