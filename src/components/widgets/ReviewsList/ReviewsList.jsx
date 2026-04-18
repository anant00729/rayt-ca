import { useState, useMemo } from 'react';
import Stars from './Stars';
import {
  Widget, SectionHeader, SectionTitle, SectionSubtitle,
  SectionAvgWrap, SectionAvgText, MainContent,
  TopBarRow, RatingTrigger, ChevronIcon, TopBarActions,
  WriteReviewBtn, FilterSortBtn, RatingBreakdown, BreakdownInner,
  BreakdownOverall, BreakdownRow, BreakdownLabel, BarTrack, BarFill,
  BreakdownCount, FilterPanel, FilterLabel, FilterChipsRow, FilterChip,
  ClearBtn, SortSelect, ReviewList, ReviewRowItem, MediaCol, MediaThumb,
  ReviewContent, ReviewerLine, ReviewerName, VerifiedBadge, ItemTypeBadge,
  DateLine, StarsRow, ReviewTitle, ReviewBody, InlineMediaRow, InlineThumb,
  ProductFooterRow, ProductThumb, ProductName, EmptyState,
  LoadMoreWrap, LoadMoreBtn,
} from './ReviewsList.style';
import {
  computeRatingStats, sortReviews, filterReviews, parseMedia, formatDate, shadowVal,
} from './helpers';

function ChevronSvg({ open, color }) {
  return (
    <ChevronIcon $open={open} $color={color}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </ChevronIcon>
  );
}

function FilterIconSvg() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function VerifiedCheckSvg() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ReviewsList({ settings = {}, reviews = [] }) {
  const s = settings;

  const [sortBy, setSortBy] = useState(s.defaultSort || 'recent');
  const [activeFilters, setActiveFilters] = useState([]);
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(s.reviewsPerPage || 10);

  const stats = useMemo(() => computeRatingStats(reviews), [reviews]);

  const processedReviews = useMemo(() => {
    const filtered = filterReviews(reviews, activeFilters);
    return sortReviews(filtered, sortBy);
  }, [reviews, activeFilters, sortBy]);

  const visibleReviews = processedReviews.slice(0, visibleCount);
  const hasMore = visibleCount < processedReviews.length;

  const toggleFilter = (star) => {
    setActiveFilters(prev =>
      prev.includes(star) ? prev.filter(x => x !== star) : [...prev, star]
    );
    setVisibleCount(s.reviewsPerPage || 10);
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setVisibleCount(s.reviewsPerPage || 10);
  };

  return (
    <Widget $layout={s.layout} $bg={s.containerBgColor} $padding={s.containerPadding}>

      {s.showSectionHeader && (
        <SectionHeader>
          <SectionTitle
            $color={s.sectionTitleColor}
            $size={s.sectionTitleSize}
            $weight={s.sectionTitleWeight}
          >
            {s.sectionTitleText}
          </SectionTitle>

          {s.showSectionSubtitle && (
            <SectionSubtitle $color={s.sectionSubtitleColor}>
              {s.sectionSubtitleText}
            </SectionSubtitle>
          )}

          {s.showSectionAvgRating && stats.total > 0 && (
            <SectionAvgWrap>
              <Stars
                rating={Math.round(parseFloat(stats.avg))}
                count={5}
                size={s.topBarStarSize || 18}
                filled={s.starColor}
                muted={s.mutedColor}
                icon={s.ratingIcon}
              />
              <SectionAvgText $color={s.sectionAvgTextColor}>
                {stats.avg} ({stats.total} reviews)
              </SectionAvgText>
            </SectionAvgWrap>
          )}
        </SectionHeader>
      )}

      <MainContent>
        {s.showTopBar && (
          <>
            <TopBarRow>
              <RatingTrigger
                $color={s.topBarCountColor}
                onClick={() => setBreakdownOpen(o => !o)}
                aria-expanded={breakdownOpen}
              >
                <span style={{ color: s.starColor, fontSize: (s.topBarStarSize || 18) + 'px', lineHeight: 1 }}>
                  ★
                </span>
                <span>{stats.avg} · {stats.total} Reviews</span>
                <ChevronSvg open={breakdownOpen} color={s.topBarCountColor} />
              </RatingTrigger>

              <TopBarActions>
                {s.showWriteReviewBtn && (
                  <WriteReviewBtn
                    $bg={s.writeReviewBtnBgColor}
                    $color={s.writeReviewBtnTextColor}
                    $border={s.writeReviewBtnBorderColor}
                    $radius={s.writeReviewBtnRadius}
                    title="Showcase only — write review not available"
                  >
                    Write a review
                  </WriteReviewBtn>
                )}
                {s.showFilterSort && (
                  <FilterSortBtn
                    $color={s.filterSortBtnColor}
                    onClick={() => setFilterPanelOpen(o => !o)}
                    aria-expanded={filterPanelOpen}
                  >
                    <FilterIconSvg />
                    Filter &amp; Sort
                  </FilterSortBtn>
                )}
              </TopBarActions>
            </TopBarRow>

            <RatingBreakdown $open={breakdownOpen} aria-hidden={!breakdownOpen}>
              <BreakdownInner>
                <BreakdownOverall $color={s.sectionAvgTextColor}>
                  Overall: <strong>{stats.avg}</strong>
                </BreakdownOverall>
                {[5, 4, 3, 2, 1].map(star => (
                  <BreakdownRow
                    key={star}
                    onClick={() => toggleFilter(star)}
                    $active={activeFilters.includes(star)}
                    $starColor={s.starColor}
                    title={`Filter by ${star} stars`}
                  >
                    <BreakdownLabel $color={s.topBarCountColor}>{star} ★</BreakdownLabel>
                    <BarTrack>
                      <BarFill
                        $pct={stats.total > 0 ? ((stats.counts[star] || 0) / stats.total) * 100 : 0}
                        $color={s.starColor}
                      />
                    </BarTrack>
                    <BreakdownCount $color={s.dateColor}>({stats.counts[star] || 0})</BreakdownCount>
                  </BreakdownRow>
                ))}
              </BreakdownInner>
            </RatingBreakdown>
          </>
        )}

        {s.showFilterSort && filterPanelOpen && (
          <FilterPanel>
            <FilterLabel>Filter by:</FilterLabel>
            <FilterChipsRow>
              {[5, 4, 3, 2, 1].map(star => (
                <FilterChip
                  key={star}
                  $active={activeFilters.includes(star)}
                  $activeColor={s.starColor}
                  onClick={() => toggleFilter(star)}
                >
                  {star} ★
                </FilterChip>
              ))}
              {activeFilters.length > 0 && (
                <ClearBtn onClick={clearFilters}>Clear</ClearBtn>
              )}
            </FilterChipsRow>
            <SortSelect
              value={sortBy}
              onChange={e => { setSortBy(e.target.value); setVisibleCount(s.reviewsPerPage || 10); }}
            >
              <option value="recent">Most recent</option>
              <option value="highest">Highest rated</option>
              <option value="lowest">Lowest rated</option>
              <option value="pictures-first">Pictures first</option>
              <option value="only-pictures">Pictures only</option>
            </SortSelect>
          </FilterPanel>
        )}

        {processedReviews.length === 0 ? (
          <EmptyState>No reviews match your filters.</EmptyState>
        ) : (
          <ReviewList>
            {visibleReviews.map(review => {
              const media = parseMedia(review);
              const hasMedia = s.showImages && media.length > 0;
              const thumb = hasMedia ? media[0] : null;
              const extraMedia = hasMedia && media.length > 1 ? media.slice(1, 4) : [];

              return (
                <ReviewRowItem
                  key={review.id}
                  $bg={s.cardBgColor}
                  $radius={s.cardBorderRadius}
                  $border={s.showCardBorder}
                  $borderColor={s.cardBorderColor}
                  $borderWidth={s.cardBorderWidth}
                  $padding={s.cardPadding}
                  $shadow={shadowVal(s.cardShadow)}
                >
                  {hasMedia && s.mediaPosition === 'left' && (
                    <MediaCol>
                      <MediaThumb
                        src={thumb.thumb || thumb.src}
                        alt=""
                        loading="lazy"
                        $radius={s.imageRadius}
                        $size={s.imageThumbnailSize}
                      />
                    </MediaCol>
                  )}

                  <ReviewContent>
                    <ReviewerLine>
                      <ReviewerName
                        $color={s.reviewerNameColor}
                        $size={s.reviewerNameSize}
                        $weight={s.reviewerNameWeight}
                      >
                        {review.reviewerName}
                      </ReviewerName>
                      {review.verified && s.showVerifiedBadge && (
                        <VerifiedBadge $color={s.verifiedBadgeColor}>
                          <VerifiedCheckSvg />
                          Verified
                        </VerifiedBadge>
                      )}
                      {review.itemType && (
                        <ItemTypeBadge>{review.itemType}</ItemTypeBadge>
                      )}
                    </ReviewerLine>

                    {s.showDate && (
                      <DateLine $color={s.dateColor} $size={s.dateSize}>
                        {formatDate(review.createdAt)}
                      </DateLine>
                    )}

                    <StarsRow>
                      <Stars
                        rating={review.rating}
                        count={5}
                        size={s.starSize}
                        filled={s.starColor}
                        muted={s.mutedColor}
                        icon={s.ratingIcon}
                      />
                    </StarsRow>

                    {review.reviewTitle && (
                      <ReviewTitle $color={s.reviewTextColor} $size={s.reviewTextSize}>
                        {review.reviewTitle}
                      </ReviewTitle>
                    )}

                    <ReviewBody
                      $color={s.reviewTextColor}
                      $size={s.reviewTextSize}
                      $truncate={s.truncateText}
                      $maxLines={s.maxLines}
                    >
                      {review.comment}
                    </ReviewBody>

                    {extraMedia.length > 0 && (
                      <InlineMediaRow>
                        {extraMedia.map((m, i) => (
                          <InlineThumb
                            key={i}
                            src={m.thumb || m.src}
                            alt=""
                            loading="lazy"
                            $radius={s.imageRadius}
                          />
                        ))}
                      </InlineMediaRow>
                    )}

                    {s.showProductInfo && review.productTitle && (
                      <ProductFooterRow>
                        {review.productImageUrl && (
                          <ProductThumb
                            src={review.productImageUrl}
                            alt={review.productTitle}
                            $radius={4}
                          />
                        )}
                        <ProductName $color={s.dateColor}>{review.productTitle}</ProductName>
                      </ProductFooterRow>
                    )}
                  </ReviewContent>

                  {hasMedia && s.mediaPosition !== 'left' && (
                    <MediaCol>
                      <MediaThumb
                        src={thumb.thumb || thumb.src}
                        alt=""
                        loading="lazy"
                        $radius={s.imageRadius}
                        $size={s.imageThumbnailSize}
                      />
                    </MediaCol>
                  )}
                </ReviewRowItem>
              );
            })}
          </ReviewList>
        )}

        {s.showLoadMore && hasMore && (
          <LoadMoreWrap>
            <LoadMoreBtn
              $bg={s.loadMoreBtnBgColor}
              $color={s.loadMoreBtnTextColor}
              $radius={s.loadMoreBtnRadius}
              onClick={() => setVisibleCount(c => c + (s.reviewsPerPage || 10))}
            >
              Show more reviews
            </LoadMoreBtn>
          </LoadMoreWrap>
        )}
      </MainContent>
    </Widget>
  );
}
