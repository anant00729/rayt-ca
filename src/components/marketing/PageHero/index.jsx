import Button from '../../ui/Button';
import {
  Section, Left, Label, Headline, Subtitle, Divider, Badges, Badge, BadgeIcon,
  Right, PlaceholderVisual, PlaceholderLabel,
} from './style';

export default function PageHero({ label, title, subtitle, badges = [], ctaText, ctaHref = '#' }) {
  return (
    <Section>
      <Left>
        {label && <Label>{label}</Label>}
        <Headline>{title}</Headline>
        <Subtitle>{subtitle}</Subtitle>
        {badges.length > 0 && (
          <>
            <Divider />
            <Badges>
              {badges.map(b => (
                <Badge key={b.text}>
                  <BadgeIcon>{b.icon}</BadgeIcon>
                  {b.text}
                </Badge>
              ))}
            </Badges>
            <Divider />
          </>
        )}
        {ctaText && (
          <Button
            variant="themed"
            size="md"
            href={ctaHref}
            style={{ marginTop: '1rem', width: 'fit-content' }}
          >
            {ctaText}
          </Button>
        )}
      </Left>
      <Right>
        <PlaceholderVisual>
          <PlaceholderLabel>Hero image</PlaceholderLabel>
        </PlaceholderVisual>
      </Right>
    </Section>
  );
}
