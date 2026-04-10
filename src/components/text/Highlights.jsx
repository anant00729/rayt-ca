import styled, { keyframes, css } from 'styled-components';
import { tokens } from '../../styles/tokens';
import { drawLine, twinkle, shimmerBg } from '../../styles/animations';

/* Headline word that paints itself with a sky→mint gradient. */
export const GradientText = styled.span`
  background: linear-gradient(
    100deg,
    ${tokens.sky700} 0%,
    ${tokens.sky500} 30%,
    ${tokens.mint500} 70%,
    ${tokens.sky700} 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${shimmerBg} 7s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-position: 30% 50%;
  }
`;

/* Classic marker highlighter — a soft mint wash behind the text. */
export const MarkerHighlight = styled.span`
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 58%,
    ${tokens.mint100} 58%,
    ${tokens.mint100} 92%,
    transparent 92%
  );
  padding: 0 0.1em;
  color: ${tokens.ink900};
  border-radius: 4px;
`;

/* Sky marker — alternative for variety. */
export const SkyHighlight = styled(MarkerHighlight)`
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 58%,
    ${tokens.sky100} 58%,
    ${tokens.sky100} 92%,
    transparent 92%
  );
`;

/* A word with a hand-drawn SVG swoosh beneath it — draws on mount. */
const SwooshWrap = styled.span`
  position: relative;
  display: inline-block;
  color: ${tokens.ink900};
  font-weight: 800;
`;

const SwooshSvg = styled.svg`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.35em;
  width: 100%;
  height: 0.35em;
  overflow: visible;

  path {
    fill: none;
    stroke: ${tokens.sky500};
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 240;
    stroke-dashoffset: 240;
    animation: ${drawLine} 1.4s ease-out 0.4s forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    path { stroke-dashoffset: 0; animation: none; }
  }
`;

export function UnderlineSwoosh({ children }) {
  return (
    <SwooshWrap>
      {children}
      <SwooshSvg viewBox="0 0 240 24" preserveAspectRatio="none" aria-hidden>
        <path d="M4 16 Q 60 2 120 14 T 236 10" />
      </SwooshSvg>
    </SwooshWrap>
  );
}

/* A word flanked by twinkling sparkles. */
const SparkleWrap = styled.span`
  position: relative;
  display: inline-block;
  color: ${tokens.ink900};
  font-weight: 800;

  &::before,
  &::after {
    content: '✦';
    position: absolute;
    font-size: 0.55em;
    color: ${tokens.sky500};
    animation: ${twinkle} 2.4s ease-in-out infinite;
  }

  &::before { top: -0.1em; left: -0.55em; }
  &::after  { top: 0.1em; right: -0.55em; animation-delay: 0.8s; }

  @media (prefers-reduced-motion: reduce) {
    &::before, &::after { animation: none; opacity: 0.8; }
  }
`;

export function SparkleWord({ children }) {
  return <SparkleWrap>{children}</SparkleWrap>;
}

/* Chip with a soft tinted background — used for eyebrows/labels. */
export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: ${tokens.sky50};
  color: ${tokens.sky700};
  padding: 0.4rem 0.9rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid ${tokens.sky100};
`;

export const MintChip = styled(Chip)`
  background: ${tokens.mint50};
  color: #147A55;
  border-color: ${tokens.mint100};
`;

/* Helper: render a headline object {before, highlight, after} with a chosen highlight style. */
export function HeadlineSplit({ data, variant = 'gradient' }) {
  if (!data) return null;
  const Hl =
    variant === 'marker' ? MarkerHighlight :
    variant === 'sky' ? SkyHighlight :
    variant === 'swoosh' ? UnderlineSwoosh :
    variant === 'sparkle' ? SparkleWord :
    GradientText;
  return (
    <>
      {data.before}{data.before && ' '}
      <Hl>{data.highlight}</Hl>
      {data.after && (data.after.startsWith(' ') ? data.after : ' ' + data.after)}
    </>
  );
}
