import styled, { css } from 'styled-components';

export const Widget = styled.div`
  display: grid;
  grid-template-columns: ${({ $layout, $isMobile }) =>
    $isMobile || $layout !== 'side-by-side' ? '1fr' : '260px 1fr'};
  gap: 2rem;
  background: ${({ $bg }) => $bg || '#fff'};
  padding: ${({ $padding }) => $padding || 32}px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 767px) {
    order: -1;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: ${({ $weight }) => $weight || 'bold'};
  font-size: ${({ $size }) => $size || 48}px;
  color: ${({ $color }) => $color || '#1a1a1a'};
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const SectionSubtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ $color }) => $color || '#6d6d6d'};
  margin: 0;
  line-height: 1.5;
`;

export const SectionAvgWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.25rem;
`;

export const SectionAvgText = styled.span`
  font-size: 0.85rem;
  color: ${({ $color }) => $color || '#1a1a1a'};
  font-weight: 500;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 0;
`;

export const TopBarRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const RatingTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ $color }) => $color || '#1a1a1a'};

  &:hover { opacity: 0.7; }
`;

export const ChevronIcon = styled.span`
  display: inline-flex;
  align-items: center;
  transition: transform 0.25s ease;
  transform: ${({ $open }) => $open ? 'rotate(180deg)' : 'rotate(0)'};
  color: ${({ $color }) => $color || '#1a1a1a'};
`;

export const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const WriteReviewBtn = styled.button`
  padding: 7px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg || 'transparent'};
  color: ${({ $color }) => $color || '#1a1a1a'};
  border: 1.5px solid ${({ $border }) => $border || '#1a1a1a'};
  border-radius: ${({ $radius }) => $radius || 6}px;
  cursor: default;
  opacity: 0.6;
`;

export const FilterSortBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 7px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: none;
  border: 1.5px solid ${({ $color }) => $color || '#1a1a1a'};
  color: ${({ $color }) => $color || '#1a1a1a'};
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.7; }
`;

export const RatingBreakdown = styled.div`
  max-height: ${({ $open }) => $open ? '400px' : '0'};
  overflow: hidden;
  opacity: ${({ $open }) => $open ? '1' : '0'};
  transition: max-height 0.35s ease, opacity 0.3s ease;
`;

export const BreakdownInner = styled.div`
  padding: 0.75rem;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 0.25rem;
`;

export const BreakdownOverall = styled.div`
  font-size: 0.85rem;
  color: ${({ $color }) => $color || '#1a1a1a'};
  padding-bottom: 0.35rem;
  border-bottom: 1px solid #eee;
`;

export const BreakdownRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  background: ${({ $active, $starColor }) => $active ? `${$starColor}20` : 'transparent'};

  &:hover { background: #f0f0f0; }
`;

export const BreakdownLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ $color }) => $color || '#1a1a1a'};
  width: 26px;
  flex-shrink: 0;
  text-align: right;
`;

export const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${({ $pct }) => $pct || 0}%;
  background: ${({ $color }) => $color || '#f5a623'};
  border-radius: 4px;
  transition: width 0.4s ease;
`;

export const BreakdownCount = styled.span`
  font-size: 0.75rem;
  color: ${({ $color }) => $color || '#6d6d6d'};
  width: 26px;
  text-align: right;
  flex-shrink: 0;
`;

export const FilterPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #eee;
  flex-wrap: wrap;
`;

export const FilterLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #555;
  flex-shrink: 0;
`;

export const FilterChipsRow = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const FilterChip = styled.button`
  padding: 4px 10px;
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  background: ${({ $active, $activeColor }) => $active ? $activeColor : 'transparent'};
  color: ${({ $active }) => $active ? '#fff' : '#555'};
  border: 1.5px solid ${({ $active, $activeColor }) => $active ? $activeColor : '#ddd'};

  &:hover {
    border-color: ${({ $activeColor }) => $activeColor || '#f5a623'};
  }
`;

export const ClearBtn = styled.button`
  padding: 4px 10px;
  font-size: 0.78rem;
  color: #888;
  background: none;
  border: 1px dashed #ccc;
  border-radius: 20px;
  cursor: pointer;

  &:hover { color: #333; border-color: #999; }
`;

export const SortSelect = styled.select`
  margin-left: auto;
  padding: 5px 10px;
  font-size: 0.8rem;
  border: 1.5px solid #ddd;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  color: #333;

  &:focus { outline: none; border-color: #aaa; }
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ReviewRowItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: ${({ $bg }) => $bg || '#fff'};
  border-radius: ${({ $radius }) => $radius || 10}px;
  border: ${({ $border, $borderColor, $borderWidth }) =>
    $border ? `${$borderWidth || 1}px solid ${$borderColor || '#e3e3e3'}` : 'none'};
  padding: ${({ $padding }) => $padding || 16}px;
  box-shadow: ${({ $shadow }) => $shadow || 'none'};
`;

export const MediaCol = styled.div`
  flex-shrink: 0;
`;

export const MediaThumb = styled.img`
  width: ${({ $size }) => $size || 80}px;
  height: ${({ $size }) => $size || 80}px;
  border-radius: ${({ $radius }) => $radius || 6}px;
  object-fit: cover;
  display: block;
`;

export const ReviewContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const ReviewerLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const ReviewerName = styled.span`
  font-weight: ${({ $weight }) => $weight || 'bold'};
  font-size: ${({ $size }) => $size || 14}px;
  color: ${({ $color }) => $color || '#1a1a1a'};
`;

export const VerifiedBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ $color }) => $color || '#1a1a1a'};
`;

export const ItemTypeBadge = styled.span`
  font-size: 0.72rem;
  color: #888;
  background: #f3f3f3;
  border-radius: 4px;
  padding: 1px 6px;
`;

export const DateLine = styled.div`
  font-size: ${({ $size }) => $size || 12}px;
  color: ${({ $color }) => $color || '#6d6d6d'};
`;

export const StarsRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewTitle = styled.div`
  font-size: ${({ $size }) => $size || 14}px;
  font-weight: 600;
  color: ${({ $color }) => $color || '#1a1a1a'};
`;

export const ReviewBody = styled.p`
  font-size: ${({ $size }) => $size || 14}px;
  color: ${({ $color }) => $color || '#1a1a1a'};
  line-height: 1.55;
  margin: 0;

  ${({ $truncate, $maxLines }) => $truncate && css`
    display: -webkit-box;
    -webkit-line-clamp: ${$maxLines || 6};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

export const InlineMediaRow = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-top: 0.15rem;
`;

export const InlineThumb = styled.img`
  width: 52px;
  height: 52px;
  border-radius: ${({ $radius }) => $radius || 4}px;
  object-fit: cover;
`;

export const ProductFooterRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.35rem;
  padding-top: 0.35rem;
  border-top: 1px solid #f0f0f0;
`;

export const ProductThumb = styled.img`
  width: 28px;
  height: 28px;
  border-radius: ${({ $radius }) => $radius || 4}px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ProductName = styled.span`
  font-size: 0.78rem;
  color: ${({ $color }) => $color || '#6d6d6d'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #999;
  font-size: 0.9rem;
`;

export const LoadMoreWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const LoadMoreBtn = styled.button`
  padding: 10px 28px;
  font-size: 0.85rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg || '#1a1a1a'};
  color: ${({ $color }) => $color || '#ffffff'};
  border: none;
  border-radius: ${({ $radius }) => $radius || 8}px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover { opacity: 0.8; }
`;
