import chalk from "chalk";
import type { Devotional, DevotionDay } from "../types/devotional.js";

const maxWidth = Math.min(process.stdout.columns ?? 80, 80);

export function displayDevotional(
  data: DevotionDay,
  type: "morning" | "evening" | "both",
) {
  switch (type) {
    case "morning":
      renderDevotion(data.morning);
      break;
    case "evening":
      renderDevotion(data.evening);
      break;
    case "both":
      renderDevotion(data.morning);
      renderDevotion(data.evening);
      break;
  }
}

function wordWrap(text: string, max: number): string {
  // WARNING: This function is AI slop...
  const lines: string[] = [];
  for (const p of text.split("\n")) {
    const indent = p.match(/^\s*/)?.[0] ?? "";
    const stripped = p.trimStart();
    if (stripped.length <= max - indent.length) {
      lines.push(p);
      continue;
    }
    const words = stripped.split(/\s+/);
    let line = indent;
    let first = true;
    for (const w of words) {
      const sep = first ? "" : " ";
      const candidate = line + sep + w;
      if (candidate.length > max) {
        lines.push(line);
        line = w;
      } else {
        line = candidate;
      }
      first = false;
    }
    if (line.trim()) lines.push(line);
  }
  return lines.join("\n");
}

function renderDevotion(devotion: Devotional) {
  const cleanedDevotionTitle = devotion.body.split("\r\n    ")[0];
  const cleanedDevotionBody = devotion.body.split("\r\n    \n\n")[1];

  const line = chalk.dim("━".repeat(maxWidth));

  console.log("\n" + line);
  console.log("  " + chalk.bold.cyan(cleanedDevotionTitle));
  console.log("  " + chalk.italic.green(`"${devotion.keyverse}"`));
  console.log("");
  console.log("  " + wordWrap(cleanedDevotionBody!, maxWidth - 4));
  console.log(line + "\n");
}
