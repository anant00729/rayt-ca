import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Section = styled.section`
  background: #F3F6F8;
  padding: 96px 0 0;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 64px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const Head = styled.div`
  position: sticky;
  top: 130px;

  @media (max-width: 980px) {
    position: static;
  }
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
  margin-bottom: 1.8rem;
`;

export const HeadH2 = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2.4rem, 3.6vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: ${tokens.ink900};
  margin: 0 0 1.4rem;
  text-wrap: balance;
`;

export const HeadP = styled.p`
  font-size: 1.25rem;
  color: ${tokens.ink500};
  font-weight: 600;
  line-height: 1.45;
  max-width: 26ch;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-bottom: 30vh;

  @media (max-width: 980px) {
    padding-bottom: 0;
  }
`;

export const Card = styled.div`
  position: sticky;
  top: 130px;
  z-index: ${({ $idx }) => $idx + 1};
  border-radius: 36px;
  padding: 48px;
  min-height: 420px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;
  box-shadow: 0 18px 50px rgba(18, 52, 88, 0.10);
  background: linear-gradient(135deg, ${tokens.sky200} 0%, ${tokens.sky50} 100%);
  border: 1px solid ${tokens.sky200};

  h3 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 900;
    font-size: clamp(1.8rem, 2.6vw, 2.5rem);
    line-height: 1.06;
    letter-spacing: -0.025em;
    color: ${tokens.ink900};
    margin: 0 0 1.3rem;
    text-wrap: balance;
  }

  p {
    font-size: 1.08rem;
    color: ${tokens.ink700};
    font-weight: 500;
    line-height: 1.5;
    margin: 0 0 1.6rem;
  }

  @media (max-width: 980px) {
    position: relative;
    top: auto;
    grid-template-columns: 1fr;
  }

  @media (max-width: 560px) {
    padding: 32px;
    min-height: auto;
  }
`;

export const LinkArrow = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-weight: 800;
  font-size: 1.02rem;
  color: ${tokens.ink900};
  cursor: pointer;
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s;
  }
  &:hover svg { transform: translateX(4px); }
`;

/* Mini phone */
export const MiniPhone = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 16px 14px;
  box-shadow: 0 20px 40px rgba(18, 52, 88, 0.16);

  h6 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 900;
    letter-spacing: -0.02em;
    text-align: center;
    font-size: 1.05rem;
    color: ${tokens.ink900};
    margin: 0 0 12px;
  }
`;

/* Pricing card */
export const PriceRow = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const PriceHead = styled.div`
  padding: 8px;
  text-align: center;
  font-weight: 800;
  font-size: 0.82rem;
  color: ${({ $paid }) => $paid ? '#fff' : tokens.ink700};
  background: ${({ $paid }) => $paid ? tokens.sky700 : tokens.sky100};
`;

export const PriceBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const PriceAmt = styled.span`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${tokens.ink900};
  letter-spacing: -0.02em;

  small {
    font-size: 0.7rem;
    color: ${tokens.ink500};
    font-weight: 700;
  }
`;

export const Sk = styled.span`
  display: block;
  height: 6px;
  border-radius: 4px;
  background: ${tokens.sky100};
  width: ${({ $w }) => $w || '70%'};
  margin-bottom: ${({ $mb }) => $mb || '0'};
`;

/* Widgets grid mini */
export const WgGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

export const WgCell = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: 10px;
  padding: 9px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: ${({ $ai }) => $ai ? tokens.sky50 : 'transparent'};
`;

export const WgPh = styled.div`
  aspect-ratio: 1 / 0.8;
  border-radius: 6px;
  background: linear-gradient(150deg, ${tokens.sky100}, ${tokens.lilac50});
`;

export const WgStars = styled.span`
  display: inline-flex;
  gap: 1px;
  color: ${({ $mint }) => $mint ? '#147A55' : tokens.sky700};
  font-size: 0.8rem;
`;

/* Support chat */
export const ScBubble = styled.div`
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.3;
  max-width: 88%;
  background: ${({ $us }) => $us ? tokens.sky700 : '#fff'};
  border: ${({ $us }) => $us ? 'none' : `1px solid ${tokens.border}`};
  color: ${({ $us }) => $us ? '#fff' : tokens.ink900};
  margin-left: ${({ $us }) => $us ? 'auto' : '0'};
`;

export const ScTime = styled.div`
  font-size: 0.62rem;
  color: ${tokens.ink300};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 4px 2px 12px;
  text-align: ${({ $right }) => $right ? 'right' : 'left'};
`;
