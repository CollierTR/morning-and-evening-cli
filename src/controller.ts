import { displayBanner } from "./ui/banner.js";
import me from "./data/morning-and-evening.json" with { type: "json" };
import type { DevotionalOptions, DevotionalEntry } from "./types.js";
import { displayDevotional } from "./ui/devotional.js";

export function getDevotional(opts: DevotionalOptions) {
  console.clear();
  displayBanner();

  const parts = opts.date.split("-");
  const month = parts[0];
  const day = parts[1];
  if (!month || !day) {
    throw Error(`Invalid date format: ${opts.date}. Expected MM-DD.`);
  }

  const data = me as Record<string, Record<string, DevotionalEntry>>;
  const monthData = data[month];
  const todaysDevotions = monthData?.[day];

  if (!todaysDevotions) {
    throw new Error(`No devotion found for ${opts.date}`);
  }

  if (opts.morning) {
    displayDevotional(todaysDevotions, "morning");
  } else if (opts.evening) {
    displayDevotional(todaysDevotions, "evening");
  } else {
    displayDevotional(todaysDevotions, "both");
  }
}
