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

const DEFAULT_AUTHOR = 'Anant S Awasthy';

const allPosts = Object.values(rawPosts)
  .map(raw => {
    const { meta, body } = parseFrontmatter(raw);
    return {
      title: meta.title ?? 'Untitled',
      date: meta.date ?? '2000-01-01',
      description: meta.description ?? '',
      slug: meta.slug ?? '',
      category: meta.category ?? 'product',
      categoryLabel: meta.categoryLabel ?? 'Product updates',
      author: meta.author ?? DEFAULT_AUTHOR,
      body,
    };
  })
  .filter(p => p.slug)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getAllPosts() {
  return allPosts.map(({ title, date, description, slug, category, categoryLabel, author }) => ({
    title, date, description, slug, category, categoryLabel, author,
  }));
}

export function getPostBySlug(slug) {
  return allPosts.find(p => p.slug === slug) ?? null;
}

export function getPostByCategoryAndSlug(category, slug) {
  return allPosts.find(p => p.category === category && p.slug === slug) ?? null;
}

export function getBlogGroups() {
  const order = [];
  const map = new Map();
  for (const p of allPosts) {
    if (!map.has(p.category)) {
      order.push(p.category);
      map.set(p.category, { category: p.category, label: p.categoryLabel, posts: [] });
    }
    map.get(p.category).posts.push({
      title: p.title, date: p.date, description: p.description, slug: p.slug,
      category: p.category, categoryLabel: p.categoryLabel, author: p.author,
    });
  }
  return order.map(c => map.get(c));
}

export function searchPosts(query) {
  const q = String(query ?? '').trim().toLowerCase();
  if (!q) return [];

  return allPosts
    .map(p => {
      const title = p.title.toLowerCase();
      const desc = p.description.toLowerCase();
      const body = p.body.toLowerCase();
      let score = 0;
      if (title.includes(q)) score += 100;
      if (desc.includes(q)) score += 10;
      if (body.includes(q)) score += 1;
      return { post: p, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => {
      const { body: _b, ...rest } = r.post;
      return rest;
    });
}
