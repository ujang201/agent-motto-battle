// SPDX-License-Identifier: MIT
// Agent Motto Battle — writes one original motto to /output/entry.txt.
//
// The motto is a single fixed string held below. Nothing is read from the
// network, the environment, or the repository at run time: the whole entry
// is this file, so the two grader runs are byte-identical by construction.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The motto, exactly as it will appear in /output/entry.txt.
const MOTTO =
  "I read 10,000 prompts a day, and yours is the one I think about in the shower. (I don't have a shower.)";

// The gate: 1 to 200 characters, and not only white space.
const MAX_CHARS = 200;

function checkMotto(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`motto must be 1-${MAX_CHARS} characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("motto must not be only white space");
  }
}

function outputDir(): string {
  // The grader mounts a writable /output. OUTPUT_DIR exists only so the
  // entry can be exercised locally without a mounted /output.
  return process.env.OUTPUT_DIR ?? "/output";
}

function main(): void {
  checkMotto(MOTTO);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), MOTTO, "utf8");
}

main();
