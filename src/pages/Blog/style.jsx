import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  background: transparent;
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

export const HeroWrap = styled.div`
  background: var(--color-accent);
  margin-top: -96px;
  padding-top: 96px;
`;

export const HeroSubtitle = styled.p`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 0.5rem;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1.05rem;
  line-height: 1.6;
`;

export const Container = styled.section`
  max-width: 860px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: ${tokens.white};
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  padding: 1.75rem;
  text-decoration: none;
  color: inherit;
  box-shadow: ${tokens.shadowSm};
  transition: box-shadow 0.2s, transform 0.2s;

  &:hover {
    box-shadow: ${tokens.shadowMd};
    transform: translateY(-2px);
  }
`;

export const GroupCard = styled.section`
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  background: ${tokens.white};
  padding: 1.75rem 0 0.5rem;
  margin-bottom: 1.75rem;
  overflow: hidden;
`;

export const GroupTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 800;
  color: ${tokens.ink900};
  margin: 0 1.75rem 1.25rem;
`;

export const GroupHr = styled.hr`
  border: none;
  border-top: 1px solid ${tokens.border};
  margin: 0 0 0.5rem;
`;

export const RowsWrap = styled.div`
  padding: 0 0.5rem 0.5rem;
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

export const EmptyStateInline = styled.p`
  color: ${tokens.ink500};
  padding: 2rem 1.5rem;
  margin: 0;
  text-align: center;
`;

export const EmptyState = styled.div`
  max-width: 480px;
  margin: 4rem auto 8rem;
  padding: 0 1.5rem;
  text-align: center;
  color: ${tokens.ink500};

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${tokens.ink900};
    margin-bottom: 0.5rem;
  }
`;
