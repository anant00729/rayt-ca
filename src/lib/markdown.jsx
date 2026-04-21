export function slugify(text) {
  return String(text).toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');
}

export function extractHeadings(body) {
  return [...body.matchAll(/^#{2,3} (.+)$/gm)].map(m => ({
    level: m[0].startsWith('###') ? 3 : 2,
    text: m[1].trim(),
    id: slugify(m[1].trim()),
  }));
}

export const headingComponents = {
  h2: ({ children, ...props }) => {
    const id = slugify(String(children));
    return <h2 id={id} {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }) => {
    const id = slugify(String(children));
    return <h3 id={id} {...props}>{children}</h3>;
  },
};
