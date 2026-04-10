import styled from 'styled-components';
import { tokens } from '../../styles/tokens';
import { levitating } from '../../styles/animations';

export const Wrap = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
`;

export const Card = styled.div`
  position: relative;
  background: linear-gradient(145deg, #ffffff 0%, ${tokens.sky50} 100%);
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusLg};
  box-shadow: ${tokens.shadowLg};
  padding: 3.5rem 3rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: radial-gradient(circle, ${tokens.mint100} 0%, transparent 70%);
    animation: ${levitating} 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -40px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, ${tokens.lilac100} 0%, transparent 70%);
    animation: ${levitating} 7s ease-in-out infinite reverse;
  }

  @media (max-width: 720px) {
    padding: 2.5rem 1.75rem;
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div``;

export const Eyebrow = styled.span`
  display: inline-block;
  color: ${tokens.sky700};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const Headline = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 3.2vw, 2.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0 0 1rem;
`;

export const Body = styled.p`
  font-size: 1rem;
  color: ${tokens.ink500};
  line-height: 1.6;
  margin: 0 0 1.5rem;
  max-width: 520px;
`;

export const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: ${tokens.ink900};
  color: #fff;
  padding: 0.95rem 1.75rem;
  border-radius: ${tokens.radiusPill};
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: ${tokens.shadowGlow};
  transition: transform 0.2s ease;

  &:hover { transform: translateY(-2px); }
`;

export const Perks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const Perk = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: ${tokens.ink700};
  font-weight: 600;

  &::before {
    content: '✓';
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${tokens.mint100};
    color: #147A55;
    font-weight: 900;
    flex-shrink: 0;
  }
`;
