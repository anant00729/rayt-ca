import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Wrap = styled.section`
  max-width: 880px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  @media (max-width: 720px) {
    padding: 3rem 1.25rem;
  }
`;

export const Head = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

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
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Item = styled.details`
  background: ${tokens.paper};
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  padding: 1.1rem 1.5rem;
  box-shadow: ${tokens.shadowSm};
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &[open] {
    border-color: ${tokens.sky200};
    box-shadow: ${tokens.shadowMd};
  }

  &:hover {
    border-color: ${tokens.borderStrong};
  }
`;

export const Question = styled.summary`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: ${tokens.ink900};
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &::-webkit-details-marker { display: none; }

  &::after {
    content: '+';
    font-size: 1.4rem;
    font-weight: 400;
    color: ${tokens.sky700};
    transition: transform 0.25s ease;
    flex-shrink: 0;
  }

  details[open] > &::after {
    content: '−';
  }

  &:focus-visible {
    outline: 2px solid ${tokens.sky500};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const Answer = styled.p`
  margin: 0.85rem 0 0;
  font-size: 0.95rem;
  color: ${tokens.ink500};
  line-height: 1.6;
`;
