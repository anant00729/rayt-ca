import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Wrap = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
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
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0;
`;

export const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 34px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      ${tokens.sky200} 0 8px,
      transparent 8px 16px
    );
    z-index: 0;
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    &::before { display: none; }
  }
`;

export const Step = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  padding: 2rem 1.75rem;
  box-shadow: ${tokens.shadowSm};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 1;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${tokens.shadowMd};
  }
`;

export const StepNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${tokens.sky100}, ${tokens.mint100});
  color: ${tokens.ink900};
  font-weight: 900;
  font-size: 1rem;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
`;

export const StepTitle = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${tokens.ink900};
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
`;

export const StepDesc = styled.p`
  font-size: 0.92rem;
  color: ${tokens.ink500};
  line-height: 1.55;
  margin: 0;
`;
