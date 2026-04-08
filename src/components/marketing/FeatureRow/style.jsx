import styled from 'styled-components';

export const Row = styled.div`
  padding: 4rem 1.5rem;
  display: grid;
  grid-template-columns: ${({ $reverse }) => $reverse ? '2.5fr 1fr' : '1fr 2.5fr'};
  gap: 3rem;
  background: var(--color-primary);
  max-width: 1350px;
  margin: 0 auto;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1.5rem;
  }
`;

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  order: ${({ $reverse }) => $reverse ? 2 : 1};

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.3rem;
`;

export const Subtitle = styled.p`
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  color: var(--color-muted);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`;

export const Desc = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
  margin-bottom: 1.25rem;
`;

export const CTA = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 2px;
  width: fit-content;
  transition: border-color 0.15s;

  &:hover {
    border-color: var(--color-secondary);
  }
`;

export const ImageSide = styled.div`
  order: ${({ $reverse }) => $reverse ? 1 : 2};

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const Placeholder = styled.div`
  background: ${({ $bg }) => $bg || 'var(--color-border)'};
  border-radius: 10px;
  aspect-ratio: 16/10;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 18px,
      rgba(0,0,0,0.06) 18px,
      rgba(0,0,0,0.06) 19px
    );
  }
`;

export const PlaceholderLabel = styled.span`
  position: relative;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(0,0,0,0.25);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
