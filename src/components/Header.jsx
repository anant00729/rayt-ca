import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const spinWithDelay = keyframes`
  0%  { transform: rotate(0deg); }
  80% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
  100%{ transform: rotate(360deg); }
`;

const NAV_ITEMS = [
  { label: 'Product', path: '/product' },
  { label: 'Widgets', path: '/widgets' },
  { label: 'Customers', path: '/customers' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Resources', path: '/resources' },
];

const HeaderBar = styled.header`
  background: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 64px;

  @media (max-width: 1024px) {
    grid-template-columns: auto 1fr auto;
  }
`;

const StarIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  animation: ${spinWithDelay} 5s linear infinite;
`;

const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.5rem;
  color: var(--color-accent);
  text-decoration: none;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SignIn = styled(Link)`
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.15s;

  &:hover { opacity: 0.7; }

  @media (max-width: 1024px) { display: none; }
`;

const CTAButton = styled.a`
  background: var(--color-secondary);
  color: var(--color-primary);
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: var(--color-muted);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: auto;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--color-secondary);
    border-radius: 1px;
    transition: transform 0.2s, opacity 0.2s;
  }

  &[aria-expanded='true'] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  &[aria-expanded='true'] span:nth-child(2) {
    opacity: 0;
  }
  &[aria-expanded='true'] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    background: var(--color-primary);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 1.5rem 1.5rem;
  }
`;

const MobileNavLink = styled(Link)`
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 25%, transparent);
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }
`;

const MobileCTA = styled.a`
  display: inline-block;
  background: var(--color-secondary);
  color: var(--color-primary);
  padding: 0.625rem 1.25rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
  transition: background 0.2s;

  &:hover {
    background: var(--color-muted);
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderBar>
      <Container>
        <Logo to="/">
          <StarIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="m15.5398797 25.5859757-7.63729157 3.957929c-.49034963.2541174-1.09385945.0626134-1.3479769-.4277363-.10064257-.1942017-.13483627-.4160451-.0973418-.6315385l1.45155972-8.3426061c.05700026-.3275998-.05256879-.6621042-.29234213-.8924939l-6.13832708-5.8981019c-.39823914-.3826539-.41087345-1.0156928-.02821951-1.413932.15455902-.1608541.35846426-.2654106.57928565-.2970405l8.50841362-1.2187218c.3245128-.0464823.6056348-.2490693.7523987-.54220671l3.8157728-7.62139263c.2472523-.49384685.848032-.69375117 1.3418788-.44649881.1931499.09670361.3497952.2533489.4464988.44649881l3.8157728 7.62139263c.1467639.29313741.4278859.49572441.7523987.54220671l8.5084136 1.2187218c.5467049.0783085.9264152.584982.8481067 1.1316869-.0316299.2208213-.1361864.4247266-.2970405.5792856l-6.1383271 5.8981019c-.2397734.2303897-.3493424.5648941-.2923421.8924939l1.4515597 8.3426061c.0946716.5441101-.2696702 1.0619449-.8137802 1.1566166-.2154934.0374944-.4373368.0033007-.6315385-.0973418l-7.6372916-3.957929c-.2885253-.1495246-.6317153-.1495246-.9202406 0z" fill="var(--color-secondary)" />
          </StarIcon>
          RayT
        </Logo>

        <Nav>
          {NAV_ITEMS.map(({ label, path }) => (
            <NavLink key={path} to={path}>{label}</NavLink>
          ))}
        </Nav>

        <Actions>
          <SignIn to="/signin">Sign in</SignIn>
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
        {NAV_ITEMS.map(({ label, path }) => (
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
