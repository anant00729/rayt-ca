import Footer from '../../components/Footer';
import content from '../../data/homeContent.json';

import Hero from '../../components/home/Hero';
import TrustStrip from '../../components/home/TrustStrip';
import PlatformSection from '../../components/home/PlatformSection';
import FeatureRows from '../../components/home/FeatureRows';
import WhyRayT from '../../components/home/WhyRayT';
import ValueGrid from '../../components/home/ValueGrid';
import FinalCTA from '../../components/home/FinalCTA';

import { Page } from './style';

export default function Home({ theme, onThemeChange }) {
  return (
    <Page>
      <Hero />
      <TrustStrip data={content.trust} />
      <PlatformSection />
      <FeatureRows />
      <WhyRayT />
      <ValueGrid data={content.valueGrid} />
      <FinalCTA data={content.finalCta} />
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
