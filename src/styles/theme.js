// Non-color design tokens. Color/shadow/radius still live in tokens.js
// (sourced from data/colors.json). Everything else — fonts, spacing,
// button sizing, transitions — lives here.

export const fonts = {
  heading: "'Nunito Sans', sans-serif",
  body: "'Nunito Sans', sans-serif",
  display: "'Changa One', sans-serif",
};

export const space = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '3rem',
  xl: '4rem',
  xxl: '6rem',
};

// Button padding + font-size per size. Used by the shared <Button> primitive.
export const buttonSize = {
  sm: { padY: '0.5rem',  padX: '1rem',    fs: '0.85rem' },
  md: { padY: '0.85rem', padX: '1.5rem',  fs: '0.95rem' },
  lg: { padY: '1rem',    padX: '1.75rem', fs: '0.98rem' },
};

export const transition = {
  fast: '0.2s ease',
  base: '0.25s ease',
};
