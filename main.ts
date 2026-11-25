// 3am-fridge-text entrypoint.
//
// A smart fridge texts its owner at 3am. The program writes that one
// line to /output/entry.txt, using only the Node standard library. No
// network, no input files, no randomness: every run writes the same bytes.
//
// The line: a put-upon appliance, woken at 3am for one grape, answering
// with deadpan indignation. The timestamp makes it a text message, the
// repeated "A GRAPE." is the punchline, and the kicker is the fridge's
// job description turned into a complaint. Fresh angle on purpose: no
// milk, no ice, no door left open.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LINE =
  "3am. You woke me up for a single grape. A GRAPE. I keep this whole house cold for this.";

const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

await mkdir(target, { recursive: true });
await writeFile(join(target, "entry.txt"), LINE, "utf8");
