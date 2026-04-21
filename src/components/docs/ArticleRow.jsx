import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tokens } from '../../styles/tokens';

const Row = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem 1.5rem;
  color: ${tokens.ink700};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: ${tokens.radiusSm};
  transition: background 0.15s, color 0.15s;

  &:not(:last-child) {
    border-bottom: 1px solid ${tokens.border};
  }

  &:hover,
  &[data-active='true'] {
    background: color-mix(in srgb, var(--color-accent) 8%, transparent);
    color: var(--color-accent);

    .rayt-chevron {
      color: var(--color-accent);
      transform: translateX(2px);
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;

const Title = styled.span`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Meta = styled.span`
  color: ${tokens.ink500};
  font-size: 0.85rem;
  font-weight: 400;
  white-space: nowrap;
`;

const Chevron = styled.span.attrs({ className: 'rayt-chevron', 'aria-hidden': true })`
  color: ${tokens.ink300};
  font-size: 1.1rem;
  line-height: 1;
  transition: color 0.15s, transform 0.15s;
`;

export default function ArticleRow({ to, title, meta, active = false }) {
  return (
    <Row to={to} data-active={active ? 'true' : undefined}>
      <Title>{title}</Title>
      {meta && <Meta>{meta}</Meta>}
      <Chevron>›</Chevron>
    </Row>
  );
}
