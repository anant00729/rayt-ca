import { THEMES } from '../../App';
import { Wrapper, Inner, FooterLogo, Grid, Column, ColHeading, ColLink, Bottom, ThemeSelect } from './style';

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
