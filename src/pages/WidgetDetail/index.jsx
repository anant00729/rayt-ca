import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import widgets from '../../data/widgets.json';
import { WIDGETS } from '../../components/widgets/registry';
import { useSettings } from '../../components/widgets/_shared/settings';
import { ROUTES } from '../../constants/routes';
import InspirationTabs from '../../components/InspirationTabs/InspirationTabs';
import { INSPIRATION_TAB_ORDER } from '../../data/inspirationPresets';
import {
  Page, Container, Eyebrow, Tagline, MetricStrip, MetricPill,
  Playground, SettingsPane, StageWrap, StageFrame, WidgetScroll,
  MobileToggle, PrimerCard, PrimerKicker, PrimerBody,
  FeatureMatrixWrap, FMHeader, FMRow, FMKey, FMValue,
  NotFoundWrap, TaglineRow, ViewToggleGroup, ViewToggleBtn, PreviewStage,
} from './style';

export default function WidgetDetail({ theme, onThemeChange }) {
  const { slug } = useParams();
  const widgetMeta = widgets.find((w) => w.slug === slug);
  const showcase = WIDGETS[slug];

  const initialPresetKey = showcase?.initialPresetKey || 'photography';
  const [activeTab, setActiveTab] = useState(initialPresetKey);

  const initialSettings = showcase?.usesInspiration && showcase?.presets
    ? showcase.presets[initialPresetKey].settings
    : showcase?.defaultSettings;

  const { settings, update, reset, replace } = useSettings(initialSettings);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState('desktop');

  const tabList = showcase?.usesInspiration && showcase?.presets
    ? INSPIRATION_TAB_ORDER.filter((k) => showcase.presets[k]).map((k) => showcase.presets[k])
    : [];

  const activeReviews = showcase?.usesInspiration && showcase?.presets
    ? showcase.presets[activeTab].reviews
    : showcase?.reviews;

  const handleTabSelect = (k) => {
    setActiveTab(k);
    replace(showcase.presets[k].settings);
  };

  const handleReset = () => {
    if (showcase?.usesInspiration && showcase?.presets) {
      replace(showcase.presets[activeTab].settings);
    } else {
      reset();
    }
  };

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

  const { Component, SettingsPanel, featureMatrix } = showcase;

  return (
    <Page>
      <StageWrap>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Eyebrow>Widget · {widgetMeta.category}</Eyebrow>
          <TaglineRow>
            <Tagline>
              A live playground. Every knob, every color "try it here!""
            </Tagline>
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
          </TaglineRow>

          {showcase.usesInspiration && tabList.length > 0 && (
            <InspirationTabs
              tabs={tabList}
              activeKey={activeTab}
              onSelect={handleTabSelect}
            />
          )}

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
              <SettingsPanel settings={settings} onChange={update} onReset={handleReset} />
            </SettingsPane>

            <StageWrap as="div" $bare>
              <PrimerCard>
                <PrimerKicker>Live preview</PrimerKicker>
                <PrimerBody>
                  Drag any slider or tap a color — the widget below rebuilds in real
                  time. This is the exact component shoppers see on your store.
                </PrimerBody>
              </PrimerCard>

              <PreviewStage>
                <StageFrame style={previewMode === 'mobile' ? { maxWidth: 390, margin: '0 auto', width: '100%' } : {}}>
                  <WidgetScroll>
                    <Component settings={settings} reviews={activeReviews} isMobile={previewMode === 'mobile'} />
                  </WidgetScroll>
                </StageFrame>
              </PreviewStage>
            </StageWrap>
          </Playground>

          {featureMatrix && featureMatrix.length > 0 && (
            <FeatureMatrixWrap>
              <FMHeader>What you can control</FMHeader>
              {featureMatrix.map(({ key, value }) => (
                <FMRow key={key}>
                  <FMKey>{key}</FMKey>
                  <FMValue>{value}</FMValue>
                </FMRow>
              ))}
            </FeatureMatrixWrap>
          )}
        </Container>
      </StageWrap>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
