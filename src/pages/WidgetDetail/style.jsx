import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  background: transparent;
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 0.6rem;
  @media (max-width: 1099px) {
    padding: 0 1.5rem;
  }
`;

export const Breadcrumb = styled.div`
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;

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

    &:hover { background: rgba(255, 255, 255, 0.8); }
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

export const TaglineRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 1.25rem;
`;

export const Tagline = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: clamp(1rem, 2.6vw, 2.15rem);
  line-height: 1.18;
  letter-spacing: -0.015em;
  color: ${tokens.ink900};
  margin: 0;
  max-width: 32ch;
`;

export const MetricStrip = styled.div`
  display: none;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2.25rem;
`;

export const MetricPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.75);
  color: ${tokens.ink700};

  ${({ $accent }) => {
    if ($accent === 'mint') {
      return `
        background: rgba(234, 248, 241, 0.75);
        color: #147A55;
        border-color: rgba(182, 227, 204, 0.75);
      `;
    }
    if ($accent === 'lilac') {
      return `
        background: rgba(243, 241, 252, 0.78);
        color: ${tokens.lilacDeep};
        border-color: rgba(211, 204, 245, 0.75);
      `;
    }
    return '';
  }}
`;

export const StageWrap = styled.section`
  position: relative;
  padding: ${({ $bare }) => ($bare ? '0' : '0rem 0 4rem')};
  overflow: ${({ $bare }) => ($bare ? 'visible' : 'hidden')};

  ${({ $bare }) =>
    $bare
      ? ''
      : `
    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 120px;
      transform: translateX(-50%);
      width: min(1400px, 130%);
      height: 900px;
      background:
        radial-gradient(ellipse 65% 55% at 50% 38%, rgba(188, 216, 240, 0.35) 0%, transparent 68%),
        radial-gradient(ellipse 50% 40% at 30% 60%, rgba(82, 201, 160, 0.12) 0%, transparent 60%),
        radial-gradient(ellipse 40% 35% at 75% 55%, rgba(73, 55, 165, 0.08) 0%, transparent 55%);
      border-radius: 50%;
      z-index: 0;
      pointer-events: none;
    }
  `}
`;

export const MobileToggle = styled.button`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 14px;
  font-size: 0.88rem;
  font-weight: 700;
  color: ${tokens.ink900};
  cursor: pointer;

  svg {
    transition: transform 0.2s;
    transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
    color: ${tokens.sky700};
  }

  @media (max-width: 1099px) {
    display: flex;
  }
`;

export const Playground = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 16px;
  align-items: start;

  @media (max-width: 1099px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const SettingsPane = styled.aside`
  position: sticky;
  top: 96px;
  align-self: start;
  max-height: calc(100vh - 120px);
  overflow: visible;
  min-width: 0;
  overflow-x: hidden;

  @media (max-width: 1099px) {
    position: static;
    max-height: none;
    display: ${({ $open }) => ($open ? 'block' : 'none')};
  }
`;

export const PreviewStage = styled.div`
  border-radius: 18px;
  background-color: #daeaf6;
  background-image: radial-gradient(circle, #b8ccd8 1px, transparent 1px);
  background-size: 20px 20px;
  padding: 0px;
  overflow: hidden;
`;

export const StageFrame = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(30, 27, 46, 0.12), 0 2px 8px rgba(30, 27, 46, 0.06);
  transition: max-width 0.25s ease, margin 0.25s ease;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;

export const WidgetScroll = styled.div`
  max-height: 720px;
  overflow-y: auto;

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(14, 27, 43, 0.15);
    border-radius: 3px;
  }

  @media (max-width: 1099px) {
    max-height: 560px;
  }
`;

export const PrimerCard = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  margin-bottom: 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(14px) saturate(170%);
  box-shadow: 0 4px 18px rgba(18, 52, 88, 0.06);
`;

export const PrimerKicker = styled.div`
  font-size: 0.66rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${tokens.sky700};

  &::before {
    content: '●';
    color: ${tokens.mint500};
    margin-right: 6px;
    font-size: 0.7rem;
  }
`;

export const PrimerBody = styled.p`
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.55;
  color: ${tokens.ink500};
`;

export const FeatureMatrixWrap = styled.section`
  position: relative;
  z-index: 2;
  max-width: 1040px;
  margin: 4rem auto 3rem;
  padding: 0 0.25rem;
`;

export const FMHeader = styled.div`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${tokens.sky700};
  padding-bottom: 12px;
  border-bottom: 1px solid ${tokens.borderStrong};
  margin-bottom: 4px;
`;

export const FMRow = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;
  align-items: baseline;
  padding: 14px 0;
  border-bottom: 1px solid ${tokens.border};

  &:last-child { border-bottom: none; }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 2px;
    padding: 12px 0;
  }
`;

export const FMKey = styled.div`
  font-size: 0.86rem;
  font-weight: 700;
  color: ${tokens.ink900};
`;

export const FMValue = styled.div`
  font-size: 0.86rem;
  line-height: 1.55;
  color: ${tokens.ink500};
`;

export const PreviewToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const ViewToggleGroup = styled.div`
  display: flex;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  overflow: hidden;
`;

export const ViewToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 32px;
  border: none;
  border-right: ${(p) => (p.$last ? 'none' : '1px solid #e2e2e2')};
  background: ${(p) => (p.$active ? '#daeaf6' : '#ffffff')};
  cursor: pointer;
  color: ${(p) => (p.$active ? '#5c8ccc' : '#888888')};
  transition: background 0.1s, color 0.1s;
  padding: 0;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

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
