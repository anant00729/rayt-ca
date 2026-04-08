import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHero from '../../components/marketing/PageHero';
import StatsStrip from '../../components/marketing/StatsStrip';
import FeatureRow from '../../components/marketing/FeatureRow';
import CTABanner from '../../components/marketing/CTABanner';
import { Page } from './style';

const STATS = [
  { value: '5x', label: 'more sales from word-of-mouth' },
  { value: '92%', label: 'of consumers trust referrals' },
  { value: '1-click', label: 'sharing across all channels' },
];

const BADGES = [
  { icon: '🔄', text: 'Automated' },
  { icon: '🎨', text: 'Customizable' },
  { icon: '📊', text: 'Trackable' },
];

export default function CustomerReferrals({ theme, onThemeChange }) {
  return (
    <Page>
      <Header />
      <PageHero
        label="Customer Referrals"
        title="Turn happy customers into brand advocates."
        subtitle="Launch a referral program that rewards your best customers for spreading the word. Automated, customizable, and built to scale with your store."
        badges={BADGES}
        ctaText="Launch your referral program"
      />
      <StatsStrip items={STATS} />
      <FeatureRow
        title="On-Site Referral Widget"
        subtitle="Always visible, always working"
        description="Embed a beautiful referral widget directly on your store. Customers can share unique referral links via email, social media, or messaging apps — right from your product pages."
        ctaText="See the widget →"
        imagePosition="right"
      />
      <FeatureRow
        title="Post-Purchase & Post-Review Referrals"
        subtitle="Strike while the iron is hot"
        description="Prompt customers to refer friends at the moments they're most excited — right after checkout or after leaving a positive review. Capture advocacy at peak satisfaction."
        ctaText="Learn more →"
        imagePosition="left"
        placeholderBg="var(--color-accent)"
      />
      <FeatureRow
        title="Customizable Rewards"
        subtitle="Incentives that work"
        description="Offer discounts, store credits, or tiered rewards that motivate real sharing. Fully customize reward amounts, conditions, and expiration to match your business model."
        ctaText="Explore reward options →"
        imagePosition="right"
        placeholderBg="var(--color-secondary)"
      />
      <FeatureRow
        title="Revenue Tracking & Analytics"
        subtitle="Measure what matters"
        description="Track every referral from click to conversion. See which customers drive the most revenue, identify top-performing channels, and optimize your program with real data."
        ctaText="View analytics →"
        imagePosition="left"
      />
      <CTABanner
        title="Launch your referral program."
        subtitle="Turn your happiest customers into your most powerful marketing channel. Set up in minutes, start growing today."
        ctaText="Get started free"
      />
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
