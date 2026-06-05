import {
  Section, Inner, Grid, Head, EyebrowPill, HeadH2, HeadP,
  Cards, Card, LinkArrow,
  MiniPhone, PriceRow, PriceHead, PriceBody, PriceAmt, Sk,
  WgGrid, WgCell, WgPh, WgStars,
  ScBubble, ScTime,
} from './WhyRayT.style';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}

function PricingMini() {
  return (
    <MiniPhone>
      <h6>Simple pricing</h6>
      <PriceRow>
        <PriceHead>Free plan</PriceHead>
        <PriceBody>
          <Sk $w="90%" />
          <Sk $w="70%" />
          <PriceAmt>$0</PriceAmt>
        </PriceBody>
      </PriceRow>
      <PriceRow>
        <PriceHead $paid>Pro plan</PriceHead>
        <PriceBody>
          <Sk $w="90%" />
          <PriceAmt>$15<small> /month</small></PriceAmt>
        </PriceBody>
      </PriceRow>
    </MiniPhone>
  );
}

function WidgetsMini() {
  return (
    <MiniPhone>
      <h6>Always shipping</h6>
      <WgGrid>
        <WgCell>
          <WgStars>★★★★☆</WgStars>
          <b style={{ fontSize: '0.75rem' }}>Awesome</b>
          <WgPh />
        </WgCell>
        <WgCell>
          <WgPh />
          <b style={{ fontSize: '0.75rem' }}>Great</b>
        </WgCell>
        <WgCell $ai>
          <Sk $w="90%" />
          <Sk $w="70%" />
          <span style={{ color: '#4937A5', fontSize: '0.62rem', fontWeight: 800 }}>✦ AI-powered</span>
        </WgCell>
        <WgCell>
          <WgStars $mint>★★★★★</WgStars>
          <WgPh />
        </WgCell>
      </WgGrid>
    </MiniPhone>
  );
}

function SupportMini() {
  return (
    <MiniPhone>
      <h6>Chat with support</h6>
      <ScBubble>Can you help me match the widget to my brand colours?</ScBubble>
      <ScTime>2 minutes ago</ScTime>
      <ScBubble $us>Absolutely — just updated it for you. Refresh and let me know how it looks! 🙌</ScBubble>
      <ScTime $right>Now</ScTime>
    </MiniPhone>
  );
}

const CARDS = [
  {
    title: 'Pricing that stays simple',
    body: 'Start free, upgrade to one flat plan when you\'re ready. No order caps, no usage meters, no penalty for growing. What you pay never depends on how well you do.',
    cta: 'See the plans',
    Mini: PricingMini,
  },
  {
    title: 'Everything\'s included from day one',
    body: 'Widgets, photo and video reviews, AI helpers, Google syndication, referrals and coupons — all in the box. And we ship something new most months, never gated behind a pricier tier.',
    cta: 'Tour the features',
    Mini: WidgetsMini,
  },
  {
    title: 'Real people, ready to help',
    body: 'Friendly humans on chat, replying in minutes — not canned bots or ticket queues. Same care whether you\'re on the free plan or paying, because good help shouldn\'t be an upsell.',
    cta: 'Meet the team',
    Mini: SupportMini,
  },
];

export default function WhyRayT() {
  return (
    <Section id="pricing">
      <Inner>
        <Grid>
          <Head>
            <EyebrowPill>Why RayT</EyebrowPill>
            <HeadH2>A reviews app that grows with you</HeadH2>
            <HeadP>We're new, and we built RayT to be the partner we'd want. A few reasons stores are giving us a try:</HeadP>
          </Head>

          <Cards>
            {CARDS.map((card, i) => (
              <Card key={card.title} $idx={i}>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <LinkArrow>
                    {card.cta} <ArrowIcon />
                  </LinkArrow>
                </div>
                <card.Mini />
              </Card>
            ))}
          </Cards>
        </Grid>
      </Inner>
    </Section>
  );
}
