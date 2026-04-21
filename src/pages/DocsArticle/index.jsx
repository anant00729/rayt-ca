import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import ArticleRow from '../../components/docs/ArticleRow';
import ArticleSearch from '../../components/docs/ArticleSearch';
import HeaderBackdrop from '../../components/docs/HeaderBackdrop';
import AuthorMeta from '../../components/docs/AuthorMeta';
import { getArticle, getRelatedArticles, getCollection } from '../../lib/docs';
import { useDocumentMeta } from '../../lib/seo';
import { extractHeadings, headingComponents } from '../../lib/markdown';
import { useActiveHeading } from '../../lib/useActiveHeading';
import { ROUTES } from '../../constants/routes';
import {
  ArticleTitle, Prose,
  Breadcrumb, BreadcrumbSep, BreadcrumbCurrent,
  ArticleLayout, TocSidebar, TocTitle, TocList, TocItem, TocLink,
  NotFoundContainer, NotFoundCode, NotFoundHeading, NotFoundBody,
} from '../BlogPost/style';
import {
  Page, ArticleHeader, BelowArticle, RelatedHeading, RelatedCard,
  FeedbackCard, FeedbackText, EmojiRow, EmojiButton, BreadcrumbGroupSpan,
} from './style';

const EMOJIS = [
  { key: 'sad', char: '😞', label: 'Not helpful' },
  { key: 'neutral', char: '😐', label: 'Somewhat helpful' },
  { key: 'happy', char: '😊', label: 'Very helpful' },
];

function ArticleNotFound({ theme, onThemeChange }) {
  useDocumentMeta({ title: 'Article not found', description: 'This article does not exist.' });
  const navigate = useNavigate();
  function handleSearchSubmit(q) {
    const trimmed = (q ?? '').trim();
    navigate(trimmed ? `${ROUTES.DOCS}?q=${encodeURIComponent(trimmed)}` : ROUTES.DOCS);
  }
  return (
    <Page>
      <HeaderBackdrop />
      <NotFoundContainer>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundHeading>Article not found</NotFoundHeading>
        <NotFoundBody>The article you&apos;re looking for doesn&apos;t exist or may have moved.</NotFoundBody>
        <Button variant="secondary" to={ROUTES.DOCS}>← All Collections</Button>
      </NotFoundContainer>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}

export default function DocsArticle({ theme, onThemeChange }) {
  const { collection: collectionSlug, article: articleSlug } = useParams();
  const article = getArticle(collectionSlug, articleSlug);

  if (!article) return <ArticleNotFound theme={theme} onThemeChange={onThemeChange} />;

  return <ArticleView article={article} theme={theme} onThemeChange={onThemeChange} />;
}

function ArticleView({ article, theme, onThemeChange }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  const collection = getCollection(article.collection);
  const collectionLabel = article.collectionLabel || collection?.label || article.collection;

  const headings = extractHeadings(article.body);
  const activeId = useActiveHeading(headings);
  const related = getRelatedArticles(article.collection, article.slug, 5);

  const keywords = [
    collectionLabel,
    article.group,
    ...article.title.split(/\s+/).filter(w => w.length > 2),
  ];

  useDocumentMeta({
    title: `${article.title} — Rayt Help`,
    description: article.description,
    ogType: 'article',
    canonical: `https://rayt.ca${ROUTES.DOCS_ARTICLE(article.collection, article.slug)}`,
    keywords,
  });

  function handleSearchSubmit(q) {
    const trimmed = (q ?? '').trim();
    navigate(trimmed ? `${ROUTES.DOCS}?q=${encodeURIComponent(trimmed)}` : ROUTES.DOCS);
  }

  return (
    <Page>
      <HeaderBackdrop />

      <Breadcrumb aria-label="Breadcrumb">
        <Link to={ROUTES.DOCS} style={{ color: 'inherit', textDecoration: 'none' }}>All Collections</Link>
        <BreadcrumbSep aria-hidden>›</BreadcrumbSep>
        <Link
          to={ROUTES.DOCS_COLLECTION(article.collection)}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {collectionLabel}
        </Link>
        <BreadcrumbSep aria-hidden>›</BreadcrumbSep>
        <BreadcrumbGroupSpan>{article.group}</BreadcrumbGroupSpan>
        <BreadcrumbSep aria-hidden>›</BreadcrumbSep>
        <BreadcrumbCurrent>{article.title}</BreadcrumbCurrent>
      </Breadcrumb>

      <ArticleLayout>
        <div>
          <ArticleHeader>
            <ArticleTitle>{article.title}</ArticleTitle>
            <AuthorMeta />
          </ArticleHeader>

          <Prose>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={headingComponents}
            >
              {article.body}
            </ReactMarkdown>
          </Prose>

          <BelowArticle>
            {related.length > 0 && (
              <>
                <RelatedHeading>Related Articles</RelatedHeading>
                <RelatedCard>
                  {related.map(r => (
                    <ArticleRow
                      key={r.slug}
                      to={ROUTES.DOCS_ARTICLE(r.collection, r.slug)}
                      title={r.title}
                    />
                  ))}
                </RelatedCard>
              </>
            )}

            <FeedbackCard>
              <FeedbackText>Did this answer your question?</FeedbackText>
              <EmojiRow>
                {EMOJIS.map(e => (
                  <EmojiButton
                    key={e.key}
                    type="button"
                    aria-label={e.label}
                    aria-pressed={feedback === e.key}
                    data-selected={feedback === e.key ? 'true' : undefined}
                    onClick={() => setFeedback(e.key)}
                  >
                    {e.char}
                  </EmojiButton>
                ))}
              </EmojiRow>
            </FeedbackCard>
          </BelowArticle>
        </div>

        <TocSidebar aria-label="Table of contents">
          <ArticleSearch
            value={searchInput}
            onChange={setSearchInput}
            onSubmit={handleSearchSubmit}
          />
          {headings.length > 0 && (
            <div>
              <TocTitle>Table of contents</TocTitle>
              <TocList>
                {headings.map(h => (
                  <TocItem key={h.id} style={{ paddingLeft: h.level === 3 ? '0.75rem' : 0 }}>
                    <TocLink href={`#${h.id}`} data-active={activeId === h.id ? 'true' : undefined}>{h.text}</TocLink>
                  </TocItem>
                ))}
              </TocList>
            </div>
          )}
        </TocSidebar>
      </ArticleLayout>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
