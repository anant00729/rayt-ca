import { HeadlineSplit } from '../text/Highlights';
import Button from '../ui/Button';
import {
  Wrap, Card, Inner, Left, Eyebrow, Headline, Body, Perks, Perk,
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
            <Button variant="primary" size="lg" to={data.ctaHref} icon="→">
              {data.ctaText}
            </Button>
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
