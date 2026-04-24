import styled, { keyframes } from 'styled-components';
import { tokens } from '../../styles/tokens';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const HeroSection = styled.section`
  position: relative;
  padding: 0 1.75rem 120px;
`;

/* Hero text is pinned in place — only fades out as the widget scrolls over it. */
export const HeroText = styled.div`
  position: sticky;
  top: 104px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.375rem;
  text-align: center;
  max-width: 880px;
  margin: 0 auto;
  padding: 2.5rem 0 1.5rem;
  animation: ${fadeUp} 600ms ease;
  will-change: opacity, filter;
  pointer-events: auto;
`;

export const EyebrowPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  color: ${tokens.sky700};
  padding: 0.4375rem 0.875rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1px solid ${tokens.sky100};
  box-shadow: ${tokens.shadowSm};
`;

export const EyebrowStar = styled.span`
  color: ${tokens.mint500};
`;

export const HeadlineH1 = styled.h1`
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: ${tokens.ink900};
  text-wrap: balance;
`;

export const HeadlineAccent = styled.span`
  background: linear-gradient(135deg, ${tokens.sky700} 0%, ${tokens.mint500} 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const CtaRowWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
  margin-top: 0.375rem;
  justify-content: center;
`;

export const PrimaryBtn = styled.button`
  background: ${tokens.ink900};
  color: #fff;
  border: none;
  border-radius: ${tokens.radiusPill};
  padding: 0.875rem 1.625rem;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  box-shadow: ${tokens.shadowSky};
  transition: box-shadow 200ms ease, transform 150ms ease;

  &:hover {
    box-shadow: 0 18px 44px rgba(46, 111, 176, 0.36);
    transform: translateY(-1px);
  }
`;

export const SecondaryBtn = styled.button`
  background: #fff;
  color: ${tokens.ink900};
  border: 1px solid ${tokens.borderStrong};
  border-radius: ${tokens.radiusPill};
  padding: 0.875rem 1.625rem;
  font-size: 0.9375rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 150ms ease;

  &:hover {
    background: ${tokens.paper2};
  }
`;

/* Widget scrolls in normal flow. z-index higher than hero text so it visually
   covers the text as the page scrolls. */
export const WidgetBlock = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1080px;
  margin: 3.5rem auto 0;
  padding-top: 0.5rem;
  filter: drop-shadow(0 6px 16px rgba(18, 52, 88, 0.08))
          drop-shadow(0 2px 6px rgba(18, 52, 88, 0.05));
`;

export const TabBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const TabTrack = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: ${tokens.radiusPill};
  box-shadow: 0 1px 4px rgba(18, 52, 88, 0.08), 0 0 0 1px rgba(14, 27, 43, 0.05);
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PillIndicator = styled.div`
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 0;
  background: #fff;
  border-radius: ${tokens.radiusPill};
  box-shadow: 0 1px 3px rgba(18, 52, 88, 0.08);
  transition: transform 420ms cubic-bezier(0.4, 0, 0.2, 1),
              width 420ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
  pointer-events: none;
`;

export const PillTab = styled.button`
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: ${p => p.$active ? 700 : 500};
  color: ${p => p.$active ? tokens.sky700 : tokens.ink500};
  font-family: inherit;
  white-space: nowrap;
  transition: color 180ms ease;
  line-height: 1;
`;

/* Reserves the bold-weight width for each label regardless of active state,
   so the tab's layout never shifts when the active tab changes. */
export const TabLabel = styled.span`
  display: inline-block;
  position: relative;
  margin-right: 4px;

  &::after {
    content: attr(data-label);
    display: block;
    font-weight: 700;
    height: 0;
    visibility: hidden;
    overflow: hidden;
    pointer-events: none;
  }
`;

export const AutoPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusPill};
  cursor: pointer;
  font-size: 0.6875rem;
  font-weight: 600;
  color: ${tokens.ink500};
  font-family: inherit;
  backdrop-filter: blur(6px);

  &:hover {
    background: #fff;
  }
`;

export const WidgetInner = styled.div`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
`;

export const WidgetFade = styled.div`
  animation: ${fadeUp} 500ms ease;
`;

export const CaptionRow = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  color: ${tokens.ink500};
`;

export const CaptionLeft = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
`;
