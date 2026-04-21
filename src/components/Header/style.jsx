import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { tokens } from '../../styles/tokens';
import { shimmerBg } from '../../styles/animations';

export const spinWithDelay = keyframes`
  0%  { transform: rotate(0deg); }
  80% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
  100%{ transform: rotate(360deg); }
`;

export const HeaderBar = styled.header`
  background: ${p => p.$whiteBg ? '#fff' : 'color-mix(in srgb, var(--color-primary) 30%, transparent)'};
  backdrop-filter: blur(20px) saturate(180%) brightness(1.05);
  -webkit-backdrop-filter: blur(20px) saturate(180%) brightness(1.05);
  box-shadow: 0 1px 0 color-mix(in srgb, white 8%, transparent), 0 4px 24px color-mix(in srgb, var(--color-primary) 20%, transparent);
  z-index: 100;

  ${({ $floating, $announcementVisible, $hidden, $hideDistance }) => $floating ? `
    position: fixed;
    top: ${$announcementVisible ? '85px' : '16px'};
    left: 50%;
    transform: translateX(-50%) translateY(${$hidden ? `calc(-${$hideDistance} - 32px)` : '0'});
    width: calc(100% - 48px);
    max-width: 1300px;
    border-radius: 6px;
    border: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);
    transition: top 0.3s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  ` : `
    position: sticky;
    top: 0;
    border-bottom: 1px solid color-mix(in srgb, var(--color-border) 50%, transparent);
    transform: translateY(${$hidden ? `-${$hideDistance}` : '0'});
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  `}
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
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  animation: ${spinWithDelay} 5s linear infinite;
`;

export const Logo = styled(Link)`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 1.9rem;
  letter-spacing: -0.02em;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  /* sky → mint gradient clip — same as "unstoppable" in the hero */
  background: linear-gradient(
    100deg,
    ${tokens.sky700} 0%,
    ${tokens.sky500} 60%,
    ${tokens.mint500} 40%,
    ${tokens.sky700} 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ${shimmerBg} 7s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-position: 30% 50%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
`;

export const DropdownTrigger = styled.button`
  background: none;
  border: none;
  color: var(--color-secondary);
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0;
  font-family: inherit;
  transition: color 0.2s;

  &:hover {
    color: var(--color-accent);
  }
`;

export const DropdownArrow = styled.svg`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: ${({ $open }) => $open ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 0.5rem;
  min-width: 340px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
  opacity: ${({ $open }) => $open ? 1 : 0};
  visibility: ${({ $open }) => $open ? 'visible' : 'hidden'};
  transform: translateX(-50%) translateY(${({ $open }) => $open ? '0' : '-8px'});
  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
  z-index: 200;
`;

export const DropdownItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;

  &:hover {
    background: color-mix(in srgb, var(--color-border) 30%, transparent);
  }
`;

export const DropdownIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--color-border) 40%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-accent);
`;

export const DropdownText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

export const DropdownTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-secondary);
`;

export const DropdownDesc = styled.span`
  font-size: 0.78rem;
  color: var(--color-muted);
  line-height: 1.4;
`;

export const NavLink = styled(Link)`
  color: var(--color-secondary);
  text-decoration: none;
  font-size: 1.2rem;
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

// Desktop CTA visibility wrapper — the <Button> primitive handles styling;
// this wrapper only hides it on mobile where <MobileCTA> takes over.
export const DesktopCTAHolder = styled.div`
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
    border-radius: 6px;
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
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  text-align: left;
  font-family: inherit;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  &:hover {
    color: var(--color-accent);
  }
`;

export const MobileDropdownItems = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  border-bottom: 1px solid color-mix(in srgb, var(--color-border) 25%, transparent);
`;

export const MobileDropItem = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0.5rem;
  text-decoration: none;
  transition: background 0.15s;
  border-radius: 6px;

  &:hover {
    background: color-mix(in srgb, var(--color-border) 20%, transparent);
  }
`;

export const MobileDropIcon = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: color-mix(in srgb, var(--color-border) 40%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-accent);
`;

export const MobileDropText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const MobileDropTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-secondary);
`;

export const MobileDropDesc = styled.span`
  font-size: 0.75rem;
  color: var(--color-muted);
  line-height: 1.35;
`;

