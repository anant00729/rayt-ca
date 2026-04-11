import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const StripWrap = styled.section`
  position: relative;
  max-width: 1180px;
  margin: 0 auto 4rem;
  padding: 0 1.5rem;
`;

export const StripInner = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radiusLg};
  box-shadow: ${tokens.shadowMd};
  padding: 1.75rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem 1.25rem;
  }
`;

export const StripItem = styled.div`
  text-align: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 15%;
    right: -0.75rem;
    width: 1px;
    height: 70%;
    background: ${tokens.border};
  }

  @media (max-width: 768px) {
    &:not(:last-child)::after { display: none; }
  }
`;

export const StripValue = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  color: ${tokens.ink900};
  letter-spacing: -0.02em;
  line-height: 1;
`;

export const StripLabel = styled.div`
  font-size: 0.82rem;
  color: ${tokens.ink500};
  margin-top: 0.4rem;
  font-weight: 500;
`;
