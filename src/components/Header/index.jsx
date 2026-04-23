import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { EXTERNAL } from '../../constants/routes';
import {
  HeaderBar, Container, StarIcon, Logo, Nav, NavLink, NavItem,
  DropdownTrigger, DropdownArrow,
  Actions, DesktopCTAHolder, Hamburger, MobileMenu, MobileNavLink,
  MobileDropdownItems, MobileDropItem, MobileDropIcon, MobileDropText, MobileDropTitle, MobileDropDesc,
  ResourcesDropdown, ResourcesEyebrow, ResourcesGrid, ResourceTile,
  ResourceIconWrap, ResourceTitle, ResourceBadge, ResourceDesc, ResourceArrow,
} from './style';

const PRODUCT_ITEMS = [
  {
    variant: 'reviews',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Product Reviews',
    desc: 'Boost credibility and sales with social proof that looks great',
    path: '/product-reviews',
  },
  {
    variant: 'referrals',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Customer Referrals',
    desc: 'Encourage your happy customers to promote your brand',
    path: '/customer-referrals',
  },
  {
    variant: 'ai',
    badge: 'New',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l1.09 3.41L16.5 6l-2.59 2.59L14.5 12 12 10.41 9.5 12l.59-3.41L7.5 6l3.41-.59z" />
        <path d="M5 19l1.5-4.5L3 12l4.5-.5L9 7" />
        <path d="M19 19l-1.5-4.5L21 12l-4.5-.5L15 7" />
      </svg>
    ),
    title: 'AI Convert',
    desc: 'Explore AI superpowers that build stronger trust and convert more',
    path: '/ai',
  },
];

const SIMPLE_NAV = [
  { label: 'Widgets', path: '/widgets' },
  { label: 'Customers', path: '/customers' },
  { label: 'Pricing', path: '/pricing' },
];

const RESOURCE_ITEMS = [
  {
    variant: 'blog',
    title: 'Blog',
    badge: 'New',
    desc: 'Tips, tutorials & feature guides to get more from RayT.',
    path: '/blog',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h11a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" />
        <path d="M8 8h7M8 12h7M8 16h4" />
      </svg>
    ),
  },
  {
    variant: 'docs',
    title: 'Docs',
    badge: 'Help',
    desc: 'Step-by-step documentation and answers for merchants.',
    path: '/docs',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 13h6M9 17h4" />
      </svg>
    ),
  },
];

export default function Header({ floating = false, announcementVisible = false, hideDistance = '200%' }) {
  const { pathname } = useLocation();
  const isDocsHome = pathname.startsWith('/docs') || pathname.startsWith('/blog');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef(null);
  const resourcesRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > 120);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderBar $floating={floating} $announcementVisible={announcementVisible} $hidden={hidden} $hideDistance={hideDistance} $whiteBg={isDocsHome}>
      <Container>
        <Logo to="/">
          <StarIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="m15.5398797 25.5859757-7.63729157 3.957929c-.49034963.2541174-1.09385945.0626134-1.3479769-.4277363-.10064257-.1942017-.13483627-.4160451-.0973418-.6315385l1.45155972-8.3426061c.05700026-.3275998-.05256879-.6621042-.29234213-.8924939l-6.13832708-5.8981019c-.39823914-.3826539-.41087345-1.0156928-.02821951-1.413932.15455902-.1608541.35846426-.2654106.57928565-.2970405l8.50841362-1.2187218c.3245128-.0464823.6056348-.2490693.7523987-.54220671l3.8157728-7.62139263c.2472523-.49384685.848032-.69375117 1.3418788-.44649881.1931499.09670361.3497952.2533489.4464988.44649881l3.8157728 7.62139263c.1467639.29313741.4278859.49572441.7523987.54220671l8.5084136 1.2187218c.5467049.0783085.9264152.584982.8481067 1.1316869-.0316299.2208213-.1361864.4247266-.2970405.5792856l-6.1383271 5.8981019c-.2397734.2303897-.3493424.5648941-.2923421.8924939l1.4515597 8.3426061c.0946716.5441101-.2696702 1.0619449-.8137802 1.1566166-.2154934.0374944-.4373368.0033007-.6315385-.0973418l-7.6372916-3.957929c-.2885253-.1495246-.6317153-.1495246-.9202406 0z" fill="#fbb719" />
          </StarIcon>
          RayT.
        </Logo>

        <Nav>
          <NavItem
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DropdownTrigger onClick={() => setDropdownOpen(prev => !prev)}>
              Product
              <DropdownArrow $open={dropdownOpen} viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </DropdownArrow>
            </DropdownTrigger>
            <ResourcesDropdown $open={dropdownOpen} $align="left" $wide role="menu">
              <ResourcesEyebrow>Explore RayT</ResourcesEyebrow>
              <ResourcesGrid $cols={3}>
                {PRODUCT_ITEMS.map(item => (
                  <ResourceTile
                    key={item.path}
                    to={item.path}
                    $variant={item.variant}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <ResourceIconWrap $variant={item.variant}>{item.icon}</ResourceIconWrap>
                    <ResourceTitle>
                      {item.title}
                      {item.badge && <ResourceBadge $variant={item.variant}>{item.badge}</ResourceBadge>}
                    </ResourceTitle>
                    <ResourceDesc>{item.desc}</ResourceDesc>
                    <ResourceArrow $variant={item.variant}>Open</ResourceArrow>
                  </ResourceTile>
                ))}
              </ResourcesGrid>
            </ResourcesDropdown>
          </NavItem>
          {SIMPLE_NAV.map(({ label, path }) => (
            <NavLink key={path} to={path}>{label}</NavLink>
          ))}
          <NavItem
            ref={resourcesRef}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <DropdownTrigger onClick={() => setResourcesOpen(prev => !prev)}>
              Resources
              <DropdownArrow $open={resourcesOpen} viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </DropdownArrow>
            </DropdownTrigger>
            <ResourcesDropdown $open={resourcesOpen} role="menu">
              <ResourcesEyebrow>Explore RayT</ResourcesEyebrow>
              <ResourcesGrid>
                {RESOURCE_ITEMS.map(item => (
                  <ResourceTile
                    key={item.path}
                    to={item.path}
                    $variant={item.variant}
                    onClick={() => setResourcesOpen(false)}
                  >
                    <ResourceIconWrap $variant={item.variant}>{item.icon}</ResourceIconWrap>
                    <ResourceTitle>
                      {item.title}
                      <ResourceBadge $variant={item.variant}>{item.badge}</ResourceBadge>
                    </ResourceTitle>
                    <ResourceDesc>{item.desc}</ResourceDesc>
                    <ResourceArrow $variant={item.variant}>Open</ResourceArrow>
                  </ResourceTile>
                ))}
              </ResourcesGrid>
            </ResourcesDropdown>
          </NavItem>
        </Nav>

        <Actions>
          <DesktopCTAHolder>
            <Button
              variant="themed"
              size="sm"
              href={EXTERNAL.GET_STARTED}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </Button>
          </DesktopCTAHolder>
          <Hamburger
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span />
            <span />
            <span />
          </Hamburger>
        </Actions>
      </Container>

      <MobileMenu $open={menuOpen}>
        <MobileNavLink as="button" onClick={() => setMobileProductOpen(prev => !prev)}>
          Product
          <DropdownArrow $open={mobileProductOpen} viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </DropdownArrow>
        </MobileNavLink>
        {mobileProductOpen && (
          <MobileDropdownItems>
            {PRODUCT_ITEMS.map(item => (
              <MobileDropItem key={item.path} to={item.path} onClick={() => { setMenuOpen(false); setMobileProductOpen(false); }}>
                <MobileDropIcon>{item.icon}</MobileDropIcon>
                <MobileDropText>
                  <MobileDropTitle>{item.title}</MobileDropTitle>
                  <MobileDropDesc>{item.desc}</MobileDropDesc>
                </MobileDropText>
              </MobileDropItem>
            ))}
          </MobileDropdownItems>
        )}
        {SIMPLE_NAV.map(({ label, path }) => (
          <MobileNavLink key={path} to={path} onClick={() => setMenuOpen(false)}>
            {label}
          </MobileNavLink>
        ))}
        <MobileNavLink as="button" onClick={() => setMobileResourcesOpen(prev => !prev)}>
          Resources
          <DropdownArrow $open={mobileResourcesOpen} viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </DropdownArrow>
        </MobileNavLink>
        {mobileResourcesOpen && (
          <MobileDropdownItems>
            {RESOURCE_ITEMS.map(item => (
              <MobileDropItem key={item.path} to={item.path} onClick={() => { setMenuOpen(false); setMobileResourcesOpen(false); }}>
                <MobileDropIcon>{item.icon}</MobileDropIcon>
                <MobileDropText>
                  <MobileDropTitle>{item.title}</MobileDropTitle>
                  <MobileDropDesc>{item.desc}</MobileDropDesc>
                </MobileDropText>
              </MobileDropItem>
            ))}
          </MobileDropdownItems>
        )}
        <Button
          variant="themed"
          size="md"
          href={EXTERNAL.GET_STARTED}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1rem', justifyContent: 'center' }}
        >
          Get started
        </Button>
      </MobileMenu>
    </HeaderBar>
  );
}
