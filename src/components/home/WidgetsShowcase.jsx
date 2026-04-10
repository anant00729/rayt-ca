import widgets from '../../data/widgets.json';
import { HeadlineSplit } from '../text/Highlights';
import {
  ShowcaseWrap, ShowcaseInner, ShowcaseHeader, ShowcaseEyebrow,
  ShowcaseHeadline, ShowcaseSubtitle, WidgetGrid,
  WidgetCard, WidgetPreview, WidgetBody, WidgetCategory, WidgetName,
  WidgetTagline, WidgetDesc,
} from './WidgetsShowcase.style';

export default function WidgetsShowcase({ data }) {
  return (
    <ShowcaseWrap id="widgets">
      <ShowcaseInner>
        <ShowcaseHeader>
          <ShowcaseEyebrow>{data.eyebrow}</ShowcaseEyebrow>
          <ShowcaseHeadline>
            <HeadlineSplit data={data.headline} variant="gradient" />
          </ShowcaseHeadline>
          <ShowcaseSubtitle>{data.subtitle}</ShowcaseSubtitle>
        </ShowcaseHeader>

        <WidgetGrid>
          {widgets.map((w) => (
            <WidgetCard key={w.slug} $accent={w.accent}>
              <WidgetPreview $accent={w.accent} $animation={w.animation}>
                <img src={w.image} alt={`${w.name} preview`} loading="lazy" />
              </WidgetPreview>
              <WidgetBody>
                <WidgetCategory $accent={w.accent}>{w.category}</WidgetCategory>
                <WidgetName>{w.name}</WidgetName>
                <WidgetTagline>{w.tagline}</WidgetTagline>
                <WidgetDesc>{w.description}</WidgetDesc>
              </WidgetBody>
            </WidgetCard>
          ))}
        </WidgetGrid>
      </ShowcaseInner>
    </ShowcaseWrap>
  );
}
