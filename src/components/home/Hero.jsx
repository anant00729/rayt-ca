import { useState, useEffect, useRef } from 'react';
import ReviewsList from '../widgets/ReviewsList/ReviewsList';
import { INSPIRATION_PRESETS, INSPIRATION_TAB_ORDER } from '../../data/inspirationPresets';
import { ROUTES } from '../../constants/routes';
import {
  HeroSection, HeroText, EyebrowPill, EyebrowStar,
  HeadlineH1, HeadlineAccent, CtaRowWrap, PrimaryBtn, SecondaryBtn,
  WidgetBlock, TabBar, TabTrack, PillIndicator, PillTab, TabLabel,
  AutoPill,
  WidgetInner, WidgetFade, CaptionRow, CaptionLeft,
} from './Hero.style';

const CATEGORIES = INSPIRATION_TAB_ORDER.map(key => INSPIRATION_PRESETS[key]);
const ROTATION_MS = 5000;

function SparkleIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  );
}
function PauseIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="5" width="4" height="14" rx="1"/>
      <rect x="14" y="5" width="4" height="14" rx="1"/>
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="7 5 19 12 7 19 7 5"/>
    </svg>
  );
}

function CircularProgress({ progress }) {
  const r = 5;
  const circ = 2 * Math.PI * r;
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0 }}>
      <circle cx="7" cy="7" r={r} fill="none" stroke="rgba(14,27,43,0.12)" strokeWidth="1.5"/>
      <circle
        cx="7" cy="7" r={r}
        fill="none"
        stroke="url(#pg)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={circ * (1 - progress)}
        transform="rotate(-90 7 7)"
      />
      <defs>
        <linearGradient id="pg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E6FB0"/>
          <stop offset="100%" stopColor="#3ECBA0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function InspirationTabs({ activeIdx, onSelect, progress, rotating }) {
  const trackRef = useRef(null);
  const tabRefs = useRef([]);
  const [pill, setPill] = useState({ left: 4, width: 0 });

  useEffect(() => {
    const measure = () => {
      const el = tabRefs.current[activeIdx];
      if (!el || !trackRef.current) return;
      const parentRect = trackRef.current.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      setPill({ left: r.left - parentRect.left + trackRef.current.scrollLeft, width: r.width });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [activeIdx]);

  return (
    <TabBar>
      <TabTrack ref={trackRef}>
        <PillIndicator
          style={{ transform: `translateX(${pill.left}px)`, width: pill.width }}
        />
        {CATEGORIES.map((cat, i) => (
          <PillTab
            key={cat.key}
            ref={el => { tabRefs.current[i] = el; }}
            $active={i === activeIdx}
            onClick={() => onSelect(i)}
          >
            <TabLabel data-label={cat.label}>{cat.label}</TabLabel>
            {i === activeIdx && rotating && <CircularProgress progress={progress} />}
          </PillTab>
        ))}
      </TabTrack>
    </TabBar>
  );
}

const SHOWCASE_OVERRIDES = {
  reviewsPerPage: 2,
  showLoadMore: false,
  showFilterSort: false,
};

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [rotating, setRotating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrollProg, setScrollProg] = useState(0);
  const heroTextRef = useRef(null);
  const widgetRef = useRef(null);

  useEffect(() => {
    if (!rotating) return;
    const start = Date.now();
    let rafId;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(1, elapsed / ROTATION_MS);
      setProgress(p);
      if (p >= 1) {
        setActiveIdx(i => (i + 1) % CATEGORIES.length);
        setProgress(0);
      } else {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [activeIdx, rotating]);

  // Simple, fast fade: crisp at scroll 0, fully faded after ~180px of scroll.
  useEffect(() => {
    const FADE_DISTANCE = 180;
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      setScrollProg(Math.max(0, Math.min(1, y / FADE_DISTANCE)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onSelect = (i) => {
    setActiveIdx(i);
    setProgress(0);
  };

  const active = CATEGORIES[activeIdx];
  const showcaseSettings = { ...active.settings, ...SHOWCASE_OVERRIDES };

  const heroTextStyle = {
    opacity: Math.max(0, 1 - scrollProg * 1.1),
    filter: `blur(${scrollProg * 6}px)`,
    transition: 'opacity 80ms linear, filter 80ms linear',
    visibility: scrollProg >= 1 ? 'hidden' : 'visible',
  };

  return (
    <HeroSection>
      <HeroText ref={heroTextRef} style={heroTextStyle}>
        <EyebrowPill>
          <EyebrowStar>✦</EyebrowStar>
          A live playground — pick your vibe
        </EyebrowPill>

        <HeadlineH1>
          Every widget.{' '}
          <HeadlineAccent>Every&nbsp;industry.</HeadlineAccent>{' '}
          Watch it work.
        </HeadlineH1>

        <CtaRowWrap>
          <PrimaryBtn onClick={() => { window.location.href = ROUTES.PRICING; }}>
            Start free — no card needed <ArrowIcon/>
          </PrimaryBtn>
          <SecondaryBtn onClick={() => document.getElementById('widgets')?.scrollIntoView({ behavior: 'smooth' })}>
            See every widget
          </SecondaryBtn>
        </CtaRowWrap>
      </HeroText>

      <WidgetBlock ref={widgetRef}>
        <InspirationTabs activeIdx={activeIdx} onSelect={onSelect} progress={progress} rotating={rotating} />

        <div style={{ position: 'absolute', top: -4, right: 0 }}>
          <AutoPill onClick={() => setRotating(r => !r)}>
            {rotating ? <PauseIcon/> : <PlayIcon/>}
            {rotating ? 'Auto' : 'Paused'}
          </AutoPill>
        </div>

        <WidgetInner style={{ marginTop: '1rem' }}>
          <WidgetFade key={active.key}>
            <ReviewsList
              settings={showcaseSettings}
              reviews={active.reviews}
            />
          </WidgetFade>
        </WidgetInner>

        <CaptionRow>
          <CaptionLeft>
            <SparkleIcon/>
            Now showing: <strong style={{ color: '#0E1B2B', marginLeft: 4 }}>{active.label}</strong>
          </CaptionLeft>
          <span>{activeIdx + 1} of {CATEGORIES.length}</span>
        </CaptionRow>
      </WidgetBlock>
    </HeroSection>
  );
}
