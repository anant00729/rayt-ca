import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Footer from '../../components/Footer';
import Button from '../../components/ui/Button';
import { getPostBySlug } from '../../lib/posts';
import { formatPostDate } from '../../lib/formatDate';
import { useDocumentMeta } from '../../lib/seo';
import { extractHeadings, headingComponents } from '../../lib/markdown';
import { ROUTES } from '../../constants/routes';
import {
  Page, ArticleHeader, ArticleTitle, ArticleMeta, ArticleDate,
  Divider, Prose,
  Breadcrumb, BreadcrumbSep, BreadcrumbCurrent,
  ArticleLayout, TocSidebar, TocTitle, TocList, TocItem, TocLink,
  NotFoundContainer, NotFoundCode, NotFoundHeading, NotFoundBody,
} from './style';

function NotFound({ theme, onThemeChange }) {
  useDocumentMeta({ title: 'Article not found', description: 'This article does not exist.' });
  return (
    <Page>
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
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound theme={theme} onThemeChange={onThemeChange} />;

  return <PostView post={post} theme={theme} onThemeChange={onThemeChange} />;
}

function PostView({ post, theme, onThemeChange }) {
  useDocumentMeta({
    title: post.title,
    description: post.description,
    ogType: 'article',
    url: `https://rayt.ca/blog/${post.slug}`,
  });

  const headings = extractHeadings(post.body);

  return (
    <Page>
      <Breadcrumb aria-label="Breadcrumb">
        <Button variant="ghostLink" to={ROUTES.BLOG}>Blog</Button>
        <BreadcrumbSep aria-hidden>›</BreadcrumbSep>
        <BreadcrumbCurrent>{post.title}</BreadcrumbCurrent>
      </Breadcrumb>

      <ArticleLayout>
        <div>
          <ArticleHeader style={{ padding: '2.5rem 0 2rem' }}>
            <ArticleTitle>{post.title}</ArticleTitle>
            <ArticleMeta>
              <ArticleDate dateTime={post.date}>{formatPostDate(post.date)}</ArticleDate>
            </ArticleMeta>
          </ArticleHeader>

          <Divider style={{ maxWidth: 'none', margin: '0 0' }} />

          <Prose style={{ padding: '2.5rem 0 5rem' }}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={headingComponents}
            >
              {post.body}
            </ReactMarkdown>
          </Prose>
        </div>

        {headings.length > 0 && (
          <TocSidebar aria-label="Table of contents">
            <TocTitle>On this page</TocTitle>
            <TocList>
              {headings.map(h => (
                <TocItem key={h.id} style={{ paddingLeft: h.level === 3 ? '0.75rem' : 0 }}>
                  <TocLink href={`#${h.id}`}>{h.text}</TocLink>
                </TocItem>
              ))}
            </TocList>
          </TocSidebar>
        )}
      </ArticleLayout>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
