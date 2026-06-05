import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

const GLYPHS = {
  R: [
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1],
  ],
  A: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
  ],
  Y: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
  ],
  T: [
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
  ],
};

const DOT  = 1;
const GAP  = 0.25;
const CELL = DOT + GAP;
const LETTER_COLS  = 5;
const LETTER_ROWS  = 7;
const LETTER_GAP   = 2;

const TEXT = ['R', 'A', 'Y', 'T'];
const totalCols = TEXT.length * LETTER_COLS + (TEXT.length - 1) * LETTER_GAP;
const VW = totalCols * CELL;
const VH = LETTER_ROWS * CELL;

const Wrap = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 3rem 0 1rem;
`;

export default function PixelWordmark() {
  const dots = [];
  TEXT.forEach((ch, li) => {
    const glyph = GLYPHS[ch];
    const xOff = li * (LETTER_COLS + LETTER_GAP) * CELL;
    glyph.forEach((row, ri) =>
      row.forEach((bit, ci) => {
        if (bit) dots.push({ x: xOff + ci * CELL, y: ri * CELL });
      })
    );
  });

  return (
    <Wrap>
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="RAYT"
        role="img"
      >
        <defs>
          <linearGradient
            id="pw-grad"
            gradientUnits="userSpaceOnUse"
            x1="0" y1="0" x2={VW} y2="0"
          >
            <stop offset="0%"   stopColor={tokens.sky200} />
            <stop offset="45%"  stopColor={tokens.sky500} />
            <stop offset="100%" stopColor={tokens.mint500} />
          </linearGradient>
          <filter id="pw-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#pw-glow)">
          {dots.map(({ x, y }, i) => (
            <rect
              key={i}
              x={x} y={y}
              width={DOT} height={DOT}
              rx={0.18}
              fill="url(#pw-grad)"
            />
          ))}
        </g>
      </svg>
    </Wrap>
  );
}
