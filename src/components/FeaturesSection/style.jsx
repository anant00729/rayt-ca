import styled from 'styled-components';

export const Wrapper = styled.section`
  align-items: center;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  margin: 0 auto;
  background: transparent;
`;

export const Row = styled.div`
  padding: 4rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 3rem;
  background: var(--color-primary);
  max-width: 1350px;
  margin: 0 auto;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1.5rem;
  }
`;

export const RowLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.3rem;
`;

export const FeatureSubtitle = styled.p`
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  color: var(--color-muted);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`;

export const FeatureDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
  margin-bottom: 1.25rem;
`;

export const FeatureCTA = styled.a`
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

export const Previews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const PreviewCard = styled.div`
  background: ${({ bg }) => bg || 'var(--color-border)'};
  border-radius: 10px;
  aspect-ratio: 4/3;
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

export const PreviewLabel = styled.span`
  position: relative;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(0,0,0,0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
