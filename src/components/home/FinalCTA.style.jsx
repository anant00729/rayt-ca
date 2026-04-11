import styled from 'styled-components';
import { tokens } from '../../styles/tokens';
import { shimmerBg, twinkle } from '../../styles/animations';

export const Wrap = styled.section`
  max-width: 1180px;
  margin: 0 auto 5rem;
  padding: 0 1.5rem;
`;

export const Banner = styled.div`
  position: relative;
  background:
    radial-gradient(60% 80% at 20% 30%, ${tokens.sky700} 0%, transparent 60%),
    radial-gradient(60% 80% at 80% 70%, ${tokens.lilacDeep} 0%, transparent 60%),
    linear-gradient(135deg, ${tokens.ink900}, ${tokens.deepNavy});
  background-size: 200% 200%;
  color: #fff;
  border-radius: ${tokens.radiusLg};
  padding: 4.5rem 2.5rem;
  text-align: center;
  overflow: hidden;
  box-shadow: ${tokens.shadowLg};
  animation: ${shimmerBg} 12s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 720px) {
    padding: 3rem 1.5rem;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &::before {
    content: '✦';
    color: ${tokens.mint500};
    animation: ${twinkle} 2.4s ease-in-out infinite;
  }
`;

export const Headline = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
  max-width: 820px;
  margin-inline: auto;

  /* Override highlight marker color on dark background */
  span {
    background: linear-gradient(
      180deg, transparent 55%, ${tokens.mint500} 55%, ${tokens.mint500} 92%, transparent 92%
    );
    color: #fff;
    padding: 0 0.2em;
    border-radius: 4px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto 2rem;
  max-width: 580px;
`;

export const CtaRow = styled.div`
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
`;

