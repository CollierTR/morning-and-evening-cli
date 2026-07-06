import { Chalk } from "chalk";
import type { Devotional, DevotionDay } from "../types/devotional.js";

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

function renderDevotion(devotion: Devotional) {
  console.log(devotion.keyverse);
  console.log(devotion.body);
  console.log("-----------------------------------------------");
}
