import { useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import ReviewsList from '../../components/widgets/ReviewsList/ReviewsList';
import widgets from '../../data/widgets.json';
import reviewsListSettings from '../../data/widgetConfigs/reviewsList.json';
import dummyReviews from '../../components/widgets/ReviewsList/dummyReviews';
import { ROUTES } from '../../constants/routes';
import { tokens } from '../../styles/tokens';
import {
  Page, Container, Breadcrumb, Eyebrow, DisplayTitle, Lede, WidgetScroll,
  StageC, HeaderC, StackC, Pedestal, BadgeRow, BadgeGroup, Badge,
  Anno, AnnoLabel, ConnectorsSvg, Rail, RailCell, RailKey, RailTitle, RailDesc,
  NotFoundWrap,
} from './style';

const SHOWCASES = {
  'reviews-list': {
    Component: ReviewsList,
    settings: reviewsListSettings,
    reviews: dummyReviews,
    fakeUrl: 'yourstore.com/products/balis-climbing-arch',
  },
};

const ANNOTATIONS = [
  { pos: 'a1', color: tokens.sky700,   dot: tokens.sky500,    label: 'Section header',   body: 'Big, branded heading with overall rating — doubles as your trust anchor.' },
  { pos: 'a2', color: '#147A55',        dot: tokens.mint500,   label: 'Verified reviews', body: 'Green checkmark and date — built-in proof without extra plugins.' },
  { pos: 'a3', color: tokens.lilacDeep, dot: tokens.lilacDeep, label: 'Load more',         body: 'Paginated fetch — keeps initial render fast, scrolls to fresh content.' },
];

export default function WidgetDetail({ theme, onThemeChange }) {
  const { slug } = useParams();
  const widgetMeta = widgets.find(w => w.slug === slug);
  const showcase = SHOWCASES[slug];

  const [annoFaded, setAnnoFaded] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    setAnnoFaded(scrollRef.current.scrollTop > 24);
  }, []);

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
      <StageC>
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Breadcrumb><Link to={ROUTES.WIDGETS}>← Widgets</Link></Breadcrumb>
        </Container>

        <HeaderC>
          <Eyebrow>Widget · Review Display</Eyebrow>
          <DisplayTitle>
            Every review, front &amp; centre —{' '}
            <span className="grad">exactly where shoppers look</span>.
          </DisplayTitle>
          <Lede>
            Reviews List is the workhorse showcase: a scrollable stack of stars, words, and photos
            that quietly does the heavy lifting on every product page.
          </Lede>
        </HeaderC>

        <StackC>
          <Pedestal>
            <BadgeRow>
              <BadgeGroup>
                <Badge $variant="sky">Reviews List</Badge>
                <Badge $variant="mint">v2.1 · Shopify-ready</Badge>
              </BadgeGroup>
              <Badge $variant="clean">{showcase.fakeUrl}</Badge>
            </BadgeRow>

            <ConnectorsSvg viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true" $faded={annoFaded}>
              <path d="M 30 80 C 120 80 160 140 220 140"  fill="none" stroke={tokens.sky200}   strokeWidth="1.5" strokeDasharray="3 4" />
              <path d="M 970 300 C 880 300 840 250 780 250" fill="none" stroke={tokens.mint100} strokeWidth="1.5" strokeDasharray="3 4" />
              <path d="M 40 600 C 150 600 180 560 240 560" fill="none" stroke={tokens.lilac100} strokeWidth="1.5" strokeDasharray="3 4" />
            </ConnectorsSvg>

            {ANNOTATIONS.map(({ pos, color, dot, label, body }) => (
              <Anno key={pos} $pos={pos} $faded={annoFaded}>
                <AnnoLabel $color={color} $dot={dot}>{label}</AnnoLabel>
                <div>{body}</div>
              </Anno>
            ))}

            <WidgetScroll ref={scrollRef} onScroll={handleScroll}>
              <ReviewsList settings={showcase.settings} reviews={showcase.reviews} />
            </WidgetScroll>
          </Pedestal>
        </StackC>

        <Rail>
          <RailCell>
            <RailKey $color={tokens.sky700}>Built for</RailKey>
            <RailTitle>Product &amp; collection pages</RailTitle>
            <RailDesc>The default choice when you want every review visible, searchable, and scannable.</RailDesc>
          </RailCell>
          <RailCell>
            <RailKey $color="#147A55">Pairs with</RailKey>
            <RailTitle>AI Summary · Rating Badge</RailTitle>
            <RailDesc>Drop an AI recap at the top and a star badge in your hero — the full trust stack.</RailDesc>
          </RailCell>
          <RailCell>
            <RailKey $color={tokens.lilacDeep}>Install time</RailKey>
            <RailTitle>~90 seconds</RailTitle>
            <RailDesc>One click on Shopify. Pick colors, save. That's it — no dev required.</RailDesc>
          </RailCell>
        </Rail>
      </StageC>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
