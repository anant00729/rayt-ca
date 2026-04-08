import {
  Section, Left, Label, Headline, Subtitle, Divider, Badges, Badge, BadgeIcon,
  CTALink, Right, PlaceholderVisual, PlaceholderLabel,
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
        {ctaText && <CTALink href={ctaHref}>{ctaText}</CTALink>}
      </Left>
      <Right>
        <PlaceholderVisual>
          <PlaceholderLabel>Hero image</PlaceholderLabel>
        </PlaceholderVisual>
      </Right>
    </Section>
  );
}
