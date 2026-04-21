import Footer from '../../components/Footer';
import FinalCTA from '../../components/home/FinalCTA';
import content from '../../data/pricingContent.json';

import PricingHero from './PricingHero';
import PricingGrid from './PricingGrid';
import PricingFAQ from './PricingFAQ';
import { Page, Content } from './style';

export default function Pricing({ theme, onThemeChange }) {
  return (
    <Page>
      <Content>
        <PricingHero data={content.hero} />
        <PricingGrid
          plans={content.plans}
          toggle={content.toggle}
          trustNote={content.trustNote}
        />
        <PricingFAQ data={content.faq} />
        <FinalCTA data={content.finalCta} />
      </Content>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
