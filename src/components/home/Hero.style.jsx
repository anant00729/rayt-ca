import styled from 'styled-components';
import { tokens } from '../../styles/tokens';
import { levitating, bouncing, rolling, twinkle, shimmerBg } from '../../styles/animations';

export const HeroWrap = styled.section`
  position: relative;
  padding: 9rem 4rem 5rem;
  margin: 0 auto;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -10% -10% auto -10%;
    height: 60%;
    background:
      radial-gradient(60% 60% at 20% 30%, ${tokens.sky100} 0%, transparent 60%),
      radial-gradient(50% 50% at 80% 20%, ${tokens.mint100} 0%, transparent 65%),
      radial-gradient(50% 50% at 60% 80%, ${tokens.lilac100} 0%, transparent 70%);
    filter: blur(30px);
    opacity: 0.85;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 7rem 1.25rem 3rem;
  }
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const HeroEyebrow = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  color: ${tokens.sky700};
  padding: 0.5rem 1rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid ${tokens.sky100};
  box-shadow: ${tokens.shadowSm};

  &::before {
    content: '✦';
    color: ${tokens.mint500};
    animation: ${twinkle} 2.4s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    align-self: center;
  }
`;

export const HeroHeadline = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2.5rem, 5.5vw, 4.75rem);
  line-height: 1.02;
  letter-spacing: -0.025em;
  color: ${tokens.ink900};
  margin: 0;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.05rem, 1.6vw, 1.2rem);
  line-height: 1.6;
  color: ${tokens.ink500};
  margin: 0;
  max-width: 540px;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.4rem;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

export const PrimaryCta = styled.a`
  --angle: 120deg;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(var(--angle), ${tokens.ink900}, ${tokens.sky700});
  background-size: 200% 200%;
  color: #fff;
  padding: 1rem 1.75rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.98rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: ${tokens.shadowGlow};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: ${shimmerBg} 6s ease-in-out infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 36px rgba(46, 111, 176, 0.28);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const SecondaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #fff;
  color: ${tokens.ink900};
  padding: 1rem 1.5rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.98rem;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid ${tokens.border};
  box-shadow: ${tokens.shadowSm};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${tokens.sky200};
  }
`;

export const TrustLine = styled.p`
  font-size: 0.85rem;
  color: ${tokens.ink500};
  margin: 0.5rem 0 0;
  letter-spacing: 0.01em;
`;

/* ─── Floating widget collage on the right ─── */

export const Collage = styled.div`
  position: relative;
  min-height: 480px;

  @media (max-width: 900px) {
    min-height: 360px;
    max-width: 440px;
    margin: 0 auto;
  }
`;

const FloatCard = styled.div`
  position: absolute;
  background: #fff;
  border-radius: ${tokens.radius};
  box-shadow: ${tokens.shadowMd};
  border: 1px solid ${tokens.border};
  padding: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: calc(${tokens.radius} - 0.5rem);
  }
`;


export const CollageImg3 = styled(FloatCard)`
  top: 0%;
  left: 2%;
  width: 36%;
  aspect-ratio: 428 / 832;
  animation: ${bouncing} 3.8s cubic-bezier(.28,.84,.42,1) infinite;
  z-index: 4;

  @media (max-width: 900px) {
    top: 4%;
    left: 2%;
    width: 28%;
  }
`;

export const CollageImg4 = styled(FloatCard)`
  top: 14%;
  left: 34%;
  width: 52%;
  aspect-ratio: 844 / 284;
  animation: ${levitating} 6s ease-in-out infinite;
  z-index: 5;

  @media (max-width: 900px) {
    top: 10%;
    left: 28%;
    width: 55%;
  }
`;

export const CollageImg6 = styled(FloatCard)`
  bottom: 14%;
  left: 43%;
  width: 60%;
  aspect-ratio: 1126 / 818;
  animation: ${rolling} 7s ease-in-out infinite;
  z-index: 3;

  @media (max-width: 900px) {
    bottom: 8%;
    left: 30%;
    width: 52%;
  }
`;

export const CollageOrb = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff, ${tokens.lilac100} 60%, ${tokens.sky200} 100%);
  top: 2%;
  right: 14%;
  box-shadow: 0 20px 40px rgba(73, 55, 165, 0.18);
  animation: ${levitating} 6s ease-in-out infinite;
  z-index: 1;
`;

export const CollageStar = styled.div`
  position: absolute;
  bottom: 10%;
  right: 6%;
  width: 60px;
  height: 60px;
  color: ${tokens.sky500};
  font-size: 3.5rem;
  line-height: 1;
  animation: ${rolling} 7s ease-in-out infinite;
  z-index: 5;
`;
