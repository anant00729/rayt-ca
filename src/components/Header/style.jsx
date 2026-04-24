import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { tokens } from '../../styles/tokens';
import { shimmerBg, twinkle } from '../../styles/animations';

export const spinWithDelay = keyframes`
  0%  { transform: rotate(0deg); }
  80% { transform: rotate(0deg); animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1); }
  100%{ transform: rotate(360deg); }
`;

export const HeaderBar = styled.header`
  background: transparent;
  z-index: 100;
  padding: 12px 24px;

  ${({ $floating, $announcementVisible, $hidden, $hideDistance }) => $floating ? `
    position: fixed;
    top: ${$announcementVisible ? '73px' : '0'};
    left: 0;
    right: 0;
    transform: translateY(${$hidden ? `calc(-${$hideDistance} - 32px)` : '0'});
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  ` : `
    position: sticky;
    top: 0;
    transform: translateY(${$hidden ? `-${$hideDistance}` : '0'});
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  `}
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  height: 58px;
  background: #fff;
  border: 1px solid rgba(14, 27, 43, 0.09);
  border-radius: 999px;
  box-shadow: 0 2px 12px rgba(14, 27, 43, 0.06);

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
  color: ${tokens.ink500};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0;
  font-family: inherit;
  transition: color 0.2s;

  &:hover {
    color: ${tokens.ink900};
  }
`;

export const DropdownArrow = styled.svg`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: ${({ $open }) => $open ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const NavLink = styled(Link)`
  color: ${tokens.ink500};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${tokens.ink900};
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
    background: #fff;
    border: 1px solid rgba(14, 27, 43, 0.09);
    border-radius: 16px;
    margin-top: 8px;
    padding: 1rem 1.5rem 1.5rem;
    box-shadow: 0 4px 24px rgba(14, 27, 43, 0.08);
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
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

/* ─────────────────────────────────────────────
   Resources dropdown — two-tile portal design
   Inspired by the home Hero's pill + sky→mint gradient
   ───────────────────────────────────────────── */

/* Variant → [tint100, accent500, ink700] used across Product + Resources tiles */
const VARIANT_TINT = {
  blog:      [tokens.sky100,  tokens.sky500,   tokens.sky700],
  docs:      [tokens.mint100, tokens.mint500,  tokens.mint500],
  reviews:   [tokens.sky100,  tokens.sky500,   tokens.sky700],
  referrals: [tokens.mint100, tokens.mint500,  tokens.mint500],
  ai:        [tokens.lilac100, tokens.lilacDeep, tokens.lilacDeep],
};
const tint = (v, i) => (VARIANT_TINT[v] ?? VARIANT_TINT.blog)[i];

export const ResourcesDropdown = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  ${({ $align }) => ($align === 'left' ? 'left: 0; right: auto;' : 'right: 0; left: auto;')}
  background: #fff;
  border: 1px solid ${tokens.sky100};
  border-radius: 14px;
  padding: 1rem;
  width: ${({ $wide }) => ($wide ? '720px' : '560px')};
  box-shadow: 0 20px 60px color-mix(in srgb, ${tokens.sky700} 18%, transparent);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: translateY(${({ $open }) => ($open ? '0' : '-8px')});
  transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
  z-index: 200;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 14px;
    background: #fff;
    z-index: -1;
    opacity: 0.55;
  }
`;

export const ResourcesEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.9);
  color: ${tokens.sky700};
  padding: 0.35rem 0.75rem;
  border-radius: ${tokens.radiusPill};
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid ${tokens.sky100};
  margin: 0.25rem 0.25rem 0.75rem;

  &::before {
    content: '✦';
    color: ${tokens.mint500};
    animation: ${twinkle} 2.4s ease-in-out infinite;
  }
`;

export const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols ?? 2}, 1fr);
  gap: 0.75rem;
`;

export const ResourceTile = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  border-radius: 12px;
  text-decoration: none;
  background: ${({ $variant }) => `linear-gradient(150deg, ${tint($variant, 0)} 0%, #fff 70%)`};
  border: 1px solid ${({ $variant }) => tint($variant, 0)};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;

  &:hover {
    transform: translateY(-3px);
    border-color: ${({ $variant }) => tint($variant, 1)};
  }

  &:hover .rayt-tile-arrow {
    transform: translateX(4px);
  }

  &::after {
    content: '';
    position: absolute;
    right: -30px;
    top: -30px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: ${({ $variant }) => `radial-gradient(circle, ${tint($variant, 1)}33 0%, transparent 70%)`};
    pointer-events: none;
  }
`;

export const ResourceIconWrap = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid ${tokens.sky100};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ $variant }) => tint($variant, 2)};
  box-shadow: ${tokens.shadowSm};
  position: relative;
  z-index: 1;
`;

export const ResourceTitle = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: ${tokens.ink900};
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
`;

export const ResourceBadge = styled.span`
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border-radius: ${tokens.radiusPill};
  background: ${({ $variant }) => tint($variant, 1)};
  color: #fff;
`;

export const ResourceDesc = styled.span`
  font-size: 0.83rem;
  color: ${tokens.ink700};
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;

export const ResourceArrow = styled.span.attrs({ className: 'rayt-tile-arrow', 'aria-hidden': true })`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ $variant }) => tint($variant, 2)};
  transition: transform 0.2s ease;
  position: relative;
  z-index: 1;

  &::after {
    content: ' →';
  }
`;


