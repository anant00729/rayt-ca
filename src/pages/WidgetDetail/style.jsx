import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

// ── Shared Layout ────────────────────────────────────────────────────────────

export const Page = styled.div`
  min-height: 100vh;
  background: transparent;
`;

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

// ── Shared Elements ──────────────────────────────────────────────────────────

export const Breadcrumb = styled.div`
  padding-top: 1.5rem;
  margin-bottom: 0.25rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 700;
    color: ${tokens.sky700};
    text-decoration: none;
    letter-spacing: 0.02em;
    padding: 0.45rem 0.8rem;
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 999px;
    backdrop-filter: blur(8px);
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.8);
    }
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${tokens.sky700};
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  &::before {
    content: '✦';
    color: ${tokens.mint500};
    font-size: 0.95rem;
  }
`;

export const DisplayTitle = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4.8vw, 3.75rem);
  line-height: 1.02;
  letter-spacing: -0.025em;
  color: ${tokens.ink900};
  margin: 0;

  .grad {
    background: linear-gradient(100deg, ${tokens.sky700} 0%, ${tokens.lilacDeep} 60%, ${tokens.mint500} 120%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const Lede = styled.p`
  color: ${tokens.ink500};
  font-size: clamp(0.95rem, 1.25vw, 1.1rem);
  line-height: 1.6;
  max-width: 54ch;
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    max-width: 100%;
    text-align: left;
  }
`;

// ── Widget scroll container (replaces browser frame) ─────────────────────────

export const WidgetScroll = styled.div`
  max-height: 680px;
  overflow-y: auto;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.6);

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(14, 27, 43, 0.15);
    border-radius: 3px;
  }

  @media (max-width: 600px) {
    max-height: 560px;
    border-radius: 12px;
  }
`;

// ── Stage ────────────────────────────────────────────────────────────────────

export const StageC = styled.section`
  position: relative;
  padding: 3rem 1.5rem 5rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 160px;
    transform: translateX(-50%);
    width: min(1400px, 130%);
    height: 900px;
    background:
      radial-gradient(ellipse 65% 55% at 50% 38%, rgba(188, 216, 240, 0.35) 0%, transparent 68%),
      radial-gradient(ellipse 50% 40% at 30% 60%, rgba(82, 201, 160, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse 40% 35% at 75% 55%, rgba(73, 55, 165, 0.07) 0%, transparent 55%);
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;
  }
`;

export const HeaderC = styled.div`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;

  @media (max-width: 600px) {
    text-align: left;
    align-items: flex-start;
    margin-bottom: 1.75rem;
  }
`;

export const StackC = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1040px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

// ── Liquid Glass Pedestal ─────────────────────────────────────────────────────

export const Pedestal = styled.div`
  position: relative;
  padding: 2rem 2rem 2rem;
  border-radius: 32px;

  /* Liquid glass layers */
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.72) 0%,
      rgba(234, 244, 253, 0.52) 35%,
      rgba(234, 248, 241, 0.42) 65%,
      rgba(243, 241, 252, 0.48) 100%
    );
  backdrop-filter: blur(28px) saturate(200%) brightness(1.05);
  -webkit-backdrop-filter: blur(28px) saturate(200%) brightness(1.05);

  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow:
    /* top specular highlight */
    0 1px 0 0 rgba(255, 255, 255, 0.95) inset,
    /* left edge highlight */
    1px 0 0 0 rgba(255, 255, 255, 0.5) inset,
    /* inner ambient */
    0 0 0 1px rgba(255, 255, 255, 0.22) inset,
    /* outer depth */
    0 8px 32px rgba(14, 27, 43, 0.08),
    0 32px 80px rgba(18, 52, 88, 0.12),
    0 2px 8px rgba(90, 155, 224, 0.08);

  @media (max-width: 600px) {
    padding: 1.25rem 1rem 1.25rem;
    border-radius: 22px;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const BadgeGroup = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.07em;
  text-transform: uppercase;

  ${({ $variant }) => {
    switch ($variant) {
      case 'sky':
        return `
          background: rgba(234,244,253,0.8);
          color: ${tokens.sky700};
          border: 1px solid rgba(188,216,240,0.7);
          backdrop-filter: blur(8px);
        `;
      case 'mint':
        return `
          background: rgba(234,248,241,0.8);
          color: #147A55;
          border: 1px solid rgba(214,240,228,0.7);
          backdrop-filter: blur(8px);
        `;
      default:
        return `
          background: rgba(255,255,255,0.5);
          color: ${tokens.ink500};
          border: 1px solid rgba(255,255,255,0.65);
          backdrop-filter: blur(8px);
          display: none;

          @media (min-width: 601px) { display: inline-flex; }
        `;
    }
  }}
`;

// ── Annotation overlays (fade on scroll) ─────────────────────────────────────

export const Anno = styled.div`
  position: absolute;
  border-radius: 14px;
  padding: 0.7rem 0.9rem;
  max-width: 210px;
  z-index: 5;
  font-size: 0.8rem;
  color: ${tokens.ink700};

  /* Liquid glass */
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.9) inset,
    0 4px 20px rgba(18, 52, 88, 0.1);

  /* Fade on scroll */
  opacity: ${({ $faded }) => ($faded ? 0 : 1)};
  pointer-events: ${({ $faded }) => ($faded ? 'none' : 'auto')};
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $pos }) => {
    switch ($pos) {
      case 'a1': return `top: 8%; left: -6%;`;
      case 'a2': return `top: 42%; right: -6%;`;
      case 'a3': return `bottom: 14%; left: -4%;`;
      default: return '';
    }
  }}

  @media (max-width: 1000px) { display: none; }
`;

export const AnnoLabel = styled.div`
  font-size: 0.64rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $color }) => $color || tokens.sky700};
  margin-bottom: 0.15rem;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ $dot }) => $dot || tokens.sky500};
  }
`;

export const ConnectorsSvg = styled.svg`
  position: absolute;
  inset: 0;
  z-index: 4;
  pointer-events: none;
  overflow: visible;
  width: 100%;
  height: 100%;
  opacity: ${({ $faded }) => ($faded ? 0 : 1)};
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 1000px) { display: none; }
`;

// ── Rail (liquid glass cards) ─────────────────────────────────────────────────

export const Rail = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1040px;
  margin: 1.75rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;

  @media (max-width: 1100px) { max-width: 100%; }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;

export const RailCell = styled.div`
  padding: 1rem 1.15rem;
  border-radius: 20px;

  /* Liquid glass */
  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.65) 0%,
      rgba(234, 244, 253, 0.42) 100%
    );
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.72);
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.85) inset,
    0 4px 16px rgba(18, 52, 88, 0.07);
`;

export const RailKey = styled.div`
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $color }) => $color || tokens.sky700};
`;

export const RailTitle = styled.div`
  font-weight: 800;
  color: ${tokens.ink900};
  margin-top: 0.25rem;
`;

export const RailDesc = styled.div`
  color: ${tokens.ink500};
  font-size: 0.85rem;
  margin-top: 0.15rem;
  line-height: 1.5;
`;

// ── Not Found ─────────────────────────────────────────────────────────────────

export const NotFoundWrap = styled.div`
  text-align: center;
  padding: 5rem 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${tokens.ink900};
    margin: 0 0 0.75rem;
  }

  p {
    color: ${tokens.ink500};
    margin: 0 0 1.5rem;
  }

  a {
    color: ${tokens.sky700};
    font-weight: 600;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;
