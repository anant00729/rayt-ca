import { useEffect, useMemo, useRef, useState } from 'react';
import Stars from '../ReviewsList/Stars';
import {
  computeRatingStats, sortReviews, filterReviews, parseMedia, formatDate, shadowVal,
} from '../ReviewsList/helpers';
import {
  Widget, SectionTitle, TopBarWrap, TopBar, RatingTrigger, TopBarRight,
  WriteReviewBtn, SettingsWrap, SettingsBtn, SortOverlay, SortOption,
  Breakdown, BreakdownHeader, BreakdownAvg, BreakdownRow, BarTrack, BarFill, BreakdownCount,
  Grid, Card, MediaImg, MediaVideo, VideoThumb, PlayOverlay,
  NameRow, ReviewerName, DateLine, StarsRow, ReviewTitle, ReviewText,
  ItemType, ProductFooter, ProductLink, ProductThumb, ProductName,
  LoadMoreWrap, LoadMoreBtn, EmptyState,
} from './ReviewsGrid.style';

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most recent' },
  { value: 'highest', label: 'Highest rating' },
  { value: 'lowest', label: 'Lowest rating' },
  { value: 'only-pictures', label: 'Only pictures' },
  { value: 'pictures-first', label: 'Pictures first' },
  { value: 'videos-first', label: 'Videos first' },
  { value: 'helpful', label: 'Most helpful' },
];

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="8" cy="6" r="2" fill="currentColor" />
      <circle cx="16" cy="12" r="2" fill="currentColor" />
      <circle cx="10" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg className="rc-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
      <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VerifiedCircle({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }} aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={color || '#1a8cff'} />
      <polyline points="5,10 9,14 15,7" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function hexToRgba(hex, alpha) {
  if (!hex || typeof hex !== 'string' || hex[0] !== '#' || hex.length !== 7) {
    return `rgba(0,0,0,${alpha})`;
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function ReviewsGrid({ settings = {}, reviews = [], isMobile = false }) {
  const s = settings;
  const ratingIcon = s.ratingIcon || 'star_rounded';
  const starColor = s.starColor || '#f5a623';
  const mutedColor = s.mutedColor || '#d1d5db';
  const filterBtnColor = s.filterSortIconColor || s.filterSortBtnColor || '#1a1a1a';

  const [sortBy, setSortBy] = useState(s.defaultSort || 'recent');
  const [activeFilters, setActiveFilters] = useState([]);
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const settingsRef = useRef(null);

  const cols = Number(isMobile ? (s.mobileColumns || 1) : (s.desktopColumns || 3)) || 1;
  const mobileCols = Number(s.mobileColumns || 1);
  const initialVisible = cols * (Number(s.initialRows) || 2);
  const [visibleCount, setVisibleCount] = useState(initialVisible);

  useEffect(() => { setVisibleCount(initialVisible); }, [initialVisible]);

  useEffect(() => {
    if (!sortOpen) return undefined;
    const handler = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [sortOpen]);

  const stats = useMemo(() => computeRatingStats(reviews), [reviews]);

  const processed = useMemo(() => {
    const filtered = filterReviews(reviews, activeFilters);
    return sortReviews(filtered, sortBy);
  }, [reviews, activeFilters, sortBy]);

  const visible = processed.slice(0, visibleCount);
  const hasMore = visibleCount < processed.length;

  const toggleFilter = (star) => {
    setActiveFilters((prev) => (prev.includes(star) ? prev.filter((x) => x !== star) : [...prev, star]));
    setVisibleCount(initialVisible);
  };

  const pickSort = (value) => {
    setSortBy(value);
    setSortOpen(false);
    setVisibleCount(initialVisible);
  };

  const activeStarBg = hexToRgba(starColor, 0.15);
  const writeFilled = s.writeReviewBtnStyle === 'filled';
  const gap = s.gridGap ?? 16;

  return (
    <Widget
      $bg={s.containerBgColor}
      $padding={s.containerPadding}
      $maxWidth={s.containerMaxWidth}
    >
      {s.showSectionHeader && (
        <SectionTitle $color={s.sectionTitleColor} $size={s.sectionTitleSize} $weight={s.sectionTitleWeight}>
          {s.sectionTitleText || 'Reviews'}
        </SectionTitle>
      )}

      {s.showTopBar !== false && (
        <TopBarWrap>
          <TopBar>
            <RatingTrigger
              type="button"
              aria-expanded={breakdownOpen}
              onClick={() => setBreakdownOpen((o) => !o)}
              $color={s.topBarCountColor}
              $size={s.topBarCountSize}
            >
              <Stars
                rating={Math.round(parseFloat(stats.avg))}
                count={5}
                size={s.topBarStarSize || 18}
                filled={starColor}
                muted={mutedColor}
                icon={ratingIcon}
              />
              <span className="rc-count">
                {stats.total} Reviews
                <Chevron />
              </span>
            </RatingTrigger>

            <TopBarRight>
              {s.showWriteReviewBtn && (
                <WriteReviewBtn
                  type="button"
                  $filled={writeFilled}
                  $bg={s.writeReviewBtnBgColor}
                  $color={s.writeReviewBtnTextColor}
                  $border={s.writeReviewBtnBorderColor}
                  $radius={s.writeReviewBtnRadius}
                  onClick={(e) => e.preventDefault()}
                  title="Showcase only"
                >
                  {s.writeReviewBtnText || 'Write a review'}
                </WriteReviewBtn>
              )}
              {s.showFilterSort !== false && (
                <SettingsWrap ref={settingsRef}>
                  <SettingsBtn
                    type="button"
                    $active={sortOpen}
                    $color={filterBtnColor}
                    onClick={(e) => { e.stopPropagation(); setSortOpen((o) => !o); }}
                    aria-label="Sort and filter"
                  >
                    <SettingsIcon />
                  </SettingsBtn>
                  <SortOverlay $open={sortOpen}>
                    {SORT_OPTIONS.map((opt) => (
                      <SortOption
                        key={opt.value}
                        $active={sortBy === opt.value}
                        $activeColor={filterBtnColor}
                        onClick={() => pickSort(opt.value)}
                      >
                        {opt.label}
                      </SortOption>
                    ))}
                  </SortOverlay>
                </SettingsWrap>
              )}
            </TopBarRight>
          </TopBar>

          {s.showRatingBreakdown !== false && (
            <Breakdown $open={breakdownOpen}>
              <BreakdownHeader>
                <Stars rating={1} count={1} size={40} filled={starColor} muted={starColor} icon={ratingIcon} />
                <BreakdownAvg>{stats.avg}</BreakdownAvg>
              </BreakdownHeader>
              {[5, 4, 3, 2, 1].map((n) => {
                const count = stats.counts[n] || 0;
                const pct = stats.total ? (count / stats.total) * 100 : 0;
                const disabled = count === 0;
                const isActive = activeFilters.includes(n);
                return (
                  <BreakdownRow
                    key={n}
                    type="button"
                    $active={isActive}
                    $disabled={disabled}
                    $activeColor={activeStarBg}
                    $hoverColor={activeStarBg}
                    onClick={() => { if (!disabled) toggleFilter(n); }}
                  >
                    <Stars rating={n} count={5} size={16} filled={starColor} muted={mutedColor} icon={ratingIcon} />
                    <BarTrack $bg={s.breakdownBarBgColor}>
                      <BarFill $pct={pct} $color={s.breakdownBarColor || '#888'} />
                    </BarTrack>
                    <BreakdownCount>({count})</BreakdownCount>
                  </BreakdownRow>
                );
              })}
            </Breakdown>
          )}
        </TopBarWrap>
      )}

      {processed.length === 0 ? (
        <EmptyState>No reviews match your filters.</EmptyState>
      ) : (
        <Grid $cols={cols} $mobileCols={mobileCols} $gap={gap}>
          {visible.map((review) => {
            const media = parseMedia(review);
            const firstMedia = media[0];
            const hasMedia = s.showImages && firstMedia;
            const isVideo = hasMedia && (firstMedia.type === 'video' || firstMedia.type === 'youtube');
            return (
              <Card
                key={review.id}
                $bg={s.cardBgColor}
                $padding={s.cardPadding}
                $radius={s.cardBorderRadius}
                $border={s.showCardBorder !== false}
                $borderColor={s.cardBorderColor}
                $borderWidth={s.cardBorderWidth}
                $shadow={shadowVal(s.cardShadow)}
                $gap={gap}
              >
                {hasMedia && (
                  isVideo ? (
                    <MediaVideo $radius={s.imageRadius}>
                      <VideoThumb
                        src={firstMedia.thumb || firstMedia.src}
                        alt=""
                        loading="lazy"
                      />
                      <PlayOverlay>&#9658;</PlayOverlay>
                    </MediaVideo>
                  ) : (
                    <MediaImg
                      src={firstMedia.thumb || firstMedia.src}
                      alt=""
                      loading="lazy"
                      $radius={s.imageRadius}
                    />
                  )
                )}

                <NameRow>
                  <ReviewerName
                    $color={s.reviewerNameColor}
                    $size={s.reviewerNameSize}
                    $weight={s.reviewerNameWeight}
                  >
                    {review.reviewerName}
                  </ReviewerName>
                  {s.showVerifiedBadge && review.verified !== false && (
                    <VerifiedCircle color={s.verifiedBadgeColor} />
                  )}
                </NameRow>

                {s.showDate && review.createdAt && (
                  <DateLine $color={s.dateColor} $size={s.dateSize}>
                    {formatDate(review.createdAt)}
                  </DateLine>
                )}

                <StarsRow>
                  <Stars
                    rating={review.rating}
                    count={5}
                    size={s.starSize || 14}
                    filled={starColor}
                    muted={mutedColor}
                    icon={ratingIcon}
                  />
                </StarsRow>

                {s.showReviewTitle && review.reviewTitle && (
                  <ReviewTitle $color={s.reviewTitleColor} $size={s.reviewTextSize}>
                    {review.reviewTitle}
                  </ReviewTitle>
                )}

                <ReviewText
                  $color={s.reviewTextColor}
                  $size={s.reviewTextSize}
                  $truncate={s.truncateText}
                  $maxLines={s.maxLines}
                >
                  {review.comment}
                </ReviewText>

                {s.showItemType && review.itemType && (
                  <ItemType $color={s.itemTypeColor} $size={s.itemTypeSize}>
                    Item type:<br />{review.itemType}
                  </ItemType>
                )}

                {s.showProductInfo && review.productTitle && (
                  <ProductFooter>
                    <ProductLink>
                      {review.productImageUrl && (
                        <ProductThumb
                          src={review.productImageUrl}
                          alt={review.productTitle}
                          $radius={s.productImageRadius}
                        />
                      )}
                      <ProductName $color={s.productNameColor}>
                        {review.productTitle}
                      </ProductName>
                    </ProductLink>
                  </ProductFooter>
                )}
              </Card>
            );
          })}
        </Grid>
      )}

      {s.showLoadMore && hasMore && (
        <LoadMoreWrap>
          <LoadMoreBtn
            type="button"
            $bg={s.loadMoreBtnBgColor}
            $color={s.loadMoreBtnTextColor}
            $border={s.loadMoreBtnBorderColor}
            $radius={s.loadMoreBtnRadius}
            onClick={() => setVisibleCount((c) => c + cols * (Number(s.initialRows) || 2))}
          >
            {s.loadMoreBtnText || 'Show more reviews'}
          </LoadMoreBtn>
        </LoadMoreWrap>
      )}
    </Widget>
  );
}
