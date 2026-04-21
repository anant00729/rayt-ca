import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: 1px solid ${tokens.border};
  border-radius: 999px;
  padding: 0.55rem 1rem;
  min-width: 0;
  width: 100%;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus-within {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 18%, transparent);
  }
`;

const IconBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.ink500};
  cursor: pointer;

  svg { width: 16px; height: 16px; }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  font-family: inherit;
  font-size: 0.9rem;
  color: ${tokens.ink900};

  &::placeholder {
    color: ${tokens.ink400};
  }
`;

export default function ArticleSearch({ value, onChange, onSubmit, placeholder = 'Search articles' }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <Form onSubmit={handleSubmit} role="search">
      <IconBtn type="submit" aria-label="Search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </IconBtn>
      <Input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </Form>
  );
}
