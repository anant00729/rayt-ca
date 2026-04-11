import { HeadlineSplit } from '../text/Highlights';
import Button from '../ui/Button';
import { ROUTES } from '../../constants/routes';
import {
  Wrap, Banner, Eyebrow, Headline, Subtitle, CtaRow,
} from './FinalCTA.style';

export default function FinalCTA({ data }) {
  return (
    <Wrap>
      <Banner>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <Headline>
          <HeadlineSplit data={data.headline} variant="marker" />
        </Headline>
        <Subtitle>{data.subtitle}</Subtitle>
        <CtaRow>
          <Button variant="secondary" size="lg" to={ROUTES.PRICING} icon="→" iconAnimate>
            {data.ctaPrimary}
          </Button>
          <Button variant="outlineLight" size="lg" to={ROUTES.PRICING}>
            {data.ctaSecondary}
          </Button>
        </CtaRow>
      </Banner>
    </Wrap>
  );
}
