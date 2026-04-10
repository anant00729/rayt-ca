import { keyframes, css } from 'styled-components';

/* ──────────────────────────── keyframes ──────────────────────────── */

export const rolling = keyframes`
  0%   { transform: translateX(-4%) rotate(-3deg); }
  50%  { transform: translateX(4%)  rotate(3deg);  }
  100% { transform: translateX(-4%) rotate(-3deg); }
`;

export const bouncing = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  30%      { transform: translateY(-10px) scale(1.03); }
  55%      { transform: translateY(2px) scale(0.985); }
  75%      { transform: translateY(-4px) scale(1.01); }
`;

export const levitating = keyframes`
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
`;

export const hanging = keyframes`
  0%, 100% { transform: rotate(-3deg); }
  50%      { transform: rotate(3deg); }
`;

export const spaceElevate = keyframes`
  0%   { transform: translateY(6px) scale(0.985); box-shadow: 0 2px 10px rgba(18,52,88,0.06); }
  50%  { transform: translateY(-6px) scale(1.015); box-shadow: 0 24px 50px rgba(18,52,88,0.14); }
  100% { transform: translateY(6px) scale(0.985); box-shadow: 0 2px 10px rgba(18,52,88,0.06); }
`;

export const twinkle = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(0.9); }
  50%      { opacity: 1;   transform: scale(1.1); }
`;

export const marquee = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

export const drawLine = keyframes`
  from { stroke-dashoffset: 240; }
  to   { stroke-dashoffset: 0; }
`;

export const reveal = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const shimmerBg = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const spinSlow = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

/* ─────────────────────── animation css helpers ──────────────────────── */

// Pick the right animation by name; duration/easing tuned per motion type.
export const animationCss = ($animation) => {
  switch ($animation) {
    case 'rolling':
      return css`animation: ${rolling} 6.5s ease-in-out infinite;`;
    case 'bouncing':
      return css`animation: ${bouncing} 2.6s cubic-bezier(.28,.84,.42,1) infinite;`;
    case 'levitating':
      return css`animation: ${levitating} 4.5s ease-in-out infinite;`;
    case 'hanging':
      return css`animation: ${hanging} 3.8s ease-in-out infinite; transform-origin: top center;`;
    case 'spaceElevate':
      return css`animation: ${spaceElevate} 5.5s ease-in-out infinite;`;
    default:
      return css``;
  }
};

// Respect reduced motion — apply to any element that uses the animationCss helper.
export const reduceMotion = css`
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
    transition: none !important;
  }
`;
