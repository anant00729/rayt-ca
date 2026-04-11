import Footer from '../../components/Footer';
import PageHero from '../../components/marketing/PageHero';
import ToggleDemo from '../../components/marketing/ToggleDemo';
import CTABanner from '../../components/marketing/CTABanner';
import { Page } from './style';

const BADGES = [
  { icon: '✨', text: 'AI-Powered' },
  { icon: '⚡', text: 'Automatic' },
  { icon: '🧠', text: 'Smart' },
];

export default function AIConvert({ theme, onThemeChange }) {
  return (
    <Page>
      <PageHero
        label="AI Convert"
        title="Your reviews, superpowered."
        subtitle="Great reviews are not enough anymore. Get the most from your reviews, build stronger trust, and sell more with RayT AI Convert."
        badges={BADGES}
        ctaText="Try AI Convert"
      />
      <ToggleDemo
        title="AI Review Highlights"
        description="Automatically pulls the most persuasive phrases from long reviews and puts them front and center. Help shoppers see the most convincing feedback without reading every word."
      />
      <ToggleDemo
        title="AI Review Sorting"
        description="Automatically displays your highest-impact photos and videos first in all widgets. Surface the content that converts best, without manual curation."
      />
      <ToggleDemo
        title="AI Review Replies"
        description="Instantly generates smart, on-brand replies to customer reviews. Maintain engagement with your reviewers and show future shoppers you care — all with a single click."
      />
      <ToggleDemo
        title="AI Review Translation"
        description="Automatically translates customer reviews into any supported language, so international shoppers can read authentic feedback in their native tongue. Sell globally with local trust."
      />
      <ToggleDemo
        title="AI Alt Text"
        description="Automatically generates SEO-friendly alt-text for all your review photos and videos. Improve accessibility and search rankings without lifting a finger."
      />
      <CTABanner
        title="Unlock AI superpowers."
        subtitle="Your reviews already drive sales. With AI Convert, they'll drive even more. Start converting smarter today."
        ctaText="Get AI Convert"
      />
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
