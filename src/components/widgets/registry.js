import ReviewsList from './ReviewsList/ReviewsList';
import {
  SettingsPanel as ReviewsListSettingsPanel,
} from './ReviewsList/settings';
import reviewsListDefaults from '../../data/widgetConfigs/reviewsList.json';
import dummyReviews from './ReviewsList/dummyReviews';

import ReviewsCompact from './ReviewsCompact/ReviewsCompact';
import {
  SettingsPanel as ReviewsCompactSettingsPanel,
} from './ReviewsCompact/settings';
import reviewsCompactDefaults from '../../data/widgetConfigs/reviewsCompact.json';

import ReviewsGrid from './ReviewsGrid/ReviewsGrid';
import {
  SettingsPanel as ReviewsGridSettingsPanel,
} from './ReviewsGrid/settings';
import reviewsGridDefaults from '../../data/widgetConfigs/reviewsGrid.json';

import { INSPIRATION_PRESETS_LIST } from '../../data/inspirationPresets/list';
import { INSPIRATION_PRESETS_COMPACT } from '../../data/inspirationPresets/compact';
import { INSPIRATION_PRESETS_GRID } from '../../data/inspirationPresets/grid';

const REVIEWS_LIST_MATRIX = [
  { key: 'Layout',       value: '2 layouts · media left/right · responsive stack at 700px' },
  { key: 'Container',    value: 'Background color + 0–80px padding rhythm' },
  { key: 'Review card',  value: 'Color, radius, padding, 3 shadows, toggleable border + width' },
  { key: 'Stars',        value: 'Filled + empty color · 10–24px size' },
  { key: 'Reviewer',     value: 'Name color/size/weight · verified badge · date toggle' },
  { key: 'Review text',  value: 'Color, size, truncate-to-lines with a max-lines slider' },
  { key: 'Images',       value: 'Thumbnail size 60–200px · radius 0–20px · toggle' },
  { key: 'Top bar',      value: 'Count color, star size, write-review CTA, filter & sort accent' },
  { key: 'Load more',    value: 'Per-page count, button bg/text, button radius' },
];

const REVIEWS_COMPACT_MATRIX = [
  { key: 'Layout',       value: 'Card grid · 1–4 desktop columns · 1–2 mobile columns' },
  { key: 'Grid',         value: 'Adjustable gap 0–48px · responsive collapse' },
  { key: 'Card',         value: 'Background, radius, padding, 3 shadows, toggleable border' },
  { key: 'Rating summary', value: 'Average number + 5-bar breakdown with click-to-filter' },
  { key: 'Top bar',      value: 'Star + count + write-review CTA (filled or outlined)' },
  { key: 'Filter & sort', value: '5-star chips · sort select · recent / highest / lowest / pictures-first' },
  { key: 'Media',        value: 'Card media thumb · radius 0–20px · max height 80–320px' },
  { key: 'Text',         value: 'Reviewer name + review text · truncate to N lines' },
  { key: 'Load more',    value: 'Initial rows × columns · button bg/text/border/radius' },
];

const REVIEWS_GRID_MATRIX = [
  { key: 'Layout',         value: 'Masonry · 1–4 desktop columns · 1–2 mobile columns' },
  { key: 'Grid',           value: 'Adjustable gap 0–48px · responsive collapse' },
  { key: 'Card',           value: 'Background, radius, padding, 3 shadows, toggleable border' },
  { key: 'Media',          value: 'Full-width images at natural aspect ratio for staggered look' },
  { key: 'Rating summary', value: 'Average number + 5-bar breakdown with click-to-filter' },
  { key: 'Top bar',        value: 'Star + count + write-review CTA (filled or outlined)' },
  { key: 'Filter & sort',  value: '5-star chips · sort select · 7 sort modes' },
  { key: 'Text',           value: 'Review title + body · truncate to N lines' },
  { key: 'Load more',      value: 'Initial rows × columns · button bg/text/border/radius' },
];

export const WIDGETS = {
  'reviews-list': {
    Component: ReviewsList,
    SettingsPanel: ReviewsListSettingsPanel,
    defaultSettings: reviewsListDefaults,
    reviews: dummyReviews,
    presets: INSPIRATION_PRESETS_LIST,
    usesInspiration: true,
    initialPresetKey: 'photography',
    featureMatrix: REVIEWS_LIST_MATRIX,
  },
  'reviews-compact': {
    Component: ReviewsCompact,
    SettingsPanel: ReviewsCompactSettingsPanel,
    defaultSettings: reviewsCompactDefaults,
    reviews: dummyReviews,
    presets: INSPIRATION_PRESETS_COMPACT,
    usesInspiration: true,
    initialPresetKey: 'photography',
    featureMatrix: REVIEWS_COMPACT_MATRIX,
  },
  'reviews-grid': {
    Component: ReviewsGrid,
    SettingsPanel: ReviewsGridSettingsPanel,
    defaultSettings: reviewsGridDefaults,
    reviews: dummyReviews,
    presets: INSPIRATION_PRESETS_GRID,
    usesInspiration: true,
    initialPresetKey: 'photography',
    featureMatrix: REVIEWS_GRID_MATRIX,
  },
};
