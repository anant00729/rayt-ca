import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1350px;
  margin: 0 auto;
  background: var(--color-primary);
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  padding: 5rem 1.5rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 3rem 1.5rem;
    gap: 2.5rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-bottom: 1.25rem;
`;

export const Headline = styled.h1`
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-secondary);
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-muted);
  margin-bottom: 2rem;
  max-width: 480px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid var(--color-border);
  margin: 1.5rem 0;
`;

export const Badges = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-secondary);
`;

export const BadgeIcon = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

export const Right = styled.div`
  position: relative;
  height: 420px;

  @media (max-width: 768px) {
    height: 260px;
  }
`;

export const PlaceholderVisual = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
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
      rgba(0,0,0,0.04) 18px,
      rgba(0,0,0,0.04) 19px
    );
  }
`;

export const PlaceholderLabel = styled.span`
  position: relative;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(0,0,0,0.2);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
