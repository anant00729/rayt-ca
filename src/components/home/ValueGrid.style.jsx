import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const GridWrap = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
`;

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: end;
  margin-bottom: 3rem;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

export const GridEyebrow = styled.span`
  display: inline-block;
  color: ${tokens.sky700};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const GridHeadline = styled.h2`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 3.8vw, 3.25rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0 0 0.75rem;
  max-width: 820px;
`;

export const GridSubtitle = styled.p`
  font-size: 1.02rem;
  color: ${tokens.ink500};
  line-height: 1.6;
  margin: 0;
  max-width: 620px;
`;

export const Cells = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Cell = styled.div`
  background: #fff;
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  padding: 1.75rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${tokens.shadowMd};
    border-color: ${tokens.sky200};
  }

  /* :has() sibling subtle lift — when a sibling is hovered, dim others */
  ${Cells}:has(> div:hover) &:not(:hover) {
    opacity: 0.75;
  }
`;

export const CellIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${tokens.sky50};
  border: 1px solid ${tokens.sky100};
  font-size: 1.35rem;
  margin-bottom: 1rem;
`;

export const CellTitle = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  color: ${tokens.ink900};
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
`;

export const CellDesc = styled.p`
  font-size: 0.92rem;
  color: ${tokens.ink500};
  line-height: 1.55;
  margin: 0;
`;
