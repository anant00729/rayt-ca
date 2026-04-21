import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

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

export const DEFAULT_AUTHOR_NAME = 'Anant S Awasthy';
export const DEFAULT_AUTHOR_AVATAR = 'https://avatars.githubusercontent.com/u/20675885?s=400&u=3011a32dd3a6ebc1147a9d5a68ddda22b70b49c9&v=4';

export default function AuthorMeta({
  name = DEFAULT_AUTHOR_NAME,
  avatar = DEFAULT_AUTHOR_AVATAR,
  updated = 'Updated recently',
}) {
  return (
    <AuthorRow>
      <Avatar $src={avatar} aria-hidden />
      <AuthorTextBlock>
        <AuthorLine>Written by {name}</AuthorLine>
        <UpdatedLine>{updated}</UpdatedLine>
      </AuthorTextBlock>
    </AuthorRow>
  );
}
