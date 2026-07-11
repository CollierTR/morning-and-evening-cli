# morning-and-evening-cli

A CLI tool that displays daily devotional readings from Charles H. Spurgeon's "Morning and Evening."

## Installation

```bash
nvm use
npm install
```

For global access:

```bash
npm install -g .
```

## Usage

```bash
me                          # today's morning and evening readings
me -m                       # today's morning reading only
me -e                       # today's evening reading only
me -d 12-25                 # december 25th readings
me -d 3-15 -e               # march 15th evening reading only
me -v                       # show version
```

## Options

| Flag | Description |
| --- | --- |
| `-d, --date <date>` | Date in `month-day` format. Defaults to today. |
| `-m, --morning` | Show morning reading only. |
| `-e, --evening` | Show evening reading only. |
| `-v, --version` | Show version number. |
| `-h, --help` | Show help. |

## Development

```bash
npm run build               # compile TypeScript to dist/
npm run dev                 # run with ts-node (no build step)
```

Requires Node.js 22 (see `.nvmrc`).

## Tech Stack

- **TypeScript** (v6)
- **Node.js** 22
- **Commander** for CLI argument parsing
- **Chalk** for terminal styling

