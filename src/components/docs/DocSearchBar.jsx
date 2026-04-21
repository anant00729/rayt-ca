import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

const Band = styled.section`
  background: var(--color-accent);
  padding: ${p => (p.$compact ? '1.5rem 1.5rem' : '4rem 1.5rem 4.5rem')};
  color: #fff;
`;

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  color: #fff;
  font-weight: 900;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  letter-spacing: -0.01em;
  margin: 0 0 1.5rem;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const Magnifier = styled.span`
  position: absolute;
  left: 1.1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  pointer-events: none;
  display: inline-flex;
`;

const Input = styled.input`
  width: 100%;
  font: inherit;
  font-size: 1rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${tokens.radius};
  padding: ${p => (p.$compact ? '0.9rem 1.25rem 0.9rem 3rem' : '1.2rem 1.5rem 1.2rem 3.25rem')};
  outline: none;
  transition: background 0.15s, border-color 0.15s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.85);
  }

  &:focus-visible {
    background: rgba(255, 255, 255, 0.28);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export default function DocSearchBar({
  value,
  onChange,
  onSubmit,
  headline,
  compact = false,
  placeholder = 'Search for articles…',
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(value);
  }

  return (
    <Band $compact={compact}>
      <Inner>
        {headline && <Headline>{headline}</Headline>}
        <Form onSubmit={handleSubmit} role="search">
          <Magnifier aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.25" />
              <path d="M20 20 L16.5 16.5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
            </svg>
          </Magnifier>
          <Input
            type="search"
            aria-label="Search articles"
            placeholder={placeholder}
            value={value ?? ''}
            onChange={e => onChange?.(e.target.value)}
            $compact={compact}
          />
        </Form>
      </Inner>
    </Band>
  );
}
