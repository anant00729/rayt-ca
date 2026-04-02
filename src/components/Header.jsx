import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Logo = styled(Link)`
  font-family: 'Changa One', sans-serif;
  font-size: 1.5rem;
  color: var(--color-secondary);
  text-decoration: none;
  letter-spacing: 0.02em;
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
        <Logo to="/">RayT</Logo>

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
