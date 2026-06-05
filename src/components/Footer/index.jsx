import { ROUTES } from '../../constants/routes';
import AppLogo from '../ui/AppLogo';
import PixelWordmark from './PixelWordmark';
import { Wrapper, Inner, Grid, Column, ColHeading, ColLink, ColLinkInternal, Bottom, Tagline } from './style';

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

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <AppLogo dark />
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
        <PixelWordmark />
        <Bottom>
          <span>© 2026 RayT. All rights reserved.</span>
          <Tagline>Built for Shopify · Fast by default · Light on the eyes</Tagline>
        </Bottom>
      </Inner>
    </Wrapper>
  );
}
