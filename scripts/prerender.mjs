/**
 * Post-build static prerender for OG social previews.
 *
 * Reads every /posts/*.md at build time (Node.js fs — safe here since this
 * runs locally/in CI, not in a serverless function), then injects title +
 * og:* meta tags into copies of dist/index.html so social crawlers see them
 * without executing JavaScript.
 *
 * Emits:
 *   dist/blog/index.html
 *   dist/blog/<slug>/index.html  (one per post)
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';

const ROOT = resolve(process.cwd());
const DIST = join(ROOT, 'dist');
const POSTS_DIR = join(ROOT, 'posts');
const BASE_URL = 'https://rayt.ca';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const meta = {};
  match[1].split('\n').forEach(line => {
    const colon = line.indexOf(':');
    if (colon > -1) meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  });
  return meta;
}

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectMeta(html, { title, description, ogType = 'website', url }) {
  const fullTitle = `${title} | RayT`;
  const tags = [
    `<title>${escape(fullTitle)}</title>`,
    `<meta name="description" content="${escape(description)}">`,
    `<meta property="og:title" content="${escape(fullTitle)}">`,
    `<meta property="og:description" content="${escape(description)}">`,
    `<meta property="og:type" content="${escape(ogType)}">`,
    url ? `<meta property="og:url" content="${escape(url)}">` : '',
  ].filter(Boolean).join('\n    ');

  // Remove any existing <title> injected by the SPA shell, then append ours.
  const withoutTitle = html.replace(/<title>[^<]*<\/title>/, '');
  return withoutTitle.replace('</head>', `    ${tags}\n  </head>`);
}

const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

// /blog index
const blogDir = join(DIST, 'blog');
mkdirSync(blogDir, { recursive: true });
writeFileSync(
  join(blogDir, 'index.html'),
  injectMeta(template, {
    title: 'Blog',
    description: 'Help articles and feature guides for RayT merchants.',
    url: `${BASE_URL}/blog`,
  })
);
console.log('  prerendered: /blog');

// /blog/:slug — one file per post
let mdFiles = [];
try {
  mdFiles = readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
} catch {
  console.warn('  /posts directory not found — skipping post prerender');
}

for (const file of mdFiles) {
  const raw = readFileSync(join(POSTS_DIR, file), 'utf-8');
  const meta = parseFrontmatter(raw);
  if (!meta.slug) continue;

  const slugDir = join(blogDir, meta.slug);
  mkdirSync(slugDir, { recursive: true });
  writeFileSync(
    join(slugDir, 'index.html'),
    injectMeta(template, {
      title: meta.title ?? 'Untitled',
      description: meta.description ?? '',
      ogType: 'article',
      url: `${BASE_URL}/blog/${meta.slug}`,
    })
  );
  console.log(`  prerendered: /blog/${meta.slug}`);
}

console.log('Prerender complete.');
