import { HeadlineSplit } from '../text/Highlights';
import {
  HeroWrap, HeroGrid, HeroLeft, HeroEyebrow, HeroHeadline, HeroSubtitle,
  CtaRow, PrimaryCta, SecondaryCta, TrustLine,
  Collage, CollageImg3, CollageImg4, CollageImg6, CollageOrb, CollageStar,
} from './Hero.style';

export default function Hero({ data }) {
  return (
    <HeroWrap>
      <HeroGrid>
        <HeroLeft>
          <HeroEyebrow>{data.eyebrow}</HeroEyebrow>
          <HeroHeadline>
            <HeadlineSplit data={data.headline} variant="gradient" />
          </HeroHeadline>
          <HeroSubtitle>{data.subtitle}</HeroSubtitle>
          <CtaRow>
            <PrimaryCta href="/pricing">{data.ctaPrimary} →</PrimaryCta>
            <SecondaryCta href="#widgets">{data.ctaSecondary}</SecondaryCta>
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
    </HeroWrap>
  );
}
