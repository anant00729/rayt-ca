import styled from 'styled-components';

export const Banner = styled.section`
  max-width: 1350px;
  margin: 0 auto;
  background: var(--color-secondary);
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
  padding: 4rem 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: color-mix(in srgb, var(--color-primary) 70%, transparent);
  margin-bottom: 2rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-primary);
  color: var(--color-secondary);
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
