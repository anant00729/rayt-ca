import listBase from '../widgetConfigs/reviewsList.json';
import { INSPIRATION_PRESETS, INSPIRATION_TAB_ORDER } from './index';

const LIST_KEYS = [
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
  'layout', 'mediaPosition',
];

function pick(src, keys) {
  const out = {};
  for (const k of keys) if (src[k] !== undefined) out[k] = src[k];
  return out;
}

function buildList(brandSettings, extra = {}) {
  return { ...listBase, ...pick(brandSettings, LIST_KEYS), ...extra };
}

// Each preset tunes list-specific numbers: media position, thumbnail size,
// card radius (kept consistent with image radius per tab), padding, shadow.
const PRESET_OVERRIDES = {
  photography: {
    layout: 'side-by-side', mediaPosition: 'right',
    cardBorderRadius: 2, cardPadding: 24, cardShadow: 'none',
    imageRadius: 2, imageThumbnailSize: 140,
    showSectionHeader: true,
  },
  jewelry: {
    layout: 'side-by-side', mediaPosition: 'left',
    cardBorderRadius: 12, cardPadding: 20, cardShadow: 'subtle',
    imageRadius: 12, imageThumbnailSize: 110,
  },
  pets: {
    layout: 'side-by-side', mediaPosition: 'right',
    cardBorderRadius: 18, cardPadding: 18, cardShadow: 'strong',
    imageRadius: 18, imageThumbnailSize: 100,
  },
  furniture: {
    layout: 'side-by-side', mediaPosition: 'left',
    cardBorderRadius: 0, cardPadding: 28, cardShadow: 'none',
    imageRadius: 0, imageThumbnailSize: 160,
  },
  coffee: {
    layout: 'side-by-side', mediaPosition: 'right',
    cardBorderRadius: 8, cardPadding: 18, cardShadow: 'subtle',
    imageRadius: 8, imageThumbnailSize: 120,
  },
  tech: {
    layout: 'side-by-side', mediaPosition: 'right',
    cardBorderRadius: 6, cardPadding: 14, cardShadow: 'subtle',
    imageRadius: 6, imageThumbnailSize: 90,
  },
  plants: {
    layout: 'side-by-side', mediaPosition: 'left',
    cardBorderRadius: 20, cardPadding: 22, cardShadow: 'none',
    imageRadius: 20, imageThumbnailSize: 130,
  },
  drinks: {
    layout: 'side-by-side', mediaPosition: 'right',
    cardBorderRadius: 14, cardPadding: 14, cardShadow: 'strong',
    imageRadius: 14, imageThumbnailSize: 100,
  },
  beauty: {
    layout: 'side-by-side', mediaPosition: 'left',
    cardBorderRadius: 24, cardPadding: 20, cardShadow: 'subtle',
    imageRadius: 24, imageThumbnailSize: 120,
  },
};

export const INSPIRATION_PRESETS_LIST = Object.fromEntries(
  INSPIRATION_TAB_ORDER.map((key) => {
    const base = INSPIRATION_PRESETS[key];
    return [key, {
      key,
      label: base.label,
      accent: base.accent,
      reviews: base.reviews,
      settings: buildList(base.settings, PRESET_OVERRIDES[key] || {}),
    }];
  })
);
