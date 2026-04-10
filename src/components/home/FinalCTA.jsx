import { HeadlineSplit } from '../text/Highlights';
import {
  Wrap, Banner, Eyebrow, Headline, Subtitle, CtaRow, PrimaryCta, SecondaryCta,
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
          <PrimaryCta href="/pricing">
            {data.ctaPrimary} <span className="arrow">→</span>
          </PrimaryCta>
          <SecondaryCta href="/pricing">{data.ctaSecondary}</SecondaryCta>
        </CtaRow>
      </Banner>
    </Wrap>
  );
}
