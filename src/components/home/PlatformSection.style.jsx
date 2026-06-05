import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Wrap = styled.section`
  padding: 96px 0 48px;
  text-align: center;
`;

export const Inner = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const EyebrowPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid ${tokens.borderStrong};
  color: ${tokens.ink700};
  padding: 0.45rem 1rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.86rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const Headline = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 4.4vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: ${tokens.ink900};
  margin: 0 0 1.6rem;
  text-wrap: balance;
`;

export const Accent = styled.span`
  background: linear-gradient(120deg, ${tokens.sky700} 0%, ${tokens.sky500} 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
`;

export const Body = styled.p`
  font-size: clamp(1.15rem, 1.6vw, 1.5rem);
  color: ${tokens.ink700};
  font-weight: 600;
  max-width: 28ch;
  margin: 0 auto;
  line-height: 1.4;
`;
