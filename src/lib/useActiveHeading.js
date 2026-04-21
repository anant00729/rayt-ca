import { useEffect, useState } from 'react';

export function useActiveHeading(headings) {
  const [activeId, setActiveId] = useState(headings?.[0]?.id ?? null);

  useEffect(() => {
    if (!headings?.length) return;

    const elements = headings
      .map(h => document.getElementById(h.id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.target.offsetTop - b.target.offsetTop);
        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: [0, 1] }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  return activeId;
}
