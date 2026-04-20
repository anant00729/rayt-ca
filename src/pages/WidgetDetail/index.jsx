import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import ReviewsList from '../../components/widgets/ReviewsList/ReviewsList';
import widgets from '../../data/widgets.json';
import reviewsListSettings from '../../data/widgetConfigs/reviewsList.json';
import dummyReviews from '../../components/widgets/ReviewsList/dummyReviews';
import { SettingsPanel, useSettings } from '../../components/widgets/ReviewsList/settings';
import { ROUTES } from '../../constants/routes';
import {
  Page, Container, Breadcrumb, Eyebrow, Tagline, MetricStrip, MetricPill,
  Playground, SettingsPane, StageWrap, StageFrame, WidgetScroll,
  MobileToggle, PrimerCard, PrimerKicker, PrimerBody,
  FeatureMatrixWrap, FMHeader, FMRow, FMKey, FMValue,
  NotFoundWrap, PreviewToolbar, ViewToggleGroup, ViewToggleBtn,
} from './style';

const SHOWCASES = {
  'reviews-list': {
    Component: ReviewsList,
    settings: reviewsListSettings,
    reviews: dummyReviews,
  },
};

const FEATURE_MATRIX = [
  { key: 'Layout',       value: '2 layouts · media left/right · responsive stack at 700px' },
  { key: 'Container',    value: 'Background color + 0–80px padding rhythm' },
  { key: 'Review card',  value: 'Color, radius, padding, 3 shadows, toggleable border + width' },
  { key: 'Stars',        value: 'Filled + empty color · 10–24px size' },
  { key: 'Reviewer',     value: 'Name color/size/weight · verified badge · date toggle' },
  { key: 'Review text',  value: 'Color, size, truncate-to-lines with a max-lines slider' },
  { key: 'Images',       value: 'Thumbnail size 60–200px · radius 0–20px · toggle' },
  { key: 'Top bar',      value: 'Count color, star size, write-review CTA, filter & sort accent' },
  { key: 'Load more',    value: 'Per-page count, button bg/text, button radius' },
];

export default function WidgetDetail({ theme, onThemeChange }) {
  const { slug } = useParams();
  const widgetMeta = widgets.find((w) => w.slug === slug);
  const showcase = SHOWCASES[slug];

  const { settings, update, reset } = useSettings(showcase?.settings || reviewsListSettings);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState('desktop');

  if (!widgetMeta || !showcase) {
    return (
      <Page>
        <Container>
          <NotFoundWrap>
            <h2>Widget not found</h2>
            <p>No showcase is available for <strong>{slug}</strong> yet.</p>
            <Link to={ROUTES.WIDGETS}>← Back to Widgets</Link>
          </NotFoundWrap>
        </Container>
        <Footer theme={theme} onThemeChange={onThemeChange} />
      </Page>
    );
  }

  return (
    <Page>
      <StageWrap>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Eyebrow>Widget · Review Display</Eyebrow>
          <Tagline>
            A live playground. Every knob, every color "try it here!""
          </Tagline>

          <MetricStrip>
            <MetricPill>~90s install</MetricPill>
            <MetricPill $accent="mint">Shopify native</MetricPill>
            <MetricPill $accent="lilac">Fully themable</MetricPill>
          </MetricStrip>

          <MobileToggle
            type="button"
            $open={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
          >
            <span>Customize widget</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </MobileToggle>

          <Playground>
            <SettingsPane $open={mobileOpen}>
              <SettingsPanel settings={settings} onChange={update} onReset={reset} />
            </SettingsPane>

            <StageWrap as="div" $bare>
              <PrimerCard>
                <PrimerKicker>Live preview</PrimerKicker>
                <PrimerBody>
                  Drag any slider or tap a color — the widget below rebuilds in real
                  time. This is the exact component shoppers see on your store.
                </PrimerBody>
              </PrimerCard>

              <PreviewToolbar>
                <ViewToggleGroup>
                  <ViewToggleBtn
                    $active={previewMode === 'desktop'}
                    onClick={() => setPreviewMode('desktop')}
                    title="Webview"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </ViewToggleBtn>
                  <ViewToggleBtn
                    $active={previewMode === 'mobile'}
                    $last
                    onClick={() => setPreviewMode('mobile')}
                    title="Mobile view"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <circle cx="12" cy="18" r="0.5" fill="currentColor" />
                    </svg>
                  </ViewToggleBtn>
                </ViewToggleGroup>
              </PreviewToolbar>

              <StageFrame style={previewMode === 'mobile' ? { maxWidth: 390, margin: '24px auto', alignSelf: 'center', width: '100%' } : {}}>
                <WidgetScroll>
                  <ReviewsList settings={settings} reviews={showcase.reviews} isMobile={previewMode === 'mobile'} />
                </WidgetScroll>
              </StageFrame>
            </StageWrap>
          </Playground>

          <FeatureMatrixWrap>
            <FMHeader>What you can control</FMHeader>
            {FEATURE_MATRIX.map(({ key, value }) => (
              <FMRow key={key}>
                <FMKey>{key}</FMKey>
                <FMValue>{value}</FMValue>
              </FMRow>
            ))}
          </FeatureMatrixWrap>
        </Container>
      </StageWrap>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
