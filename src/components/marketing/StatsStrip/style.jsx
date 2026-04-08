import styled from 'styled-components';

export const Strip = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  background: var(--color-secondary);
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  display: grid;
  grid-template-columns: repeat(${({ $count }) => $count || 3}, 1fr);
  gap: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Stat = styled.div`
  padding: 2.5rem 2rem;
  text-align: center;
  border-right: 1px solid rgba(0,0,0,0.08);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    padding: 1.5rem 1rem;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
`;

export const StatLabel = styled.div`
  font-size: 0.85rem;
  color: color-mix(in srgb, var(--color-primary) 70%, transparent);
  font-weight: 500;
`;
