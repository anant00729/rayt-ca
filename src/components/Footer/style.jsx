import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FOOTER_BG = '#0d1421';
const FOOTER_HEADING = '#4a90d9';
const FOOTER_LINK = 'rgba(255,255,255,0.82)';
const FOOTER_MUTED = 'rgba(255,255,255,0.4)';
const FOOTER_BORDER = 'rgba(255,255,255,0.1)';

export const Wrapper = styled.footer`
  padding: 4rem 1.5rem 3rem;
  background: ${FOOTER_BG};
`;

export const Inner = styled.div`
  max-width: 1350px;
  margin: 0 auto;

  /* give the AppLogo its bottom margin within the dark footer */
  & > a {
    margin-bottom: 3rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div``;

export const ColHeading = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${FOOTER_HEADING};
  margin-bottom: 1.25rem;
`;

const colLinkStyles = `
  display: block;
  font-size: 0.9rem;
  color: ${FOOTER_LINK};
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.15s;

  &:hover {
    color: #ffffff;
  }
`;

export const ColLink = styled.a`${colLinkStyles}`;

export const ColLinkInternal = styled(Link)`${colLinkStyles}`;

export const Bottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${FOOTER_BORDER};
  font-size: 0.8rem;
  color: ${FOOTER_MUTED};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Tagline = styled.span`
  font-size: 0.8rem;
  color: ${FOOTER_MUTED};
`;
