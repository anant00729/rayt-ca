import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import DocSearchBar from '../../components/docs/DocSearchBar';
import CollectionIcon from '../../components/docs/CollectionIcon';
import ArticleRow from '../../components/docs/ArticleRow';
import { getAllCollections, searchDocs } from '../../lib/docs';
import { useDocumentMeta } from '../../lib/seo';
import { ROUTES } from '../../constants/routes';
import {
  Page, HeroWrap, Container, Grid, Card, CardIconWrap, CardBody, CardTitle,
  CardDescription, CardMeta, Avatar, Dot, ResultsCard, ResultsHeader, EmptyState,
} from './style';

const AUTHOR_NAME = 'Anant S Awasthy';
const AUTHOR_AVATAR = '/author-placeholder.svg';

export default function Docs({ theme, onThemeChange }) {
  useDocumentMeta({
    title: 'Help & Documentation',
    description: "Browse Rayt's help articles, tutorials, and guides.",
    canonical: 'https://rayt.ca/docs',
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

  const collections = useMemo(() => getAllCollections(), []);
  const results = useMemo(() => searchDocs(query), [query]);
  const isSearching = query.trim().length > 0;

  return (
    <Page>
      <HeroWrap>
        <DocSearchBar
          headline="Help, tutorials & documentation"
          value={query}
          onChange={setQuery}
        />
      </HeroWrap>

      <Container>
        {isSearching ? (
          <>
            <ResultsHeader>
              {results.length === 0
                ? `No results for "${query.trim()}"`
                : `${results.length} result${results.length === 1 ? '' : 's'} for "${query.trim()}"`}
            </ResultsHeader>
            {results.length === 0 ? (
              <ResultsCard><EmptyState>Try a different search term.</EmptyState></ResultsCard>
            ) : (
              <ResultsCard>
                {results.map(r => (
                  <ArticleRow
                    key={`${r.collection}/${r.slug}`}
                    to={ROUTES.DOCS_ARTICLE(r.collection, r.slug)}
                    title={r.title}
                    meta={r.collectionLabel}
                  />
                ))}
              </ResultsCard>
            )}
          </>
        ) : (
          <Grid>
            {collections.map(c => (
              <Card key={c.slug} to={ROUTES.DOCS_COLLECTION(c.slug)}>
                <CardIconWrap>
                  <CollectionIcon slug={c.slug} />
                </CardIconWrap>
                <CardBody>
                  <CardTitle>{c.label}</CardTitle>
                  <CardDescription>{c.description}</CardDescription>
                  <CardMeta>
                    <Avatar $src={AUTHOR_AVATAR} aria-hidden />
                    <span>1 author</span>
                    <Dot aria-hidden />
                    <span>{c.articleCount} {c.articleCount === 1 ? 'article' : 'articles'}</span>
                  </CardMeta>
                </CardBody>
              </Card>
            ))}
          </Grid>
        )}
      </Container>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
