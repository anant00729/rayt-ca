import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

export const HeroWrap = styled.div`
  background: var(--color-accent);
  margin-top: -96px;
  padding-top: 96px;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: ${tokens.white};
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: ${tokens.shadowMd};
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--color-accent) 40%, ${tokens.border});
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;

export const CardIconWrap = styled.div`
  background: ${tokens.paper2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 1rem;
  border-bottom: 1px solid ${tokens.border};
`;

export const CardBody = styled.div`
  padding: 1.5rem 1.5rem 1.75rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 800;
  color: ${tokens.ink900};
  margin: 0 0 0.5rem;
  line-height: 1.3;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: ${tokens.ink500};
  line-height: 1.5;
  margin: 0 0 1.25rem;
  flex: 1;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${tokens.ink500};
`;

export const Avatar = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${tokens.sky100};
  background-image: ${p => (p.$src ? `url(${p.$src})` : 'none')};
  background-size: cover;
  background-position: center;
  display: inline-block;
  border: 1px solid ${tokens.border};
`;

export const Dot = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 999px;
  background: ${tokens.ink300};
  display: inline-block;
`;

export const ResultsCard = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  background: ${tokens.white};
  overflow: hidden;
`;

export const ResultsHeader = styled.h2`
  font-size: 1.1rem;
  font-weight: 800;
  color: ${tokens.ink900};
  margin: 0 0 1.25rem;
`;

export const EmptyState = styled.p`
  color: ${tokens.ink500};
  padding: 2rem 1.5rem;
  margin: 0;
  text-align: center;
`;
