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
  margin-bottom: 2rem;
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

export const Body = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-muted);
  max-width: 480px;
`;

export const Right = styled.div`
  position: relative;
  height: 480px;

  @media (max-width: 768px) {
    height: 280px;
  }
`;

export const Card = styled.div`
  position: absolute;
  border-radius: 12px;
  background: ${({ bg }) => bg || 'var(--color-border)'};
  box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(0,0,0,0.25);
  letter-spacing: -0.01em;
`;
