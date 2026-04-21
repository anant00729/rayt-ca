import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

export const GreenBar = styled.div`
  height: 6px;
  background: var(--color-accent);
`;

export const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

export const Header = styled.header`
  padding: 2rem 0 3rem;
`;

export const IconTile = styled.div`
  width: 68px;
  height: 68px;
  border-radius: ${tokens.radiusSm};
  background: ${tokens.paper2};
  border: 1px solid ${tokens.border};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  color: ${tokens.ink900};
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem;
  line-height: 1.1;
`;

export const Description = styled.p`
  font-size: 1.05rem;
  color: ${tokens.ink700};
  margin: 0 0 1.25rem;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${tokens.ink500};
  font-size: 0.9rem;
`;

export const Avatar = styled.span`
  width: 28px;
  height: 28px;
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
