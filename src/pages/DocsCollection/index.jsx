import { useParams, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import CollectionIcon from '../../components/docs/CollectionIcon';
import ArticleRow from '../../components/docs/ArticleRow';
import { getCollection } from '../../lib/docs';
import { useDocumentMeta } from '../../lib/seo';
import { ROUTES } from '../../constants/routes';
import {
  Breadcrumb, BreadcrumbSep, BreadcrumbCurrent,
  NotFoundContainer, NotFoundCode, NotFoundHeading, NotFoundBody,
} from '../BlogPost/style';
import {
  Page, GreenBar, Container, Header, IconTile, Title, Description,
  Meta, Avatar, Dot, GroupCard, GroupTitle, GroupHr, RowsWrap,
} from './style';

const AUTHOR_NAME = 'Anant S Awasthy';
const AUTHOR_AVATAR = '/author-placeholder.svg';

function CollectionNotFound({ theme, onThemeChange }) {
  useDocumentMeta({ title: 'Collection not found', description: 'This collection does not exist.' });
  return (
    <Page>
      <GreenBar />
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
  useDocumentMeta({
    title: `${collection.label} — Rayt Help`,
    description: collection.description,
    canonical: `https://rayt.ca${ROUTES.DOCS_COLLECTION(collection.slug)}`,
  });

  return (
    <Page>
      <GreenBar />

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

        {collection.groups.map(group => (
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
        ))}
      </Container>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
