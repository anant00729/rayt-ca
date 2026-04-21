const ICONS = {
  'getting-started': (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M10 26 L32 14 L54 26 L54 28 L10 28 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <path d="M14 28 L14 50 L50 50 L50 28" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <path d="M26 50 L26 36 L38 36 L38 50" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <path d="M14 22 L54 22" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    </svg>
  ),
  'gather-reviews': (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M10 20 L24 20 L28 16 L54 16 L54 48 L10 48 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <path d="M10 26 L54 26" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  ),
  'widgets': (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="8" y="12" width="48" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M24 50 L40 50 M32 44 L32 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="32" cy="28" r="1.5" fill="currentColor"/>
    </svg>
  ),
  'manage-reviews': (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <path d="M12 10 L44 10 L52 18 L52 54 L12 54 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <path d="M44 10 L44 18 L52 18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
      <path d="M20 28 L42 28 M20 36 L42 36 M20 44 L34 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'integrations': (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <circle cx="20" cy="18" r="6" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="44" cy="18" r="6" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="32" cy="44" r="7" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M24 24 L30 38 M40 24 L34 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  'settings': (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden>
      <rect x="14" y="12" width="36" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="26" cy="24" r="4" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M20 32 L32 32 M20 40 L40 40 M20 46 L36 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
};

export default function CollectionIcon({ slug, size = 64 }) {
  const icon = ICONS[slug] ?? ICONS['getting-started'];
  return (
    <span
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-accent)',
      }}
    >
      {icon}
    </span>
  );
}
