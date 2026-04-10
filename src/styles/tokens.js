// Cool sky + mint palette for the rayt.ca home page.
// Local-only tokens — kept out of global CSS vars so the footer theme
// switcher (which writes :root) can't accidentally override the marketing page.
export const tokens = {
  ink900: '#0E1B2B',
  ink700: '#1B2A3A',
  ink500: '#4B5E75',
  ink300: '#8FA2B8',

  paper: '#FBFDFF',
  paper2: '#F2F7FC',

  sky50: '#EAF4FD',
  sky100: '#DCEBF7',
  sky200: '#BCD8F0',
  sky500: '#5A9BE0',
  sky700: '#2E6FB0',

  mint50: '#EAF8F1',
  mint100: '#D6F0E4',
  mint500: '#52C9A0',

  lilac50: '#F3F1FC',
  lilac100: '#E8E4FB',

  sun50: '#FFF8E1',

  border: 'rgba(14, 27, 43, 0.08)',
  borderStrong: 'rgba(14, 27, 43, 0.14)',

  shadowSm: '0 1px 2px rgba(14,27,43,0.04), 0 2px 8px rgba(14,27,43,0.04)',
  shadowMd: '0 6px 24px rgba(18,52,88,0.08)',
  shadowLg: '0 24px 60px rgba(18,52,88,0.12)',
  shadowGlow: '0 10px 30px rgba(90,155,224,0.18)',

  radius: '18px',
  radiusSm: '10px',
  radiusLg: '28px',
  radiusPill: '999px',
};

// Accent → tint map used by WidgetCard and feature cells.
export const accentMap = {
  sky:   { bg: tokens.sky50,   tint: tokens.sky100,   edge: tokens.sky200,   ink: tokens.sky700 },
  mint:  { bg: tokens.mint50,  tint: tokens.mint100,  edge: '#B4E3CC',       ink: '#147A55' },
  lilac: { bg: tokens.lilac50, tint: tokens.lilac100, edge: '#D3CCF5',       ink: '#4937A5' },
  sun:   { bg: tokens.sun50,   tint: '#FFE9A8',       edge: '#F6D980',       ink: '#7A5A10' },
};
