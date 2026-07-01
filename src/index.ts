#!/usr/bin/env node
import { Command, Option } from "commander";
// import { initCommand } from "./commands/init.js";

const today = new Date().toISOString();

const program = new Command();

program
  .name("Morning and Evening - Devotional")
  .description(
    `This program is a CLI adaptation of "Morning and Evening" devotional by Charles H. Spurgeon`,
  )
  .option(
    "-d, --date <date>",
    "Specify a date. Defaults to current date.",
    today,
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
const options = program.opts();
console.log(options.date, options.morning, options.evening);
