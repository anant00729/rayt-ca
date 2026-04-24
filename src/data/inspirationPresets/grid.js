import reviewsGridBase from '../widgetConfigs/reviewsGrid.json';
import { INSPIRATION_PRESETS, INSPIRATION_TAB_ORDER } from './index';

const GRID_KEYS = [
  'containerBgColor', 'sectionTitleText', 'sectionTitleColor', 'sectionTitleWeight',
  'showSectionHeader', 'topBarCountColor', 'writeReviewBtnBgColor',
  'writeReviewBtnTextColor', 'writeReviewBtnBorderColor', 'writeReviewBtnRadius',
  'cardBgColor', 'cardBorderRadius', 'cardBorderColor', 'cardBorderWidth',
  'cardPadding', 'cardShadow', 'showCardBorder',
  'reviewerNameColor', 'reviewerNameWeight', 'verifiedBadgeColor',
  'dateColor', 'starColor', 'ratingIcon', 'mutedColor',
  'showReviewTitle', 'reviewTitleColor',
  'reviewTextColor', 'imageRadius', 'loadMoreBtnBgColor',
  'loadMoreBtnTextColor', 'loadMoreBtnBorderColor', 'loadMoreBtnRadius',
  'filterSortIconColor', 'filterSortBtnColor', 'selectRadius', 'productNameColor',
];

function pick(src, keys) {
  const out = {};
  for (const k of keys) if (src[k] !== undefined) out[k] = src[k];
  return out;
}

function buildGrid(brandSettings, extra = {}) {
  return { ...reviewsGridBase, ...pick(brandSettings, GRID_KEYS), ...extra };
}

const PRESET_OVERRIDES = {
  photography: {
    desktopColumns: 2, mobileColumns: 1, gridGap: 8,
    cardBorderRadius: 2, cardPadding: 20, cardShadow: 'none',
    imageRadius: 2,
    showReviewTitle: true, truncateText: false,
    showSectionHeader: true,
  },
  plants: {
    desktopColumns: 3, mobileColumns: 1, gridGap: 24,
    cardBorderRadius: 20, cardPadding: 22, cardShadow: 'none',
    imageRadius: 20,
    showReviewTitle: true, truncateText: true, maxLines: 4,
  },
  jewelry: {
    desktopColumns: 2, mobileColumns: 1, gridGap: 20,
    cardBorderRadius: 16, cardPadding: 26, cardShadow: 'subtle',
    imageRadius: 16,
    showReviewTitle: true, truncateText: false,
  },
  tech: {
    desktopColumns: 3, mobileColumns: 2, gridGap: 10,
    cardBorderRadius: 4, cardPadding: 14, cardShadow: 'none',
    imageRadius: 4,
    showReviewTitle: true, truncateText: true, maxLines: 3,
  },
  beauty: {
    desktopColumns: 2, mobileColumns: 1, gridGap: 18,
    cardBorderRadius: 24, cardPadding: 22, cardShadow: 'strong',
    imageRadius: 24,
    showReviewTitle: false, truncateText: true, maxLines: 5,
  },
  coffee: {
    desktopColumns: 3, mobileColumns: 1, gridGap: 14,
    cardBorderRadius: 8, cardPadding: 18, cardShadow: 'subtle',
    imageRadius: 8,
    showReviewTitle: true, truncateText: false,
  },
  pets: {
    desktopColumns: 4, mobileColumns: 2, gridGap: 12,
    cardBorderRadius: 18, cardPadding: 14, cardShadow: 'strong',
    imageRadius: 18,
    showReviewTitle: false, truncateText: true, maxLines: 3,
  },
  furniture: {
    desktopColumns: 2, mobileColumns: 1, gridGap: 28,
    cardBorderRadius: 0, cardPadding: 28, cardShadow: 'none',
    imageRadius: 0,
    showReviewTitle: true, truncateText: false,
  },
  drinks: {
    desktopColumns: 3, mobileColumns: 2, gridGap: 10,
    cardBorderRadius: 14, cardPadding: 16, cardShadow: 'strong',
    imageRadius: 14,
    showReviewTitle: false, truncateText: true, maxLines: 4,
  },
};

export const INSPIRATION_PRESETS_GRID = Object.fromEntries(
  INSPIRATION_TAB_ORDER.map((key) => {
    const base = INSPIRATION_PRESETS[key];
    return [key, {
      key,
      label: base.label,
      accent: base.accent,
      reviews: base.reviews,
      settings: buildGrid(base.settings, PRESET_OVERRIDES[key] || {}),
    }];
  })
);
