import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEMES } from '../App';

const COLUMNS = [
  {
    heading: 'Product',
    links: ['Analytics', 'Workflows', 'Integrations', 'Widgets', 'API'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'Changelog', 'Status', 'Blog', 'Community'],
  },
  {
    heading: 'Company',
    links: ['About', 'Customers', 'Careers', 'Press', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Cookie Policy', 'Security', 'Licenses'],
  },
];

const Wrapper = styled.footer`
  border-top: 1px solid var(--color-border);
  padding: 4rem 1.5rem 3rem;
  background: var(--color-primary);
`;

const Inner = styled.div`
  max-width: 1350px;
  margin: 0 auto;
`;

const FooterLogo = styled(Link)`
  font-family: 'Changa One', sans-serif;
  font-size: 1.4rem;
  color: var(--color-secondary);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
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

const Column = styled.div``;

const ColHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 1rem;
`;

const ColLink = styled.a`
  display: block;
  font-size: 0.9rem;
  color: var(--color-muted);
  text-decoration: none;
  margin-bottom: 0.6rem;
  transition: color 0.15s;

  &:hover {
    color: var(--color-secondary);
  }
`;

const Bottom = styled.div`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.8rem;
  color: var(--color-muted);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ThemeSelect = styled.select`
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-secondary);
  font-family: 'Nunito Sans', sans-serif;
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s;

  &:hover,
  &:focus {
    border-color: var(--color-accent);
  }

  option {
    background: var(--color-primary);
    color: var(--color-secondary);
  }
`;

export default function Footer({ theme, onThemeChange }) {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo to="/">RayT</FooterLogo>
        <Grid>
          {COLUMNS.map(col => (
            <Column key={col.heading}>
              <ColHeading>{col.heading}</ColHeading>
              {col.links.map(link => (
                <ColLink key={link} href="https://google.com" target="_blank" rel="noopener noreferrer">
                  {link}
                </ColLink>
              ))}
            </Column>
          ))}
        </Grid>
        <Bottom>
          <span>© 2026 RayT. All rights reserved.</span>
          <ThemeSelect
            value={theme.name}
            onChange={e => onThemeChange(THEMES.find(t => t.name === e.target.value))}
          >
            {THEMES.map(t => (
              <option key={t.name} value={t.name}>{t.name}</option>
            ))}
          </ThemeSelect>
        </Bottom>
      </Inner>
    </Wrapper>
  );
}
