import Button from '../../ui/Button';
import { Banner, Title, Subtitle } from './style';

export default function CTABanner({ title, subtitle, ctaText, ctaHref = '#' }) {
  return (
    <Banner>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      <Button variant="themedInverse" size="md" href={ctaHref}>
        {ctaText}
      </Button>
    </Banner>
  );
}
