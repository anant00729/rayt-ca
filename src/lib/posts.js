const rawPosts = import.meta.glob('/posts/*.md', { eager: true, query: '?raw', import: 'default' });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  match[1].split('\n').forEach(line => {
    const colon = line.indexOf(':');
    if (colon > -1) meta[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
  });

  return { meta, body: match[2].trim() };
}

const allPosts = Object.values(rawPosts)
  .map(raw => {
    const { meta, body } = parseFrontmatter(raw);
    return {
      title: meta.title ?? 'Untitled',
      date: meta.date ?? '2000-01-01',
      description: meta.description ?? '',
      slug: meta.slug ?? '',
      body,
    };
  })
  .filter(p => p.slug)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

/** @returns {{ title: string, date: string, description: string, slug: string }[]} */
export function getAllPosts() {
  return allPosts.map(({ title, date, description, slug }) => ({ title, date, description, slug }));
}

/** @returns {{ title: string, date: string, description: string, slug: string, body: string } | null} */
export function getPostBySlug(slug) {
  return allPosts.find(p => p.slug === slug) ?? null;
}
