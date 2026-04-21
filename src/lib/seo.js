import { useEffect } from 'react';

function getOrCreate(attrType, attrValue) {
  let el = document.querySelector(`meta[${attrType}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrType, attrValue);
    document.head.appendChild(el);
  }
  return el;
}

/**
 * Sets document title + meta tags on mount, restores title on unmount.
 * @param {{ title: string, description: string, ogType?: string, url?: string }} opts
 */
export function useDocumentMeta({ title, description, ogType = 'website', url }) {
  useEffect(() => {
    const prevTitle = document.title;
    const fullTitle = `${title} | RayT`;

    document.title = fullTitle;
    getOrCreate('name', 'description').setAttribute('content', description);
    getOrCreate('property', 'og:title').setAttribute('content', fullTitle);
    getOrCreate('property', 'og:description').setAttribute('content', description);
    getOrCreate('property', 'og:type').setAttribute('content', ogType);
    if (url) getOrCreate('property', 'og:url').setAttribute('content', url);

    return () => { document.title = prevTitle; };
  }, [title, description, ogType, url]);
}
