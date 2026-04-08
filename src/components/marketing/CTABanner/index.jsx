import { Banner, Title, Subtitle, CTAButton } from './style';

export default function CTABanner({ title, subtitle, ctaText, ctaHref = '#' }) {
  return (
    <Banner>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <CTAButton href={ctaHref}>{ctaText}</CTAButton>
    </Banner>
  );
}
