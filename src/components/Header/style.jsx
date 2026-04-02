import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const spinWithDelay = keyframes`
  0%  { transform: rotate(0deg); }
  80% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
  100%{ transform: rotate(360deg); }
`;

export const HeaderBar = styled.header`
  background: var(--color-primary);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Container = styled.div`
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

export const StarIcon = styled.svg`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  animation: ${spinWithDelay} 5s linear infinite;
`;

export const Logo = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-accent);
  text-decoration: none;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const CTAButton = styled.a`
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

export const Hamburger = styled.button`
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

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    background: var(--color-primary);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 1.5rem 1.5rem;
  }
`;

export const MobileNavLink = styled(Link)`
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

export const MobileCTA = styled.a`
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
