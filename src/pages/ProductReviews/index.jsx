import Footer from '../../components/Footer';
import PageHero from '../../components/marketing/PageHero';
import StatsStrip from '../../components/marketing/StatsStrip';
import FeatureRow from '../../components/marketing/FeatureRow';
import CTABanner from '../../components/marketing/CTABanner';
import { Page } from './style';

const STATS = [
  { value: '91%', label: 'of shoppers read reviews before buying' },
  { value: '23+', label: 'beautiful display widgets' },
  { value: '3x', label: 'more conversions with photo reviews' },
];

const BADGES = [
  { icon: '📸', text: 'Visual' },
  { icon: '⚡', text: 'Automated' },
  { icon: '🔍', text: 'SEO-Ready' },
];

export default function ProductReviews({ theme, onThemeChange }) {
  return (
    <Page>
      <PageHero
        label="Product Reviews"
        title="Reviews that convert."
        subtitle="Boost credibility and drive sales with beautiful, authentic customer reviews. Collect photo and video reviews automatically, and display them across your store with 23+ stunning widgets."
        badges={BADGES}
        ctaText="Get started free"
      />
      <StatsStrip items={STATS} />
      <FeatureRow
        title="Beautiful Visual Reviews"
        subtitle="Photo & video first"
        description="Encourage customers to share photos and videos of your products in action. Visual reviews build trust instantly and drive significantly higher conversion rates than text-only reviews."
        ctaText="See widgets in action →"
        imagePosition="right"
      />
      <FeatureRow
        title="23+ Display Widgets"
        subtitle="Fit any storefront"
        description="From carousels and grids to popups and floating tabs — choose from over 23 beautifully designed widgets. Each one is fully customizable to match your brand's look and feel."
        ctaText="Explore all widgets →"
        imagePosition="left"
        placeholderBg="var(--color-accent)"
      />
      <FeatureRow
        title="Automated Review Collection"
        subtitle="Set it and forget it"
        description="Automatically send review request emails after purchase. Smart timing ensures you reach customers at the perfect moment, maximizing response rates without any manual effort."
        ctaText="Learn about automation →"
        imagePosition="right"
        placeholderBg="var(--color-secondary)"
      />
      <FeatureRow
        title="SEO & Marketing Power"
        subtitle="Rank higher, sell more"
        description="Review content is automatically optimized for search engines with rich snippets and structured data. Share your best reviews on social media and Google Shopping to reach new customers."
        ctaText="Explore SEO features →"
        imagePosition="left"
      />
      <CTABanner
        title="Start collecting reviews today."
        subtitle="Join thousands of merchants who trust RayT to power their social proof. Free to get started, no credit card required."
        ctaText="Install RayT free"
      />
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
