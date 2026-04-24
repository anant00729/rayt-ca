import compactBase from '../widgetConfigs/reviewsCompact.json';
import { INSPIRATION_PRESETS, INSPIRATION_TAB_ORDER } from './index';

const COMPACT_KEYS = [
  'containerBgColor', 'sectionTitleText', 'sectionTitleColor', 'sectionTitleWeight',
  'showSectionHeader', 'topBarCountColor', 'writeReviewBtnBgColor',
  'writeReviewBtnTextColor', 'writeReviewBtnBorderColor', 'writeReviewBtnRadius',
  'cardBgColor', 'cardBorderRadius', 'cardBorderColor', 'cardBorderWidth',
  'cardPadding', 'cardShadow', 'showCardBorder',
  'reviewerNameColor', 'reviewerNameWeight', 'verifiedBadgeColor',
  'dateColor', 'starColor', 'ratingIcon', 'mutedColor',
  'reviewTextColor', 'imageRadius', 'loadMoreBtnBgColor',
  'loadMoreBtnTextColor', 'loadMoreBtnBorderColor', 'loadMoreBtnRadius',
  'filterSortIconColor', 'filterSortBtnColor', 'selectRadius', 'productNameColor',
];

function pick(src, keys) {
  const out = {};
  for (const k of keys) if (src[k] !== undefined) out[k] = src[k];
  return out;
}

function buildCompact(brandSettings, extra = {}) {
  return { ...compactBase, ...pick(brandSettings, COMPACT_KEYS), ...extra };
}

// Each preset gets distinct grid/card/media numbers. Card corner radius === image
// corner radius per tab (kept consistent with the tab's visual language).
const PRESET_OVERRIDES = {
  photography: {
    desktopColumns: 1, gridGap: 10,
    cardBorderRadius: 2, cardPadding: 22, cardShadow: 'none',
    imageRadius: 2, imageMaxHeight: 220,
    showSectionHeader: true,
  },
  jewelry: {
    desktopColumns: 1, gridGap: 20,
    cardBorderRadius: 12, cardPadding: 24, cardShadow: 'subtle',
    imageRadius: 12, imageMaxHeight: 200,
  },
  pets: {
    desktopColumns: 2, gridGap: 18,
    cardBorderRadius: 18, cardPadding: 18, cardShadow: 'strong',
    imageRadius: 18, imageMaxHeight: 170,
  },
  furniture: {
    desktopColumns: 1, gridGap: 24,
    cardBorderRadius: 0, cardPadding: 28, cardShadow: 'none',
    imageRadius: 0, imageMaxHeight: 240,
  },
  coffee: {
    desktopColumns: 1, gridGap: 14,
    cardBorderRadius: 8, cardPadding: 20, cardShadow: 'subtle',
    imageRadius: 8, imageMaxHeight: 180,
  },
  tech: {
    desktopColumns: 2, gridGap: 12,
    cardBorderRadius: 6, cardPadding: 16, cardShadow: 'subtle',
    imageRadius: 6, imageMaxHeight: 150,
  },
  plants: {
    desktopColumns: 2, gridGap: 22,
    cardBorderRadius: 20, cardPadding: 22, cardShadow: 'none',
    imageRadius: 20, imageMaxHeight: 200,
  },
  drinks: {
    desktopColumns: 2, gridGap: 10,
    cardBorderRadius: 14, cardPadding: 14, cardShadow: 'strong',
    imageRadius: 14, imageMaxHeight: 160,
  },
  beauty: {
    desktopColumns: 1, gridGap: 16,
    cardBorderRadius: 24, cardPadding: 20, cardShadow: 'subtle',
    imageRadius: 24, imageMaxHeight: 190,
  },
};

export const INSPIRATION_PRESETS_COMPACT = Object.fromEntries(
  INSPIRATION_TAB_ORDER.map((key) => {
    const base = INSPIRATION_PRESETS[key];
    return [key, {
      key,
      label: base.label,
      accent: base.accent,
      reviews: base.reviews,
      settings: buildCompact(base.settings, PRESET_OVERRIDES[key] || {}),
    }];
  })
);
