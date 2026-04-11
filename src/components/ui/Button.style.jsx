import styled, { css } from 'styled-components';
import { tokens } from '../../styles/tokens';
import { buttonSize, transition } from '../../styles/theme';
import { shimmerBg, bouncing } from '../../styles/animations';

// ── variant styles ─────────────────────────────────────────────────────────
// Each variant is a css`` block picked by $variant prop. Keeps every
// button in the app to a single styled-component root.

const primaryVariant = css`
  --angle: 120deg;
  background: linear-gradient(var(--angle), ${tokens.ink900}, ${tokens.sky700});
  background-size: 200% 200%;
  color: #fff;
  box-shadow: ${tokens.shadowGlow};
  animation: ${shimmerBg} 6s ease-in-out infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 36px rgba(46, 111, 176, 0.28);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const secondaryVariant = css`
  background: #fff;
  color: ${tokens.ink900};
  border: 1px solid ${tokens.border};
  box-shadow: ${tokens.shadowSm};

  &:hover {
    transform: translateY(-2px);
    border-color: ${tokens.sky200};
  }
`;

const outlineLightVariant = css`
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.22);

  &:hover {
    background: rgba(255, 255, 255, 0.18);
  }
`;

const accentVariant = css`
  background: ${tokens.mint500};
  color: ${tokens.ink900};

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const ghostLinkVariant = css`
  background: none;
  color: ${tokens.sky700};
  padding: 0.4rem 0;
  border-radius: 0;
  border-bottom: 2px solid ${tokens.sky200};
  transition: gap ${transition.fast}, color ${transition.fast};

  &:hover {
    gap: 0.7rem;
    color: ${tokens.ink900};
  }
`;

const themedVariant = css`
  background: var(--color-secondary);
  color: var(--color-primary);
  border-radius: 6px;

  &:hover {
    background: var(--color-muted);
  }
`;

// Inverse of `themed` — for use inside a secondary-colored container
// (e.g. CTABanner) where the button needs to pop against the bg.
const themedInverseVariant = css`
  background: var(--color-primary);
  color: var(--color-secondary);
  border-radius: 8px;

  &:hover {
    opacity: 0.9;
  }
`;

const variantMap = {
  primary: primaryVariant,
  secondary: secondaryVariant,
  outlineLight: outlineLightVariant,
  accent: accentVariant,
  ghostLink: ghostLinkVariant,
  themed: themedVariant,
  themedInverse: themedInverseVariant,
};

// ── size styles ────────────────────────────────────────────────────────────

const sizeStyles = ($size) => {
  const { padY, padX, fs } = buttonSize[$size] || buttonSize.md;
  return css`
    padding: ${padY} ${padX};
    font-size: ${fs};
  `;
};

// ── root ──────────────────────────────────────────────────────────────────

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: ${tokens.radiusPill};
  font-family: inherit;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: transform ${transition.base}, box-shadow ${transition.base},
    border-color ${transition.base}, background ${transition.fast};

  ${({ $size }) => sizeStyles($size)};
  ${({ $variant }) => variantMap[$variant] || variantMap.primary};

  // Trailing icon slide-on-hover opt-in
  .btn-icon {
    display: inline-block;
    transition: transform ${transition.fast};
  }

  ${({ $iconAnimate }) =>
    $iconAnimate &&
    css`
      .btn-icon {
        animation: ${bouncing} 2.2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .btn-icon {
          animation: none;
        }
      }
    `};
`;
