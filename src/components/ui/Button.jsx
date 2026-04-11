import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './Button.style';

/**
 * Shared Button primitive used across the app.
 *
 * Renders a react-router <Link> when `to` is passed, an <a> when `href`
 * is passed, and a <button> otherwise. Visual appearance is controlled
 * by `variant` + `size`.
 *
 * Variants:
 *   primary       — dark gradient, shimmer, white text (main CTAs)
 *   secondary     — white bg, ink text, thin border (outline CTAs)
 *   outlineLight  — translucent white on dark sections
 *   accent        — mint bg, ink text (announcement bar)
 *   ghostLink     — sky text, underline, gap-on-hover (text links)
 *   themed        — uses CSS vars --color-secondary / --color-primary
 *
 * Sizes: sm | md | lg
 */
const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    to,
    href,
    icon,
    iconAnimate = false,
    children,
    type,
    as,
    ...rest
  },
  ref,
) {
  // Polymorphism: pick the underlying element based on props.
  // Explicit `as` prop always wins.
  let renderAs = as;
  if (!renderAs) {
    if (to) renderAs = Link;
    else if (href) renderAs = 'a';
    // else: default <button>
  }

  const extraProps = {};
  if (renderAs === Link) extraProps.to = to;
  if (renderAs === 'a') extraProps.href = href;
  if (!renderAs && type === undefined) extraProps.type = 'button';
  if (type !== undefined) extraProps.type = type;

  return (
    <StyledButton
      as={renderAs}
      ref={ref}
      $variant={variant}
      $size={size}
      $iconAnimate={iconAnimate}
      {...extraProps}
      {...rest}
    >
      {children}
      {icon && <span className="btn-icon" aria-hidden>{icon}</span>}
    </StyledButton>
  );
});

export default Button;
