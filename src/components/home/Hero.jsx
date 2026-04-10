import { HeadlineSplit } from '../text/Highlights';
import {
  HeroWrap, HeroGrid, HeroLeft, HeroEyebrow, HeroHeadline, HeroSubtitle,
  CtaRow, PrimaryCta, SecondaryCta, TrustLine,
  Collage, CollageCardA, CollageCardB, CollageCardC, CollageOrb, CollageStar,
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
          <CollageCardA>
            <img src="/widgets/widget-reviews-grid.svg" alt="" />
          </CollageCardA>
          <CollageCardB>
            <img src="/widgets/widget-star-rating-badge.svg" alt="" />
          </CollageCardB>
          <CollageCardC>
            <img src="/widgets/widget-ai-summary.svg" alt="" />
          </CollageCardC>
          <CollageStar>✦</CollageStar>
        </Collage>
      </HeroGrid>
    </HeroWrap>
  );
}
