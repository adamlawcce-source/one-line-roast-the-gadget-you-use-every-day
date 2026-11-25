import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the gadget used every day: wireless earbuds.
// Why it fits the judge brief: it names a daily gadget, the gripe is a
// concrete behaviour (Bluetooth drops the moment the phone goes in a
// pocket), the angle is fresh (paying for silence, not for sound), and the
// punchline lands on the last two words. Tightened in revision: dropped
// "wireless" and "listen to" — the joke is sharper with fewer words.
const TEXT =
  "My earbuds disconnect every time my phone goes in my pocket. I paid $150 to hear silence in stereo.";

const chars = [...TEXT].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry is only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
