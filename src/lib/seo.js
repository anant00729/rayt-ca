import { useEffect } from 'react';

function getOrCreateMeta(attrType, attrValue) {
  let el = document.querySelector(`meta[${attrType}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrType, attrValue);
    document.head.appendChild(el);
  }
  return el;
}

function getOrCreateLink(rel) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  return el;
}

/**
 * Sets document title + meta tags on mount, restores title on unmount.
 * @param {{
 *   title: string,
 *   description: string,
 *   ogType?: string,
 *   url?: string,
 *   canonical?: string,
 *   keywords?: string[],
 * }} opts
 */
export function useDocumentMeta({ title, description, ogType = 'website', url, canonical, keywords }) {
  const keywordsKey = Array.isArray(keywords) ? keywords.join(',') : '';

  useEffect(() => {
    const prevTitle = document.title;
    const fullTitle = `${title} | RayT`;

    document.title = fullTitle;
    getOrCreateMeta('name', 'description').setAttribute('content', description);
    getOrCreateMeta('property', 'og:title').setAttribute('content', fullTitle);
    getOrCreateMeta('property', 'og:description').setAttribute('content', description);
    getOrCreateMeta('property', 'og:type').setAttribute('content', ogType);

    const ogUrl = url || canonical;
    if (ogUrl) getOrCreateMeta('property', 'og:url').setAttribute('content', ogUrl);

    if (canonical) getOrCreateLink('canonical').setAttribute('href', canonical);

    if (keywordsKey) {
      getOrCreateMeta('name', 'keywords').setAttribute('content', keywordsKey);
    }

    return () => { document.title = prevTitle; };
  }, [title, description, ogType, url, canonical, keywordsKey]);
}
