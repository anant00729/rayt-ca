import styled from 'styled-components';

const Bar = styled.div`
  background: var(--color-secondary);
  padding: 0.625rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pill = styled.a`
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

const Arrow = styled.span`
  font-size: 0.8rem;
  color: var(--color-accent);
`;

export default function AnnouncementBar() {
  return (
    <Bar>
      <Pill href="https://google.com" target="_blank" rel="noopener noreferrer">
        ✦ Introducing RayT &nbsp;·&nbsp; Building tools for teams that ship fast
        <Arrow>→</Arrow>
      </Pill>
    </Bar>
  );
}
