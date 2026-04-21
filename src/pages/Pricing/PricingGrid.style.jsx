import styled, { css } from 'styled-components';
import { tokens, accentMap } from '../../styles/tokens';

export const GridWrap = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;

  @media (max-width: 720px) {
    padding: 1rem 1.25rem 3rem;
  }
`;

export const ToggleRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 2.5rem;
`;

export const ToggleGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: ${tokens.paper2};
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusPill};
  padding: 0.3rem;
`;

export const ToggleBtn = styled.button`
  position: relative;
  padding: 0.55rem 1.25rem;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? tokens.ink900 : tokens.ink500)};
  background: ${({ $active }) => ($active ? tokens.white : 'transparent')};
  border: none;
  border-radius: ${tokens.radiusPill};
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  box-shadow: ${({ $active }) => ($active ? tokens.shadowSm : 'none')};

  &:hover {
    color: ${tokens.ink900};
  }

  &:focus-visible {
    outline: 2px solid ${tokens.sky500};
    outline-offset: 2px;
  }
`;

export const SavingsPill = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.15rem 0.5rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: ${accentMap.mint.ink};
  background: ${tokens.mint100};
  border-radius: ${tokens.radiusPill};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  align-items: stretch;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const featured = css`
  background: linear-gradient(160deg, #ffffff 0%, ${accentMap.sky.bg} 100%);
  border-color: ${accentMap.sky.edge};
  box-shadow: ${tokens.shadowSky};

  @media (min-width: 1101px) {
    transform: translateY(-8px);
  }
`;

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${tokens.paper};
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusLg};
  box-shadow: ${tokens.shadowMd};
  padding: 2rem 1.75rem 1.75rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${tokens.shadowLg};
  }

  ${({ $featured }) => $featured && featured}

  @media (min-width: 1101px) {
    &:hover {
      transform: ${({ $featured }) => ($featured ? 'translateY(-12px)' : 'translateY(-4px)')};
    }
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.75rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.3rem 0.8rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tokens.white};
  background: ${tokens.sky700};
  border-radius: ${tokens.radiusPill};
  box-shadow: ${tokens.shadowGlow};
  white-space: nowrap;
`;

export const PlanName = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: ${tokens.sky700};
  margin: 0 0 0.35rem;
  text-transform: uppercase;
`;

export const Tagline = styled.p`
  font-size: 0.88rem;
  color: ${tokens.ink500};
  line-height: 1.45;
  margin: 0 0 1.25rem;
  min-height: 2.5em;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
`;

export const PriceAmount = styled.span`
  font-family: 'Changa One', 'Nunito Sans', sans-serif;
  font-size: clamp(2.1rem, 3.8vw, 3rem);
  line-height: 1;
  color: ${tokens.ink900};
  letter-spacing: -0.01em;
`;

export const PriceSuffix = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${tokens.ink500};
`;

export const PriceFootnote = styled.p`
  font-size: 0.78rem;
  color: ${tokens.ink300};
  margin: 0 0 1.5rem;
  min-height: 1.1em;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  flex: 1;
`;

export const Feature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.92rem;
  color: ${tokens.ink700};
  line-height: 1.4;

  &::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 1px;
    border-radius: 50%;
    background: ${tokens.mint100};
    color: ${accentMap.mint.ink};
    font-size: 0.72rem;
    font-weight: 900;
  }
`;

export const CtaSlot = styled.div`
  margin-top: auto;

  /* Button fills the card CTA slot */
  & > * {
    width: 100%;
    justify-content: center;
  }
`;

export const TrustNote = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: ${tokens.ink500};
  margin: 2.5rem auto 0;
  max-width: 720px;
  line-height: 1.5;
`;
