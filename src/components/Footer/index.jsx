import { THEMES } from '../../App';
import { ROUTES } from '../../constants/routes';
import { Wrapper, Inner, FooterLogo, Grid, Column, ColHeading, ColLink, ColLinkInternal, Bottom, ThemeSelect } from './style';

const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Analytics' },
      { label: 'Workflows' },
      { label: 'Integrations' },
      { label: 'Widgets' },
      { label: 'API' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation' },
      { label: 'Changelog' },
      { label: 'Status' },
      { label: 'Blog', to: ROUTES.BLOG },
      { label: 'Community' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About' },
      { label: 'Customers' },
      { label: 'Careers' },
      { label: 'Press' },
      { label: 'Contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy' },
      { label: 'Terms' },
      { label: 'Cookie Policy' },
      { label: 'Security' },
      { label: 'Licenses' },
    ],
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
              {col.links.map(link =>
                link.to ? (
                  <ColLinkInternal key={link.label} to={link.to}>{link.label}</ColLinkInternal>
                ) : (
                  <ColLink key={link.label} href="https://google.com" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </ColLink>
                )
              )}
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
