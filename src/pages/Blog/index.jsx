import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import ArticleRow from '../../components/docs/ArticleRow';
import DocSearchBar from '../../components/docs/DocSearchBar';
import { getBlogGroups, searchPosts } from '../../lib/posts';
import { formatPostDate } from '../../lib/formatDate';
import { useDocumentMeta } from '../../lib/seo';
import { ROUTES } from '../../constants/routes';
import {
  Page, HeroWrap, Container, EmptyState,
  GroupCard, GroupTitle, GroupHr, RowsWrap,
  ResultsCard, ResultsHeader, EmptyStateInline,
} from './style';

export default function Blog({ theme, onThemeChange }) {
  useDocumentMeta({
    title: 'Blog',
    description: 'Help articles and feature guides for RayT merchants.',
    url: 'https://rayt.ca/blog',
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const trimmed = query.trim();
    const next = new URLSearchParams(searchParams);
    if (trimmed) next.set('q', trimmed); else next.delete('q');
    if (next.toString() !== searchParams.toString()) {
      setSearchParams(next, { replace: true });
    }
  }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

  const groups = useMemo(() => getBlogGroups(), []);
  const results = useMemo(() => searchPosts(query), [query]);
  const isSearching = query.trim().length > 0;

  return (
    <Page>
      <HeroWrap>
        <DocSearchBar
          headline="Help & Guides"
          value={query}
          onChange={setQuery}
        />
      </HeroWrap>

      {groups.length === 0 ? (
        <EmptyState>
          <h2>No articles yet</h2>
          <p>Check back soon — we&apos;re working on guides to help you get more from RayT.</p>
        </EmptyState>
      ) : (
        <Container>
          {isSearching ? (
            <>
              <ResultsHeader>
                {results.length === 0
                  ? `No results for "${query.trim()}"`
                  : `${results.length} result${results.length === 1 ? '' : 's'} for "${query.trim()}"`}
              </ResultsHeader>
              {results.length === 0 ? (
                <ResultsCard><EmptyStateInline>Try a different search term.</EmptyStateInline></ResultsCard>
              ) : (
                <ResultsCard>
                  {results.map(p => (
                    <ArticleRow
                      key={`${p.category}/${p.slug}`}
                      to={ROUTES.BLOG_POST(p.category, p.slug)}
                      title={p.title}
                      meta={p.categoryLabel}
                    />
                  ))}
                </ResultsCard>
              )}
            </>
          ) : (
            groups.map(group => (
              <GroupCard key={group.category}>
                <GroupTitle>{group.label}</GroupTitle>
                <GroupHr />
                <RowsWrap>
                  {group.posts.map(post => (
                    <ArticleRow
                      key={post.slug}
                      to={ROUTES.BLOG_POST(post.category, post.slug)}
                      title={post.title}
                      meta={formatPostDate(post.date)}
                    />
                  ))}
                </RowsWrap>
              </GroupCard>
            ))
          )}
        </Container>
      )}

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
