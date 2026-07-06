#!/usr/bin/env node
import { Command, Option } from "commander";
import { getDevotional } from "./controller.js";
import type { DevotionalOptions } from "./types.js";

const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const key = `${month}-${day}`;

const program = new Command();

program
  .name("Morning and Evening - Devotional")
  .description(
    `This program is a CLI adaptation of the "Morning and Evening" devotional by Charles H. Spurgeon`,
  )
  .option(
    "-d, --date <date>",
    "Specify a date in 'month-day' format. Defaults to current date.",
    key,
  )
  .addOption(
    new Option("-m --morning", "Opens to the morning devotion").conflicts(
      "evening",
    ),
  )
  .addOption(
    new Option("-e --evening", "Opens to the evening devotion").conflicts(
      "morning",
    ),
  )
  .version("0.1.0", "-v, --version");

program.parse();
const options: DevotionalOptions = program.opts();
getDevotional(options);
