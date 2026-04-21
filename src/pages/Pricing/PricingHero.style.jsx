import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const HeroWrap = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 5rem 1.5rem 2rem;
  text-align: center;

  @media (max-width: 720px) {
    padding: 3.5rem 1.25rem 1.5rem;
  }
`;

export const Eyebrow = styled.span`
  display: inline-block;
  color: ${tokens.sky700};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Headline = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: ${tokens.ink900};
  margin: 0 0 1.25rem;
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 1.4vw, 1.15rem);
  color: ${tokens.ink500};
  line-height: 1.6;
  max-width: 620px;
  margin: 0 auto 1.25rem;
`;

export const TrustLine = styled.p`
  font-size: 0.85rem;
  color: ${tokens.ink700};
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0;
  opacity: 0.8;
`;
