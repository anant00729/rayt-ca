import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import CollectionIcon from '../../components/docs/CollectionIcon';
import ArticleRow from '../../components/docs/ArticleRow';
import ArticleSearch from '../../components/docs/ArticleSearch';
import HeaderBackdrop from '../../components/docs/HeaderBackdrop';
import { getCollection } from '../../lib/docs';
import { useDocumentMeta } from '../../lib/seo';
import { ROUTES } from '../../constants/routes';
import {
  Breadcrumb, BreadcrumbSep, BreadcrumbCurrent,
  NotFoundContainer, NotFoundCode, NotFoundHeading, NotFoundBody,
} from '../BlogPost/style';
import {
  Page, Container, Header, IconTile, Title, Description,
  Meta, Avatar, Dot, GroupCard, GroupTitle, GroupHr, RowsWrap,
  SearchWrap, EmptyRow,
} from './style';

const AUTHOR_NAME = 'Anant S Awasthy';
const AUTHOR_AVATAR = 'https://avatars.githubusercontent.com/u/20675885?s=400&u=3011a32dd3a6ebc1147a9d5a68ddda22b70b49c9&v=4';

function CollectionNotFound({ theme, onThemeChange }) {
  useDocumentMeta({ title: 'Collection not found', description: 'This collection does not exist.' });
  return (
    <Page>
      <HeaderBackdrop $tall />
      <NotFoundContainer>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundHeading>Collection not found</NotFoundHeading>
        <NotFoundBody>The collection you&apos;re looking for doesn&apos;t exist or may have moved.</NotFoundBody>
        <Button variant="secondary" to={ROUTES.DOCS}>← All Collections</Button>
      </NotFoundContainer>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}

export default function DocsCollection({ theme, onThemeChange }) {
  const { collection: collectionSlug } = useParams();
  const collection = getCollection(collectionSlug);

  if (!collection) return <CollectionNotFound theme={theme} onThemeChange={onThemeChange} />;

  return <CollectionView collection={collection} theme={theme} onThemeChange={onThemeChange} />;
}

function CollectionView({ collection, theme, onThemeChange }) {
  const [query, setQuery] = useState('');

  useDocumentMeta({
    title: `${collection.label} — Rayt Help`,
    description: collection.description,
    canonical: `https://rayt.ca${ROUTES.DOCS_COLLECTION(collection.slug)}`,
  });

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return collection.groups;
    return collection.groups
      .map(g => ({
        ...g,
        articles: g.articles.filter(a => a.title.toLowerCase().includes(q)),
      }))
      .filter(g => g.articles.length > 0);
  }, [query, collection.groups]);

  const isSearching = query.trim().length > 0;

  return (
    <Page>
      <HeaderBackdrop />

      <Breadcrumb aria-label="Breadcrumb" style={{ maxWidth: 860 }}>
        <Link to={ROUTES.DOCS} style={{ color: 'inherit', textDecoration: 'none' }}>All Collections</Link>
        <BreadcrumbSep aria-hidden>›</BreadcrumbSep>
        <BreadcrumbCurrent>{collection.label}</BreadcrumbCurrent>
      </Breadcrumb>

      <Container>
        <Header>
          <IconTile>
            <CollectionIcon slug={collection.slug} size={44} />
          </IconTile>
          <Title>{collection.label}</Title>
          <Description>{collection.description}</Description>
          <Meta>
            <Avatar $src={AUTHOR_AVATAR} aria-hidden />
            <span>By {AUTHOR_NAME}</span>
            <Dot aria-hidden />
            <span>{collection.articleCount} {collection.articleCount === 1 ? 'article' : 'articles'}</span>
          </Meta>
        </Header>

        <SearchWrap>
          <ArticleSearch
            value={query}
            onChange={setQuery}
            placeholder={`Search ${collection.label}…`}
          />
        </SearchWrap>

        {isSearching && filteredGroups.length === 0 ? (
          <GroupCard>
            <EmptyRow>No articles match &ldquo;{query.trim()}&rdquo;.</EmptyRow>
          </GroupCard>
        ) : (
          filteredGroups.map(group => (
            <GroupCard key={group.name}>
              <GroupTitle>{group.name}</GroupTitle>
              <GroupHr />
              <RowsWrap>
                {group.articles.map(a => (
                  <ArticleRow
                    key={a.slug}
                    to={ROUTES.DOCS_ARTICLE(collection.slug, a.slug)}
                    title={a.title}
                  />
                ))}
              </RowsWrap>
            </GroupCard>
          ))
        )}
      </Container>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
