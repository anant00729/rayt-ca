import { HeadlineSplit } from '../text/Highlights';
import {
  Wrap, Card, Inner, Left, Eyebrow, Headline, Body, Cta, Perks, Perk,
} from './PricingTeaser.style';

export default function PricingTeaser({ data }) {
  return (
    <Wrap>
      <Card>
        <Inner>
          <Left>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <Headline>
              <HeadlineSplit data={data.headline} variant="sky" />
            </Headline>
            <Body>{data.description}</Body>
            <Cta href={data.ctaHref}>{data.ctaText} →</Cta>
          </Left>
          <Perks>
            {data.perks.map((perk) => (
              <Perk key={perk}>{perk}</Perk>
            ))}
          </Perks>
        </Inner>
      </Card>
    </Wrap>
  );
}
