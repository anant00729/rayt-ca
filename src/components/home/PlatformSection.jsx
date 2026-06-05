import { Wrap, Inner, EyebrowPill, Headline, Accent, Body } from './PlatformSection.style';

export default function PlatformSection() {
  return (
    <Wrap>
      <Inner>
        <EyebrowPill>The platform</EyebrowPill>
        <Headline>
          One place to{' '}
          <Accent>collect, show off, and spread</Accent>{' '}
          your Shopify reviews
        </Headline>
        <Body>
          Gather ratings and reviews, display them beautifully, and let smart automation do the heavy lifting — so customer trust turns into real revenue.
        </Body>
      </Inner>
    </Wrap>
  );
}
