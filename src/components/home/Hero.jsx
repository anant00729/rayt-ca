import { HeadlineSplit } from '../text/Highlights';
import Button from '../ui/Button';
import { ROUTES } from '../../constants/routes';
import {
  HeroWrap, HeroInner, HeroGrid, HeroLeft, HeroEyebrow, HeroHeadline, HeroSubtitle,
  CtaRow, TrustLine,
  Collage, CollageImg3, CollageImg4, CollageImg6, CollageOrb, CollageStar,
} from './Hero.style';

export default function Hero({ data }) {
  return (
    <HeroWrap>
      <HeroInner>
      <HeroGrid>
        <HeroLeft>
          <HeroEyebrow>{data.eyebrow}</HeroEyebrow>
          <HeroHeadline>
            <HeadlineSplit data={data.headline} variant="gradient" />
          </HeroHeadline>
          <HeroSubtitle>{data.subtitle}</HeroSubtitle>
          <CtaRow>
            <Button variant="primary" size="lg" to={ROUTES.PRICING} icon="→">
              {data.ctaPrimary}
            </Button>
            <Button variant="secondary" size="lg" href="#widgets">
              {data.ctaSecondary}
            </Button>
          </CtaRow>
          <TrustLine>{data.trustLine}</TrustLine>
        </HeroLeft>

        <Collage aria-hidden>
          <CollageOrb />
<CollageImg3><img src="/hero/hero_3.png" alt="" /></CollageImg3>
          <CollageImg4><img src="/hero/hero_4.png" alt="" /></CollageImg4>
          <CollageImg6><img src="/hero/hero_6.png" alt="" /></CollageImg6>
          <CollageStar>✦</CollageStar>
        </Collage>
      </HeroGrid>
      </HeroInner>
    </HeroWrap>
  );
}
