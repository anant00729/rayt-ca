import { useState, useRef, useEffect } from 'react';
import {
  HeaderBar, Container, StarIcon, Logo, Nav, NavLink, NavItem,
  DropdownTrigger, DropdownArrow, Dropdown, DropdownItem, DropdownIcon, DropdownText, DropdownTitle, DropdownDesc,
  Actions, CTAButton, Hamburger, MobileMenu, MobileNavLink, MobileCTA,
  MobileDropdownItems, MobileDropItem, MobileDropIcon, MobileDropText, MobileDropTitle, MobileDropDesc,
} from './style';

const PRODUCT_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Product Reviews',
    desc: 'Boost credibility and sales with social proof that looks great',
    path: '/product-reviews',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  { label: 'Resources', path: '/resources' },
];

export default function Header({ floating = false, announcementVisible = false, hideDistance = '200%' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
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
    <HeaderBar $floating={floating} $announcementVisible={announcementVisible} $hidden={hidden} $hideDistance={hideDistance}>
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
            <Dropdown $open={dropdownOpen}>
              {PRODUCT_ITEMS.map(item => (
                <DropdownItem key={item.path} to={item.path} onClick={() => setDropdownOpen(false)}>
                  <DropdownIcon>{item.icon}</DropdownIcon>
                  <DropdownText>
                    <DropdownTitle>{item.title}</DropdownTitle>
                    <DropdownDesc>{item.desc}</DropdownDesc>
                  </DropdownText>
                </DropdownItem>
              ))}
            </Dropdown>
          </NavItem>
          {SIMPLE_NAV.map(({ label, path }) => (
            <NavLink key={path} to={path}>{label}</NavLink>
          ))}
        </Nav>

        <Actions>
          <CTAButton href="https://google.com" target="_blank" rel="noopener noreferrer">
            Get started
          </CTAButton>
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
        <MobileCTA href="https://google.com" target="_blank" rel="noopener noreferrer">
          Get started
        </MobileCTA>
      </MobileMenu>
    </HeaderBar>
  );
}
