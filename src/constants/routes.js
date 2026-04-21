// Centralized route paths — single source of truth for every internal
// link in the app. Update here when a route moves, not across dozens of files.

export const ROUTES = {
  HOME: '/',
  PRICING: '/pricing',
  WIDGETS: '/widgets',
  WIDGET_DETAIL: (slug) => `/widgets/${slug}`,
  CUSTOMERS: '/customers',
  PRODUCT_REVIEWS: '/product-reviews',
  CUSTOMER_REFERRALS: '/customer-referrals',
  AI: '/ai',
  RESOURCES: '/resources',
  CONTACT: '/contact',
  BLOG: '/blog',
  BLOG_POST: (slug) => `/blog/${slug}`,
  DOCS: '/docs',
  DOCS_COLLECTION: (col) => `/docs/${col}`,
  DOCS_ARTICLE: (col, slug) => `/docs/${col}/${slug}`,
};

// External URLs used across the app. Replace these in one place as
// real endpoints come online (install link, docs, social, etc.).
export const EXTERNAL = {
  GET_STARTED: 'https://google.com',
  DEMO_PLACEHOLDER: 'https://google.com',
};
