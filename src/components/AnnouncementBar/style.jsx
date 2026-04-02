import styled from 'styled-components';

export const Bar = styled.div`
  background: var(--color-secondary);
  padding: 0.625rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pill = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.9;
  transition: opacity 0.15s;

  &:hover {
    opacity: 1;
  }
`;

export const Arrow = styled.span`
  font-size: 0.8rem;
  color: var(--color-accent);
`;
