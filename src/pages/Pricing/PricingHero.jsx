import { HeadlineSplit } from '../../components/text/Highlights';
import { HeroWrap, Eyebrow, Headline, Subtitle, TrustLine } from './PricingHero.style';

export default function PricingHero({ data }) {
  return (
    <HeroWrap>
      <Eyebrow>{data.eyebrow}</Eyebrow>
      <Headline>
        <HeadlineSplit data={data.headline} variant="sky" />
      </Headline>
      <Subtitle>{data.subtitle}</Subtitle>
      {data.trustLine && <TrustLine>{data.trustLine}</TrustLine>}
    </HeroWrap>
  );
}
