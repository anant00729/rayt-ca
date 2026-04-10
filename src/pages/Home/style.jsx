import styled from 'styled-components';

/* ── Page ── */
export const Page = styled.div`
  min-height: 100vh;
  background: #EFF6F3;
  color: #1a1a1a;
`;

/* ── Announcement Bar ── */
export const AnnouncementWrapper = styled.div`
  background: linear-gradient(135deg, #1B3A2D 0%, #2d5a45 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.65rem 1.5rem;
  font-size: 0.9rem;
  position: relative;
  z-index: 101;
`;

export const AnnouncementText = styled.span`
  flex: 1;
  text-align: center;
`;

export const AnnouncementCTA = styled.a`
  background: #9B7BF4;
  color: #fff;
  padding: 0.35rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }
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

/* ── Hero ── */
export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10rem 1.5rem 6rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 4rem;
  }
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  background: #fff;
`;

export const HeroHeadline = styled.h1`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 600;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: 1.05;
  color: #1a1a1a;
  margin: 0 0 1.5rem;
  letter-spacing: 0.01em;
`;

export const HeroSubtitle = styled.p`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: #555;
  margin: 0 0 2rem;
`;

export const HeroCTA = styled.a`
  background: #1a1a1a;
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover { background: #333; }
`;

/* ── Stacking Section ── */
export const StackingWrapper = styled.section`
  position: relative;
  padding: 4rem 0 0;
`;

export const StackingHeadline = styled.div`
  text-align: center;
  padding: 0 1.5rem 3rem;
  position: sticky;
  top: 6vh;
  z-index: 0;

  h2 {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 900;
    font-size: clamp(2rem, 4vw, 3.5rem);
    color: #1a1a1a;
    margin: 0 0 0.75rem;
  }

  p {
    font-size: 1.05rem;
    color: #555;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const CardsContainer = styled.div`
  position: relative;
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CARD_COLORS = {
  salmon: { bg: '#E6F0FF', text: '#1a3a5c', placeholder: '#C5D9F7' },
  darkGreen: { bg: '#E0F5EE', text: '#1B3A2D', placeholder: '#B4D9CC' },
  purple: { bg: '#EDE6FF', text: '#2d1f5e', placeholder: '#CBBFF5' },
};

export const StackingCard = styled.div`
  position: sticky;
  top: 140px;
  z-index: ${({ $index }) => $index + 1};
  background: ${({ $colorKey }) => CARD_COLORS[$colorKey]?.bg || '#F5D5C8'};
  color: ${({ $colorKey }) => CARD_COLORS[$colorKey]?.text || '#1a1a1a'};
  border-radius: 6px;
  padding: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  min-height: 420px;
  margin-bottom: 2rem;
  transition: transform 0.4s ease;
  will-change: transform;

  &:last-child {
    margin-bottom: 0;
  }

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
    font-weight: 800;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    line-height: 1.15;
    margin: 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.85;
    margin: 0;
  }
`;

export const CardCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: underline;
  text-underline-offset: 4px;
  color: inherit;
  margin-top: 0.5rem;
  transition: opacity 0.2s;

  &:hover { opacity: 0.7; }
`;

export const CardImagePlaceholder = styled.div`
  background: ${({ $colorKey }) => CARD_COLORS[$colorKey]?.placeholder || '#e8bfb0'};
  border-radius: 6px;
  aspect-ratio: 4 / 3;
  width: 100%;

  @media (max-width: 768px) {
    aspect-ratio: 16 / 10;
  }
`;

/* ── Bottom spacer for stacking scroll room ── */
export const StackingBottomSpacer = styled.div`
  height: 30vh;

  @media (max-width: 768px) {
    height: 0;
  }
`;

/* ── Success Section ── */
export const SuccessSection = styled.section`
  text-align: center;
  padding: 6rem 1.5rem;
  max-width: 1350px;
  margin: 0 auto;
`;

export const SuccessBadge = styled.span`
  display: inline-block;
  background: #1B3A2D;
  color: #fff;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
`;

export const SuccessHeadline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #1a1a1a;
  margin: 0 0 0.75rem;
`;

export const SuccessSubtitle = styled.p`
  font-size: 1.05rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

export const SuccessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SuccessCard = styled.div`
  background: #EFF6F3;
  border-radius: 6px;
  padding: 1.5rem;
  text-align: left;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid #D0E8E2;
`;

export const SuccessCardImage = styled.div`
  background: #D5EDE7;
  border-radius: 6px;
  height: 180px;
  margin-bottom: 1.25rem;
`;

export const SuccessCardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 800;
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: #1a1a1a;
`;

export const SuccessCardDesc = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

/* ── Brands Section ── */
export const BrandsSection = styled.section`
  text-align: center;
  padding: 4rem 1.5rem 5rem;
  max-width: 1350px;
  margin: 0 auto;
`;

export const BrandsHeadline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 900;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  color: #1a1a1a;
  margin: 0 0 2.5rem;
`;

export const LogoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const LogoPlaceholder = styled.div`
  width: 100px;
  height: 36px;
  background: #ddd;
  border-radius: 6px;
  opacity: 0.5;
`;

/* ── Case Studies ── */
export const CaseStudiesSection = styled.section`
  padding: 4rem 1.5rem 6rem;
  max-width: 1350px;
  margin: 0 auto;
`;

export const CaseStudiesHeadline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3rem);
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 3rem;
`;

export const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CaseCard = styled.div`
  background: #EFF6F3;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid #D0E8E2;
`;

export const CaseCardImage = styled.div`
  background: #D5EDE7;
  height: 220px;
  position: relative;
`;

export const CaseCardBadge = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #1B3A2D;
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  white-space: nowrap;
`;

export const CaseCardBody = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
`;

export const CaseCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  line-height: 1.4;
`;

export const CaseCardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 500;

  &:hover { text-decoration: underline; }
`;

/* ── Final CTA ── */
export const FinalCTABanner = styled.section`
  max-width: 1100px;
  margin: 0 auto 4rem;
  background: #1B3A2D;
  border-radius: 6px;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const FinalCTAHeadline = styled.h2`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 900;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: #fff;
  margin: 0;
`;

export const FinalCTAButton = styled.a`
  background: #D5EDE7;
  color: #1a1a1a;
  padding: 0.85rem 2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover { opacity: 0.85; }
`;
