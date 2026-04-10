import colors from '../data/colors.json';

// Cool sky + mint palette — sourced from src/data/colors.json homePalette.
// Local-only tokens; kept out of :root so the footer theme switcher can't override the marketing page.
export const tokens = colors.homePalette;

// Accent → tint map used by WidgetCard and feature cells.
export const accentMap = colors.accentMap;
