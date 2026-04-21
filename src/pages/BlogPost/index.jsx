import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import ArticleSearch from '../../components/docs/ArticleSearch';
import HeaderBackdrop from '../../components/docs/HeaderBackdrop';
import AuthorMeta from '../../components/docs/AuthorMeta';
import { getPostByCategoryAndSlug } from '../../lib/posts';
import { formatPostDate } from '../../lib/formatDate';
import { useDocumentMeta } from '../../lib/seo';
import { extractHeadings, headingComponents } from '../../lib/markdown';
import { useActiveHeading } from '../../lib/useActiveHeading';
import { ROUTES } from '../../constants/routes';
import {
  Page, ArticleHeader, ArticleTitle, Prose,
  Breadcrumb, BreadcrumbSep, BreadcrumbCurrent, BreadcrumbGroupSpan,
  ArticleLayout, TocSidebar, TocTitle, TocList, TocItem, TocLink,
  NotFoundContainer, NotFoundCode, NotFoundHeading, NotFoundBody,
} from './style';

function NotFound({ theme, onThemeChange }) {
  useDocumentMeta({ title: 'Article not found', description: 'This article does not exist.' });
  return (
    <Page>
      <HeaderBackdrop />
      <NotFoundContainer>
        <NotFoundCode>404</NotFoundCode>
        <NotFoundHeading>Article not found</NotFoundHeading>
        <NotFoundBody>The article you&apos;re looking for doesn&apos;t exist or may have moved.</NotFoundBody>
        <Button variant="secondary" to={ROUTES.BLOG}>← Back to Blog</Button>
      </NotFoundContainer>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}

export default function BlogPost({ theme, onThemeChange }) {
  const { category, slug } = useParams();
  const post = getPostByCategoryAndSlug(category, slug);

  if (!post) return <NotFound theme={theme} onThemeChange={onThemeChange} />;

  return <PostView post={post} theme={theme} onThemeChange={onThemeChange} />;
}

function PostView({ post, theme, onThemeChange }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  useDocumentMeta({
    title: post.title,
    description: post.description,
    ogType: 'article',
    url: `https://rayt.ca${ROUTES.BLOG_POST(post.category, post.slug)}`,
  });

  const headings = extractHeadings(post.body);
  const activeId = useActiveHeading(headings);

  function handleSearchSubmit(q) {
    const trimmed = (q ?? '').trim();
    navigate(trimmed ? `${ROUTES.BLOG}?q=${encodeURIComponent(trimmed)}` : ROUTES.BLOG);
  }

  return (
    <Page>
      <HeaderBackdrop />

      <Breadcrumb aria-label="Breadcrumb">
        <Link to={ROUTES.BLOG} style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
        <BreadcrumbSep aria-hidden>›</BreadcrumbSep>
        <BreadcrumbGroupSpan>{post.categoryLabel}</BreadcrumbGroupSpan>
        <BreadcrumbSep aria-hidden>›</BreadcrumbSep>
        <BreadcrumbCurrent>{post.title}</BreadcrumbCurrent>
      </Breadcrumb>

      <ArticleLayout>
        <div>
          <ArticleHeader>
            <ArticleTitle>{post.title}</ArticleTitle>
            <AuthorMeta name={post.author} updated={`Updated ${formatPostDate(post.date)}`} />
          </ArticleHeader>

          <Prose>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={headingComponents}
            >
              {post.body}
            </ReactMarkdown>
          </Prose>
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
