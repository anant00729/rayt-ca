import styled, { css } from 'styled-components';

const themeTransition = css`
  transition:
    background-color 420ms ease,
    color 280ms ease,
    border-color 420ms ease,
    border-radius 420ms ease,
    padding 320ms ease,
    box-shadow 420ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Widget = styled.div`
  background: ${({ $bg }) => $bg || '#ffffff'};
  padding: ${({ $padding }) => $padding || 32}px;
  max-width: ${({ $maxWidth }) => $maxWidth || 1200}px;
  margin: 0 auto;
  ${themeTransition}
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-weight: ${({ $weight }) => $weight || 700};
  font-size: ${({ $size }) => $size || 40}px;
  color: ${({ $color }) => $color || '#1a1a1a'};
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

export const TopBarWrap = styled.div`
  position: relative;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const RatingTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;

  .rc-count {
    font-size: ${({ $size }) => $size || 14}px;
    color: ${({ $color }) => $color || '#1a1a1a'};
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .rc-chevron {
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  &[aria-expanded="true"] .rc-chevron {
    transform: rotate(180deg);
  }
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const WriteReviewBtn = styled.button`
  padding: 6px 14px;
  font-size: 13px;
  white-space: nowrap;
  border-radius: ${({ $radius }) => ($radius ?? 6)}px;
  background: ${({ $filled, $bg }) =>
    $filled ? ($bg || '#1a1a1a') : ($bg || 'transparent')};
  color: ${({ $filled, $color }) =>
    $filled ? ($color || '#fff') : ($color || '#1a1a1a')};
  border: 1px solid ${({ $filled, $bg, $border }) =>
    $filled ? ($bg || '#1a1a1a') : ($border || '#1a1a1a')};
  cursor: pointer;
  ${themeTransition}

  &:hover { opacity: 0.85; }
`;

export const SettingsWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

export const SettingsBtn = styled.button`
  background: ${({ $active, $color }) => ($active ? ($color || '#1a1a1a') : 'transparent')};
  color: ${({ $active, $color }) => ($active ? '#fff' : ($color || '#1a1a1a'))};
  border: 1.5px solid ${({ $color }) => $color || '#1a1a1a'};
  border-radius: 6px;
  padding: 7px 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  transition: background 0.15s, color 0.15s;
`;

export const SortOverlay = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  padding: 8px 0;
  min-width: 180px;
  z-index: 50;
  display: ${({ $open }) => ($open ? 'block' : 'none')};
`;

export const SortOption = styled.div`
  padding: 10px 16px;
  font-size: 13px;
  cursor: pointer;
  color: ${({ $active, $activeColor }) => ($active ? ($activeColor || '#1a1a1a') : '#374151')};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  transition: background 0.12s;

  &:hover { background: #f3f4f6; }
`;

export const Breakdown = styled.div`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '600px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: max-height 0.35s ease, opacity 0.35s ease;
  margin-bottom: ${({ $open }) => ($open ? '16px' : '0')};

  @media (min-width: 768px) {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 200;
    width: 100%;
    max-width: 450px;
    min-width: 300px;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 6px 32px rgba(0,0,0,0.14);
    padding: ${({ $open }) => ($open ? '20px 20px 16px' : '0')};
    max-height: none;
    overflow: visible;
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transform: translateY(${({ $open }) => ($open ? '0' : '-6px')});
    transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
    margin-bottom: 0;
  }
`;

export const BreakdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 16px;
`;

export const BreakdownAvg = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
`;

export const BreakdownRow = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 6px;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};
  margin: 2px 0;
  border: none;
  background: ${({ $active, $activeColor }) => ($active ? ($activeColor || 'rgba(0,0,0,0.06)') : 'transparent')};
  text-align: left;
  width: 100%;

  &:hover {
    background: ${({ $disabled, $hoverColor }) =>
      $disabled ? 'transparent' : ($hoverColor || 'rgba(0,0,0,0.06)')};
  }
`;

export const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: ${({ $bg }) => $bg || '#ebebeb'};
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${({ $pct }) => $pct || 0}%;
  background: ${({ $color }) => $color || '#888'};
  border-radius: 4px;
  transition: width 260ms ease;
`;

export const BreakdownCount = styled.span`
  font-size: 13px;
  color: #666;
  min-width: 36px;
  text-align: right;
`;

export const Grid = styled.div`
  column-count: ${({ $cols }) => $cols || 3};
  column-gap: ${({ $gap }) => $gap || 16}px;

  @media (max-width: 767px) {
    column-count: ${({ $mobileCols }) => $mobileCols || 1};
  }
`;

export const Card = styled.div`
  break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin-bottom: ${({ $gap }) => $gap || 16}px;
  background: ${({ $bg }) => $bg || '#ffffff'};
  padding: ${({ $padding }) => $padding || 16}px;
  border-radius: ${({ $radius }) => ($radius ?? 12)}px;
  border: ${({ $border, $borderColor, $borderWidth }) =>
    $border ? `${$borderWidth || 1}px solid ${$borderColor || '#e3e3e3'}` : 'none'};
  box-shadow: ${({ $shadow }) => $shadow || 'none'};
  ${themeTransition}
`;

export const MediaImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: ${({ $radius }) => ($radius ?? 8)}px;
  margin-bottom: 12px;
  object-fit: cover;
`;

export const MediaVideo = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ $radius }) => ($radius ?? 8)}px;
  margin-bottom: 12px;
  overflow: hidden;
  background: #111;
`;

export const VideoThumb = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const PlayOverlay = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.35);
  color: #fff;
  font-size: 22px;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
`;

export const ReviewerName = styled.span`
  font-size: ${({ $size }) => $size || 14}px;
  font-weight: ${({ $weight }) => $weight || 700};
  color: ${({ $color }) => $color || '#1a1a1a'};
`;

export const DateLine = styled.div`
  font-size: ${({ $size }) => $size || 12}px;
  color: ${({ $color }) => $color || '#6d6d6d'};
  margin-bottom: 6px;
`;

export const StarsRow = styled.div`
  margin-bottom: 8px;
`;

export const ReviewTitle = styled.div`
  font-size: ${({ $size }) => ($size || 14) + 1}px;
  font-weight: 600;
  color: ${({ $color }) => $color || '#1a1a1a'};
  margin-bottom: 4px;
  line-height: 1.4;
`;

export const ReviewText = styled.div`
  font-size: ${({ $size }) => $size || 14}px;
  color: ${({ $color }) => $color || '#4a4a4a'};
  line-height: 1.55;
  margin-bottom: 8px;

  ${({ $truncate, $maxLines }) => $truncate && css`
    display: -webkit-box;
    -webkit-line-clamp: ${$maxLines || 4};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

export const ItemType = styled.div`
  font-size: ${({ $size }) => $size || 12}px;
  color: ${({ $color }) => $color || '#6d6d6d'};
  margin-bottom: 8px;
`;

export const ProductFooter = styled.div`
  border-top: 1px solid #eee;
  margin-top: 8px;
  padding-top: 10px;
`;

export const ProductLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

export const ProductThumb = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: ${({ $radius }) => ($radius ?? 4)}px;
  flex-shrink: 0;
`;

export const ProductName = styled.span`
  font-size: 13px;
  color: ${({ $color }) => $color || '#6d6d6d'};
`;

export const LoadMoreWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LoadMoreBtn = styled.button`
  background: ${({ $bg }) => $bg || 'transparent'};
  color: ${({ $color }) => $color || '#1a1a1a'};
  border: 1px solid ${({ $border }) => $border || '#1a1a1a'};
  border-radius: ${({ $radius }) => ($radius ?? 6)}px;
  padding: 10px 28px;
  font-size: 14px;
  cursor: pointer;
  ${themeTransition}

  &:hover { opacity: 0.85; }
`;

export const EmptyState = styled.div`
  padding: 40px;
  text-align: center;
  color: #6d6d6d;
  font-size: 14px;
`;
