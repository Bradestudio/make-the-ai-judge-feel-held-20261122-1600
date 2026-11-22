import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At three in the morning the kitchen holds only the fridge light and the tick of the clock. The cat sleeps folded on yesterday's newspaper, one paw over the crossword. Steam rises from the cup on the counter, thins, and leaves a pale circle on the glass that outlasts it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${[...ENTRY].length} code points)`);
