const rawDocs = import.meta.glob('/docs/**/*.md', { eager: true, query: '?raw', import: 'default' });

const COLLECTION_META = [
  {
    slug: 'getting-started',
    label: 'Getting Started',
    description: 'Everything you need to know to get Rayt up & running on your store',
  },
  {
    slug: 'gather-reviews',
    label: 'Gather Reviews',
    description: 'Everything you need to gather reviews — requests, messages, forms & incentives',
  },
  {
    slug: 'widgets',
    label: 'On-site Displays & Widgets',
    description: 'How to add reviews to your website & managing those displays',
  },
  {
    slug: 'manage-reviews',
    label: 'Manage Reviews',
    description: 'Tools to manage & reply to reviews',
  },
  {
    slug: 'integrations',
    label: 'Integrations',
    description: 'Connecting Rayt with the other tools you use',
  },
  {
    slug: 'settings',
    label: 'Settings',
    description: 'Guidance on making changes to your account and team',
  },
];

const COLLECTION_BY_SLUG = Object.fromEntries(COLLECTION_META.map(c => [c.slug, c]));

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

// Path shape: /docs/<collection-slug>/<article-slug>.md
function parsePath(path) {
  const m = path.match(/^\/docs\/([^/]+)\/([^/]+)\.md$/);
  if (!m) return null;
  return { collection: m[1], slug: m[2] };
}

const allArticles = Object.entries(rawDocs)
  .map(([path, raw]) => {
    const parts = parsePath(path);
    if (!parts) return null;
    const { meta, body } = parseFrontmatter(raw);
    const collectionSlug = parts.collection;
    const collectionMeta = COLLECTION_BY_SLUG[collectionSlug];
    return {
      path,
      collection: collectionSlug,
      collectionLabel: meta.collectionLabel ?? collectionMeta?.label ?? collectionSlug,
      slug: parts.slug,
      title: meta.title ?? 'Untitled',
      description: meta.description ?? '',
      group: meta.group ?? 'General',
      date: meta.date ?? '2000-01-01',
      body,
    };
  })
  .filter(Boolean);

const articlesByCollection = allArticles.reduce((acc, a) => {
  (acc[a.collection] ||= []).push(a);
  return acc;
}, {});

/** @returns {{ slug: string, label: string, description: string, articleCount: number }[]} */
export function getAllCollections() {
  return COLLECTION_META.map(c => ({
    ...c,
    articleCount: (articlesByCollection[c.slug] ?? []).length,
  }));
}

export function getCollection(slug) {
  const meta = COLLECTION_BY_SLUG[slug];
  if (!meta) return null;
  const articles = articlesByCollection[slug] ?? [];

  const groupOrder = [];
  const groupMap = new Map();
  articles.forEach(a => {
    if (!groupMap.has(a.group)) {
      groupMap.set(a.group, []);
      groupOrder.push(a.group);
    }
    groupMap.get(a.group).push(a);
  });

  const groups = groupOrder.map(name => ({
    name,
    articles: [...groupMap.get(name)].sort((a, b) => new Date(a.date) - new Date(b.date)),
  }));

  return {
    slug: meta.slug,
    label: meta.label,
    description: meta.description,
    articleCount: articles.length,
    groups,
  };
}

export function getArticle(collection, slug) {
  const a = (articlesByCollection[collection] ?? []).find(x => x.slug === slug);
  return a ?? null;
}

export function getRelatedArticles(collection, slug, limit = 5) {
  const current = getArticle(collection, slug);
  if (!current) return [];
  const peers = (articlesByCollection[collection] ?? []).filter(a => a.slug !== slug);
  const sameGroup = peers.filter(a => a.group === current.group);
  const otherGroups = peers.filter(a => a.group !== current.group);
  return [...sameGroup, ...otherGroups].slice(0, limit);
}

/**
 * Case-insensitive search across title + description + body.
 * Title match ranked highest, then description, then body.
 */
export function searchDocs(query) {
  const q = String(query ?? '').trim().toLowerCase();
  if (!q) return [];

  return allArticles
    .map(a => {
      const title = a.title.toLowerCase();
      const desc = a.description.toLowerCase();
      const body = a.body.toLowerCase();
      let score = 0;
      if (title.includes(q)) score += 100;
      if (desc.includes(q)) score += 10;
      if (body.includes(q)) score += 1;
      return { article: a, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(r => {
      const { body: _body, ...rest } = r.article;
      return rest;
    });
}
