import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

export const ArticleHeader = styled.header`
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 1.5rem 1.5rem;
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${tokens.ink500};
  font-size: 0.9rem;
  margin-top: 1rem;
`;

export const Avatar = styled.span`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: ${tokens.sky100};
  background-image: ${p => (p.$src ? `url(${p.$src})` : 'none')};
  background-size: cover;
  background-position: center;
  display: inline-block;
  border: 1px solid ${tokens.border};
  flex-shrink: 0;
`;

export const AuthorTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.35;
`;

export const AuthorLine = styled.span`
  color: ${tokens.ink700};
`;

export const UpdatedLine = styled.span`
  color: ${tokens.ink500};
  font-size: 0.85rem;
`;

export const BelowArticle = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 0 1.5rem 5rem;
`;

export const RelatedHeading = styled.h2`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${tokens.ink900};
  margin: 2rem 0 1rem;
`;

export const RelatedCard = styled.div`
  border: 1px solid ${tokens.border};
  border-radius: ${tokens.radius};
  background: ${tokens.white};
  padding: 0.5rem;
  margin-bottom: 3rem;
`;

export const FeedbackCard = styled.div`
  background: ${tokens.paper2};
  border-radius: ${tokens.radius};
  padding: 2rem 1.5rem;
  text-align: center;
`;

export const FeedbackText = styled.p`
  color: ${tokens.ink700};
  margin: 0 0 1.25rem;
  font-size: 1rem;
`;

export const EmojiRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`;

export const EmojiButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: ${tokens.white};
  border: 1px solid ${tokens.border};
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;

  &:hover {
    transform: scale(1.08);
    border-color: color-mix(in srgb, var(--color-accent) 40%, ${tokens.border});
  }

  &[data-selected='true'] {
    border-color: var(--color-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;

export const BreadcrumbGroupSpan = styled.span`
  color: ${tokens.ink500};
`;

export const NoTocLayout = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
