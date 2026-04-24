import { useState, useEffect, useRef } from 'react';
import Footer from '../../components/Footer';
import content from '../../data/homeContent.json';

import Hero from '../../components/home/Hero';
import TrustStrip from '../../components/home/TrustStrip';
import ValueGrid from '../../components/home/ValueGrid';
import HowItWorks from '../../components/home/HowItWorks';
import PricingTeaser from '../../components/home/PricingTeaser';
import ContactSubscribe from '../../components/home/ContactSubscribe';
import FinalCTA from '../../components/home/FinalCTA';

import Button from '../../components/ui/Button';
import { ROUTES } from '../../constants/routes';
import {
  Page,
  AnnouncementWrapper, AnnouncementText, DismissButton,
  StackingWrapper, StackingHeader, StackingEyebrow, StackingHeadline, StackingSubtitle,
  CardsContainer, StackingCard, CardText, CardImagePlaceholder, StackingBottomSpacer,
} from './style';

export default function Home({ theme, onThemeChange }) {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

  // Remove sticky from StackingHeader once first card hits its sticking point.
  useEffect(() => {
    const handleScroll = () => {
      const firstCard = cardRefs.current[0];
      if (!firstCard || !headerRef.current) return;
      const stacking = firstCard.getBoundingClientRect().top <= 140;
      headerRef.current.style.position = stacking ? 'relative' : 'sticky';
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scale animation on stacking cards via IntersectionObserver (retained behaviour).
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          el.style.transform = entry.isIntersecting ? 'scale(1)' : 'scale(0.97)';
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <Page>
      {/* Announcement Bar */}
      {showAnnouncement && (
        <AnnouncementWrapper>
          <AnnouncementText>{content.announcement.text}</AnnouncementText>
          <Button variant="accent" size="sm" to={content.announcement.ctaHref}>
            {content.announcement.ctaText}
          </Button>
          <DismissButton onClick={() => setShowAnnouncement(false)} aria-label="Dismiss">
            ✕
          </DismissButton>
        </AnnouncementWrapper>
      )}

      {/* Hero */}
      <Hero />

      {/* Trust strip */}
      <TrustStrip data={content.trust} />

      {/* Value features grid (9 cells) */}
      <ValueGrid data={content.valueGrid} />

      {/* How it works */}
      <HowItWorks data={content.howItWorks} />

      {/* Pricing teaser */}
      <PricingTeaser data={content.pricingTeaser} />

      {/* Contact + Subscribe */}
      <ContactSubscribe data={content.contactSubscribe} />

      {/* Final CTA */}
      <FinalCTA data={content.finalCta} />

      {/* Stacking cards (retained, restyled with cool palette) — just above footer */}
      <StackingWrapper>
        <StackingHeader ref={headerRef}>
          <StackingEyebrow>{content.stacking.eyebrow}</StackingEyebrow>
          <StackingHeadline>{content.stacking.headline}</StackingHeadline>
          <StackingSubtitle>{content.stacking.subtitle}</StackingSubtitle>
        </StackingHeader>

        <CardsContainer>
          {content.stacking.cards.map((card, i) => (
            <StackingCard
              key={card.id}
              $index={i}
              $colorKey={card.colorKey}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <CardText>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Button
                  variant="secondary"
                  size="md"
                  to={ROUTES.PRICING}
                  icon="→"
                  style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                >
                  {card.ctaText}
                </Button>
              </CardText>
              <CardImagePlaceholder $colorKey={card.colorKey} />
            </StackingCard>
          ))}
        </CardsContainer>

        <StackingBottomSpacer />
      </StackingWrapper>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
