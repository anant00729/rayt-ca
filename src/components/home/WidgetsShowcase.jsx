import widgets from '../../data/widgets.json';
import { ROUTES } from '../../constants/routes';
import { HeadlineSplit } from '../text/Highlights';
import {
  ShowcaseWrap, ShowcaseInner, ShowcaseHeader, ShowcaseEyebrow,
  ShowcaseHeadline, ShowcaseSubtitle, WidgetGrid,
  WidgetCard, WidgetLink, WidgetPreview, WidgetBody, WidgetCategory, WidgetName,
  WidgetTagline, WidgetDesc,
} from './WidgetsShowcase.style';

const LINKED_WIDGETS = new Set(['reviews-list', 'reviews-compact', 'reviews-grid']);

function CardContents({ w }) {
  return (
    <>
      <WidgetPreview $accent={w.accent} $animation={w.animation}>
        <img src={w.image} alt={`${w.name} preview`} loading="lazy" />
      </WidgetPreview>
      <WidgetBody>
        <WidgetCategory $accent={w.accent}>{w.category}</WidgetCategory>
        <WidgetName>{w.name}</WidgetName>
        <WidgetTagline>{w.tagline}</WidgetTagline>
        <WidgetDesc>{w.description}</WidgetDesc>
      </WidgetBody>
    </>
  );
}

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
          {widgets.map((w) =>
            LINKED_WIDGETS.has(w.slug) ? (
              <WidgetLink key={w.slug} to={ROUTES.WIDGET_DETAIL(w.slug)} $accent={w.accent}>
                <CardContents w={w} />
              </WidgetLink>
            ) : (
              <WidgetCard key={w.slug} $accent={w.accent}>
                <CardContents w={w} />
              </WidgetCard>
            )
          )}
        </WidgetGrid>
      </ShowcaseInner>
    </ShowcaseWrap>
  );
}
