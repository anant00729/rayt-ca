import styled from 'styled-components';
import { tokens } from '../../styles/tokens';

export const Page = styled.div`
  min-height: 100vh;
  background: transparent;
  color: ${tokens.ink900};
  font-family: 'Nunito Sans', sans-serif;
`;

export const BackBar = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
`;

export const ArticleHeader = styled.header`
  padding: 2rem 0 1.5rem;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  color: ${tokens.sky700};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
`;

export const ArticleTitle = styled.h1`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${tokens.ink900};
  margin: 0 0 1rem;
`;

export const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: ${tokens.ink500};
`;

export const ArticleDate = styled.time`
  font-weight: 700;
`;

export const Divider = styled.hr`
  max-width: 740px;
  margin: 0 auto 0;
  border: none;
  border-top: 1px solid ${tokens.border};
`;

export const Prose = styled.article`
  padding: 2.5rem 0 5rem;
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${tokens.ink700};

  h1, h2, h3, h4 {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
    color: ${tokens.ink900};
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 2.25em 0 0.75em;

    &:first-child { margin-top: 0; }
  }

  h2 { font-size: 1.45rem; }
  h3 { font-size: 1.2rem; }
  h4 { font-size: 1rem; }

  p { margin: 0 0 1.25em; }

  a {
    color: ${tokens.sky700};
    text-decoration: underline;
    text-underline-offset: 3px;
    &:hover { color: ${tokens.ink900}; }
  }

  ul, ol {
    margin: 0 0 1.25em;
    padding-left: 1.6em;

    li {
      margin-bottom: 0.4em;
    }
  }

  ul li { list-style-type: disc; }
  ol li { list-style-type: decimal; }

  blockquote {
    border-left: 3px solid ${tokens.sky200};
    background: ${tokens.sky50};
    margin: 1.5em 0;
    padding: 1em 1.25em;
    border-radius: 0 ${tokens.radiusSm} ${tokens.radiusSm} 0;
    color: ${tokens.ink700};
    font-style: normal;

    p { margin: 0; }
  }

  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.875em;
    background: ${tokens.sky100};
    color: ${tokens.ink900};
    padding: 0.15em 0.4em;
    border-radius: 4px;
    border: 1px solid ${tokens.sky200};
  }

  pre {
    background: ${tokens.ink900};
    color: ${tokens.paper};
    border-radius: ${tokens.radiusSm};
    padding: 1.25em 1.5em;
    overflow-x: auto;
    margin: 1.5em 0;

    code {
      background: none;
      border: none;
      color: inherit;
      font-size: 0.9em;
      padding: 0;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5em 0;
    font-size: 0.925rem;
  }

  th {
    background: ${tokens.sky50};
    color: ${tokens.ink900};
    font-weight: 700;
    text-align: left;
    padding: 0.6em 1em;
    border-bottom: 2px solid ${tokens.sky200};
  }

  td {
    padding: 0.55em 1em;
    border-bottom: 1px solid ${tokens.border};
    color: ${tokens.ink700};
  }

  tr:last-child td { border-bottom: none; }

  img {
    max-width: 100%;
    border-radius: ${tokens.radiusSm};
    display: block;
    margin: 1.5em 0;
  }

  strong { font-weight: 800; color: ${tokens.ink900}; }
  em { font-style: italic; }

  hr {
    border: none;
    border-top: 1px solid ${tokens.border};
    margin: 2em 0;
  }
`;

export const Breadcrumb = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${tokens.ink500};
  flex-wrap: wrap;
`;

export const BreadcrumbSep = styled.span`
  color: ${tokens.ink300};
  user-select: none;
`;

export const BreadcrumbCurrent = styled.span`
  color: ${tokens.ink700};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 320px;
`;

export const ArticleLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: start;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr minmax(260px, 340px);
  }
`;

export const TocSidebar = styled.aside`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: sticky;
    top: 2rem;
  }
`;

export const TocTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: none;
  color: ${tokens.ink900};
  margin: 0 0 0.75rem;
`;

export const TocList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TocItem = styled.li`
  padding: 0;
`;

export const TocLink = styled.a`
  display: block;
  padding: 0.6rem 1rem;
  font-size: 0.875rem;
  color: var(--color-accent);
  text-decoration: none;
  line-height: 1.4;
  border-radius: ${tokens.radius};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: color-mix(in srgb, var(--color-muted) 40%, transparent);
  }

  &[data-active='true'] {
    background: color-mix(in srgb, var(--color-accent) 16%, transparent);
    color: var(--color-accent);
    font-weight: 700;
  }
`;

export const NotFoundContainer = styled.div`
  max-width: 480px;
  margin: 6rem auto 8rem;
  padding: 0 1.5rem;
  text-align: center;
`;

export const NotFoundCode = styled.p`
  font-size: 4rem;
  font-weight: 900;
  color: ${tokens.sky100};
  margin: 0 0 0.25rem;
  line-height: 1;
`;

export const NotFoundHeading = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${tokens.ink900};
  margin: 0 0 0.75rem;
`;

export const NotFoundBody = styled.p`
  color: ${tokens.ink500};
  margin: 0 0 2rem;
`;

export const BreadcrumbGroupSpan = styled.span`
  color: ${tokens.ink500};
`;
