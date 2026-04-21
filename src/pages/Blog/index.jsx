import Footer from '../../components/Footer';
import { getAllPosts } from '../../lib/posts';
import { formatPostDate } from '../../lib/formatDate';
import { useDocumentMeta } from '../../lib/seo';
import { ROUTES } from '../../constants/routes';
import {
  Page, Hero, Eyebrow, Heading, Subtitle,
  Grid, Card, CardDate, CardTitle, CardDescription, CardReadMore,
  EmptyState,
} from './style';

const posts = getAllPosts();

export default function Blog({ theme, onThemeChange }) {
  useDocumentMeta({
    title: 'Blog',
    description: 'Help articles and feature guides for RayT merchants.',
    url: 'https://rayt.ca/blog',
  });

  return (
    <Page>
      <Hero>
        <Eyebrow>RayT Blog</Eyebrow>
        <Heading>Help &amp; Guides</Heading>
        <Subtitle>
          Tips, tutorials, and feature guides for getting the most out of RayT on your Shopify store.
        </Subtitle>
      </Hero>

      {posts.length === 0 ? (
        <EmptyState>
          <h2>No articles yet</h2>
          <p>Check back soon — we&apos;re working on guides to help you get more from RayT.</p>
        </EmptyState>
      ) : (
        <Grid>
          {posts.map(post => (
            <Card key={post.slug} to={ROUTES.BLOG_POST(post.slug)}>
              <CardDate dateTime={post.date}>{formatPostDate(post.date)}</CardDate>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
              <CardReadMore>Read article</CardReadMore>
            </Card>
          ))}
        </Grid>
      )}

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
