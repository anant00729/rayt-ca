import styled from 'styled-components';
import { tokens, accentMap } from '../../styles/tokens';

/* ── Page ── */
export const Page = styled.div`
  min-height: 100vh;
  background: ${tokens.paper};
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

/* ── Announcement Bar ── */
export const AnnouncementWrapper = styled.div`
  background: linear-gradient(135deg, ${tokens.ink900} 0%, ${tokens.sky700} 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.65rem 1.5rem;
  font-size: 0.88rem;
  position: relative;
  z-index: 101;
`;

export const AnnouncementText = styled.span`
  flex: 1;
  text-align: center;
  font-weight: 500;
`;

export const AnnouncementCTA = styled.a`
  background: ${tokens.mint500};
  color: #0E1B2B;
  padding: 0.38rem 1rem;
  border-radius: ${tokens.radiusPill};
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  transition: opacity 0.2s, transform 0.2s;

  &:hover { opacity: 0.9; transform: translateY(-1px); }
`;

export const DismissButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  line-height: 1;

  &:hover { opacity: 1; }
`;

/* ── Stacking Section (retained, restyled with cool palette) ── */
export const StackingWrapper = styled.section`
  position: relative;
  padding: 4rem 0 0;
  background: linear-gradient(180deg, ${tokens.paper} 0%, ${tokens.paper2} 100%);
`;

export const StackingHeader = styled.div`
  text-align: center;
  padding: 0 1.5rem 3rem;
  position: sticky;
  top: 6vh;
  z-index: 0;
  max-width: 760px;
  margin: 0 auto;
`;

export const StackingEyebrow = styled.span`
  display: inline-block;
  color: ${tokens.sky700};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const StackingHeadline = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0 0 0.75rem;
`;

export const StackingSubtitle = styled.p`
  font-size: 1.02rem;
  color: ${tokens.ink500};
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const CardsContainer = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const StackingCard = styled.div`
  position: sticky;
  top: 140px;
  z-index: ${({ $index }) => $index + 1};
  background: ${({ $colorKey }) => accentMap[$colorKey]?.bg || tokens.sky50};
  color: ${tokens.ink900};
  border: 1px solid ${({ $colorKey }) => accentMap[$colorKey]?.edge || tokens.sky200};
  border-radius: ${tokens.radiusLg};
  padding: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  min-height: 420px;
  margin-bottom: 2rem;
  transition: transform 0.4s ease;
  will-change: transform;
  box-shadow: ${tokens.shadowMd};

  &:last-child { margin-bottom: 0; }

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    grid-template-columns: 1fr;
    padding: 2rem;
    min-height: auto;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 900;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    line-height: 1.12;
    letter-spacing: -0.02em;
    margin: 0;
    color: ${tokens.ink900};
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${tokens.ink500};
    margin: 0;
  }
`;

export const CardCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  align-self: flex-start;
  background: #fff;
  color: ${tokens.ink900};
  padding: 0.7rem 1.3rem;
  border-radius: ${tokens.radiusPill};
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  border: 1px solid ${tokens.border};
  box-shadow: ${tokens.shadowSm};
  margin-top: 0.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover { transform: translateY(-2px); border-color: ${tokens.sky200}; }
`;

export const CardImagePlaceholder = styled.div`
  background: ${({ $colorKey }) => accentMap[$colorKey]?.tint || tokens.sky100};
  border-radius: ${tokens.radius};
  aspect-ratio: 4 / 3;
  width: 100%;
  border: 1px solid ${({ $colorKey }) => accentMap[$colorKey]?.edge || tokens.sky200};

  @media (max-width: 768px) {
    aspect-ratio: 16 / 10;
  }
`;

export const StackingBottomSpacer = styled.div`
  height: 30vh;

  @media (max-width: 768px) {
    height: 0;
  }
`;
