import {
  RowsWrap, Row, FText, StatCard, StatNum, StatCap,
  Partners, PartnersLabel, PartnersRow, PartnerBrand,
  LinkArrow, FPanel, Phone, PhoneTop, FloatBadge, Sk,
  ChatCard, ChatProd, PillName, ChatPad, LeaveReview,
  PhoneH5, RatingInline, Stars, StoryFrame, PlayBtn, WhoTag,
  GCard, GThumb, GLines, GRating,
  AiRev, AiReply, AiTags, AiTag, AiText, SendBtn, AiFoot, AiFab,
  Dot,
} from './FeatureRows.style';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}

function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  );
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="#fff">
      <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.4.5-.3.3c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.3.1.5.2.5.4.1.1.1.6-.1 1.2z"/>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z"/>
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 010-4.2V7.06H2.18a11 11 0 000 9.88l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A10.97 10.97 0 0012 1 11 11 0 002.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  );
}

/* ── Feature 1: Collect ── */
function CollectVisual() {
  return (
    <FPanel $variant="mint">
      <FloatBadge $wa>
        <WaIcon />
      </FloatBadge>
      <Phone>
        <PhoneTop>
          <BackArrow />
          <Dot $size="22px" $bg="#D3CCF5" />
          <span style={{ height: 7, borderRadius: 4, background: '#DCEBF7', flex: 1, display: 'block' }} />
        </PhoneTop>
        <ChatCard>
          <ChatProd>
            <PillName>SALT<br />&amp;<br />STONE</PillName>
          </ChatProd>
          <ChatPad>
            <h5>Tell us what you think</h5>
            <Sk $w="90%" />
            <Sk $w="90%" />
            <Sk $w="55%" />
            <LeaveReview>Leave a Review</LeaveReview>
          </ChatPad>
        </ChatCard>
      </Phone>
    </FPanel>
  );
}

/* ── Feature 2: Widgets ── */
function WidgetsVisual() {
  return (
    <FPanel $variant="sky">
      <Phone>
        <PhoneH5>Real shopper stories</PhoneH5>
        <RatingInline>
          <Stars>
            ★★★★
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <defs>
                <linearGradient id="half-star">
                  <stop offset="50%" stopColor="#fbb719"/>
                  <stop offset="50%" stopColor="#dfe6ee"/>
                </linearGradient>
              </defs>
              <path fill="url(#half-star)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.86-5-4.87 6.91-1.01z"/>
            </svg>
          </Stars>
          4.4 (84)
        </RatingInline>
        <StoryFrame>
          <PlayBtn>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </PlayBtn>
          <WhoTag>
            ★★★★★ Barbara S.{' '}
            <svg viewBox="0 0 24 24" width="12" height="12" fill="#2E6FB0">
              <path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z"/>
            </svg>
          </WhoTag>
        </StoryFrame>
      </Phone>
    </FPanel>
  );
}

/* ── Feature 3: Share everywhere ── */
function ShareVisual() {
  return (
    <FPanel $variant="mint">
      <FloatBadge>
        <GoogleIcon />
      </FloatBadge>
      <Phone $wide>
        <PhoneTop>
          <span style={{ maxWidth: 80, height: 7, borderRadius: 4, background: '#DCEBF7', display: 'block' }} />
          <span style={{ height: 7, borderRadius: 4, background: '#DCEBF7', flex: 1, display: 'block' }} />
        </PhoneTop>
        <GCard>
          <GThumb />
          <GLines>
            <Sk $w="90%" />
            <Sk $w="70%" />
            <GRating>
              <Stars style={{ color: '#fbb719' }}>★★★★★</Stars>
            </GRating>
            <Sk $w="55%" />
          </GLines>
        </GCard>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, alignItems: 'flex-start' }}>
          <Dot $size="18px" $bg="#D3CCF5" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
            <GRating>
              <Stars style={{ color: '#fbb719' }}>★★★★★</Stars>
              Rating: 4.8 — 248 votes
            </GRating>
            <Sk $w="90%" />
            <Sk $w="70%" />
          </div>
        </div>
      </Phone>
    </FPanel>
  );
}

/* ── Feature 4: AI ── */
function AiVisual() {
  return (
    <FPanel $variant="sky">
      <Phone>
        <PhoneH5>AI reply assistant</PhoneH5>
        <RatingInline style={{ marginBottom: 12 }}>
          <Stars>★★★★</Stars> 4.4 (84)
        </RatingInline>
        <AiRev>
          <Stars style={{ color: '#fbb719' }}>★★★☆☆</Stars>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', margin: '8px 0' }}>
            <Dot $size="16px" />
            <Sk $w="55%" />
          </div>
          <Sk $w="90%" $mb="6px" />
          <Sk $w="90%" $mb="6px" />
          <Sk $w="70%" />
        </AiRev>
        <AiReply>
          <AiTags>
            <span style={{ color: '#2E6FB0', fontSize: '0.8rem' }}>✦</span>
            <AiTag $on>Friendly</AiTag>
            <AiTag>Polished</AiTag>
            <AiTag>Helpful</AiTag>
          </AiTags>
          <AiText>
            Hi Jamie — thanks so much for the feedback! Glad you love the look. Sorry the fit was a little off; we'd be happy to help you find the right size whenever you're ready.
          </AiText>
          <SendBtn>Reply</SendBtn>
          <div style={{ clear: 'both' }} />
        </AiReply>
        <AiFoot>✦ AI reply</AiFoot>
        <AiFab>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 17l-5-5 5-5M4 12h11a4 4 0 014 4v2"/>
          </svg>
        </AiFab>
      </Phone>
    </FPanel>
  );
}

export default function FeatureRows() {
  return (
    <RowsWrap>
      {/* Feature 1 — Collect */}
      <Row>
        <FText>
          <h2>Gather reviews without lifting a finger</h2>
          <p>Well-timed requests, smart reminders, and easy imports mean your reviews keep coming in — product and store, unlimited on every plan, from your very first sale.</p>
          <StatCard>
            <StatNum>Unlimited</StatNum>
            <StatCap>reviews on every plan — including free</StatCap>
          </StatCard>
          <div>
            <LinkArrow>
              How collection works <ArrowIcon />
            </LinkArrow>
          </div>
        </FText>
        <CollectVisual />
      </Row>

      {/* Feature 2 — Widgets (flipped) */}
      <Row $flip id="widgets">
        <FText>
          <h2>Widgets that look like they were made for your store</h2>
          <p>Text, photos, and video galleries. Star ratings wherever shoppers need them. Every widget bends to match your brand — and is built to nudge visitors toward checkout.</p>
          <StatCard>
            <StatNum>23</StatNum>
            <StatCap>ready-to-drop widgets</StatCap>
          </StatCard>
          <div>
            <LinkArrow>
              Browse the widgets <ArrowIcon />
            </LinkArrow>
          </div>
        </FText>
        <WidgetsVisual />
      </Row>

      {/* Feature 3 — Share everywhere */}
      <Row>
        <FText>
          <h2>Put your ratings where shoppers are already looking</h2>
          <p>Push your reviews to Google, search rich results, and your favourite social shops automatically — so the trust you've earned follows customers wherever they browse and buy.</p>
          <Partners>
            <PartnersLabel>Plays nicely with:</PartnersLabel>
            <PartnersRow>
              <PartnerBrand style={{ color: '#5a31e0' }}>shop</PartnerBrand>
              <PartnerBrand style={{ color: '#0668E1' }}>∞ Meta</PartnerBrand>
              <PartnerBrand style={{ color: '#4285F4' }}>Google</PartnerBrand>
              <PartnerBrand style={{ color: '#111' }}>♪ TikTok</PartnerBrand>
            </PartnersRow>
          </Partners>
          <div>
            <LinkArrow>
              See where reviews go <ArrowIcon />
            </LinkArrow>
          </div>
        </FText>
        <ShareVisual />
      </Row>

      {/* Feature 4 — AI (flipped) */}
      <Row $flip>
        <FText>
          <h2>Let AI take the busywork off your plate</h2>
          <p>Quick review summaries that help shoppers decide. Draft replies in a tap. Automatic translation across dozens of languages. It's all built in — no add-ons, no surprise fees.</p>
          <div>
            <LinkArrow>
              See the AI tools <ArrowIcon />
            </LinkArrow>
          </div>
        </FText>
        <AiVisual />
      </Row>
    </RowsWrap>
  );
}
