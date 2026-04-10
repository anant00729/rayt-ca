import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import content from '../../data/homeContent.json';
import {
  Page,
  AnnouncementWrapper, AnnouncementText, AnnouncementCTA, DismissButton,
  HeroSection, HeroHeadline, HeroSubtitle, HeroCTA,
  StackingWrapper, StackingHeadline, CardsContainer,
  StackingCard, CardText, CardCTA, CardImagePlaceholder, StackingBottomSpacer,
  SuccessSection, SuccessBadge, SuccessHeadline, SuccessSubtitle,
  SuccessGrid, SuccessCard, SuccessCardImage, SuccessCardTitle, SuccessCardDesc,
  CaseStudiesSection, CaseStudiesHeadline, CaseStudiesGrid,
  CaseCard, CaseCardImage, CaseCardBadge, CaseCardBody, CaseCardTitle, CaseCardLink,
  FinalCTABanner, FinalCTAHeadline, FinalCTAButton,
} from './style';

export default function Home({ theme, onThemeChange }) {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const cardRefs = useRef([]);

  // Snap + scale animation on stacking cards via IntersectionObserver
  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transform = 'scale(1)';
          } else {
            el.style.transform = 'scale(0.97)';
          }
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
          <AnnouncementCTA href={content.announcement.ctaHref}>
            {content.announcement.ctaText}
          </AnnouncementCTA>
          <DismissButton onClick={() => setShowAnnouncement(false)} aria-label="Dismiss">
            ✕
          </DismissButton>
        </AnnouncementWrapper>
      )}

      {/* Floating Header */}
      <Header floating announcementVisible={showAnnouncement} />

      {/* Hero */}
      <HeroSection>
        <HeroHeadline>{content.hero.headline}</HeroHeadline>
        <HeroSubtitle>{content.hero.subtitle}</HeroSubtitle>
        <HeroCTA href="https://google.com" target="_blank" rel="noopener noreferrer">
          {content.hero.ctaText}
        </HeroCTA>
      </HeroSection>

      {/* Stacking Feature Cards */}
      <StackingWrapper>
        <StackingHeadline>
          <h2>{content.stackingSection.headline}</h2>
          <p>{content.stackingSection.subtitle}</p>
        </StackingHeadline>

        <CardsContainer>
          {content.stackingSection.cards.map((card, i) => (
            <StackingCard
              key={card.id}
              $index={i}
              $colorKey={card.colorKey}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <CardText>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <CardCTA href="https://google.com" target="_blank" rel="noopener noreferrer">
                  {card.ctaText} →
                </CardCTA>
              </CardText>
              <CardImagePlaceholder $colorKey={card.colorKey} />
            </StackingCard>
          ))}
        </CardsContainer>

        <StackingBottomSpacer />
      </StackingWrapper>

      {/* Obsessed with your success */}
      <SuccessSection>
        <SuccessBadge>{content.success.badge}</SuccessBadge>
        <SuccessHeadline>{content.success.headline}</SuccessHeadline>
        <SuccessSubtitle>{content.success.subtitle}</SuccessSubtitle>
        <SuccessGrid>
          {content.success.cards.map((card) => (
            <SuccessCard key={card.title}>
              <SuccessCardImage />
              <SuccessCardTitle>{card.title}</SuccessCardTitle>
              <SuccessCardDesc>{card.description}</SuccessCardDesc>
            </SuccessCard>
          ))}
        </SuccessGrid>
      </SuccessSection>

      {/* Case Studies */}
      <CaseStudiesSection>
        <CaseStudiesHeadline>{content.caseStudies.headline}</CaseStudiesHeadline>
        <CaseStudiesGrid>
          {content.caseStudies.items.map((item) => (
            <CaseCard key={item.title}>
              <CaseCardImage>
                {item.badge && <CaseCardBadge>{item.badge}</CaseCardBadge>}
              </CaseCardImage>
              <CaseCardBody>
                <CaseCardTitle>{item.title}</CaseCardTitle>
                <CaseCardLink href="#">
                  {item.ctaText} &rsaquo;
                </CaseCardLink>
              </CaseCardBody>
            </CaseCard>
          ))}
        </CaseStudiesGrid>
      </CaseStudiesSection>

      {/* Final CTA */}
      <FinalCTABanner>
        <FinalCTAHeadline>{content.finalCta.headline}</FinalCTAHeadline>
        <FinalCTAButton href="https://google.com" target="_blank" rel="noopener noreferrer">
          {content.finalCta.ctaText}
        </FinalCTAButton>
      </FinalCTABanner>

      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
