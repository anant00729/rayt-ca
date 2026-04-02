#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse CLI args
const args = process.argv.slice(2);
let name = 'theme';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--name' && args[i + 1]) name = args[i + 1];
}

// Read stdin
const input = readFileSync(0, 'utf-8').trim();

// Extract hex colors from any format
function parseColors(raw) {
  // Extended Array: [{"name":"...","hex":"586994",...},...]
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed[0]?.hex) {
      return parsed.map(c => c.hex.replace(/^#/, ''));
    }
    // Simple Array: ["586994","7d869c",...]
    if (Array.isArray(parsed)) {
      return parsed.map(c => String(c).replace(/^#/, ''));
    }
    // Object: {"Baltic Blue":"586994",...}
    if (typeof parsed === 'object') {
      return Object.values(parsed).map(c => String(c).replace(/^#/, ''));
    }
  } catch {}

  // XML: <color ... hex="586994" />
  const xmlMatches = [...raw.matchAll(/hex="([^"]+)"/g)];
  if (xmlMatches.length) {
    return xmlMatches.map(m => m[1].replace(/^#/, ''));
  }

  // CSV or hex list: 586994,7d869c,... or #586994, #7d869c, ...
  const hexMatches = [...raw.matchAll(/\b#?([0-9a-fA-F]{6})\b/g)];
  if (hexMatches.length) {
    return hexMatches.map(m => m[1]);
  }

  console.error('Could not parse colors from input.');
  process.exit(1);
}

// Relative luminance for sorting
function luminance(hex) {
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

const hexColors = parseColors(input);

if (hexColors.length !== 5) {
  console.error(`Expected 5 colors, got ${hexColors.length}.`);
  process.exit(1);
}

// Sort dark → light
const sorted = [...hexColors].sort((a, b) => luminance(a) - luminance(b));

// Map: darkest→secondary, ..., lightest→primary
const roles = ['secondary', 'muted', 'border', 'accent', 'primary'];
const colors = {};
roles.forEach((role, i) => {
  colors[role] = `#${sorted[i]}`;
});

const theme = { name, colors };
const slug = name.toLowerCase().replace(/\s+/g, '-');
const outPath = resolve(__dirname, '..', 'colors', `${slug}.json`);

writeFileSync(outPath, JSON.stringify(theme, null, 2) + '\n');
console.log(`Wrote ${outPath}`);
