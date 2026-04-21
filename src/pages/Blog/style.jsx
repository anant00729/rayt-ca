import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  background: transparent;
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

export const Hero = styled.section`
  max-width: 760px;
  margin: 0 auto;
  padding: 5rem 1.5rem 3.5rem;
  text-align: center;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  color: ${tokens.sky700};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const Heading = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0 0 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: ${tokens.ink500};
  line-height: 1.65;
  max-width: 520px;
  margin: 0 auto;
`;

export const Grid = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
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

export const CardDate = styled.time`
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${tokens.sky700};
  margin-bottom: 0.6rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 800;
  color: ${tokens.ink900};
  line-height: 1.3;
  margin: 0 0 0.65rem;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: ${tokens.ink500};
  line-height: 1.6;
  flex: 1;
  margin: 0 0 1.25rem;
`;

export const CardReadMore = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${tokens.sky700};
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &::after {
    content: '→';
    transition: transform 0.15s;
  }

  ${Card}:hover &::after {
    transform: translateX(3px);
  }
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
