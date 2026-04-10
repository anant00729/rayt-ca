import { Section, Left, Label, Headline, Divider, Badges, Badge, BadgeIcon, Body, Right, Card, CardLabel } from './style';

export default function HeroSection() {
  return (
    <Section>
      <Left>
        <Label>AI-Powered Reviews — Free up to 200</Label>
        <Headline>Reviews that sell. Powered by AI.</Headline>
        <Divider />
        <Badges>
          <Badge><BadgeIcon>✦</BadgeIcon>AI-Powered</Badge>
          <Badge><BadgeIcon>★</BadgeIcon>Auto-Collect</Badge>
          <Badge><BadgeIcon>◈</BadgeIcon>Free to Start</Badge>
        </Badges>
        <Divider />
        <Body>
          Let AI do the heavy lifting — auto-collect, smart-sort, and beautifully display
          product reviews that convert. Get started free with up to 200 reviews, no credit card needed.
        </Body>
      </Left>

      <Right>
        <Card style={{ width: '58%', height: '45%', top: '2%', right: '2%', transform: 'rotate(2deg)' }} bg="var(--color-secondary)">
          <CardLabel style={{ color: 'rgba(255,255,255,0.2)' }}>AI Replies.</CardLabel>
        </Card>
        <Card style={{ width: '62%', height: '44%', top: '30%', left: '0%', transform: 'rotate(-1.5deg)' }} bg="var(--color-accent)">
          <CardLabel>More Trust.</CardLabel>
        </Card>
        <Card style={{ width: '50%', height: '38%', bottom: '2%', right: '5%', transform: 'rotate(1deg)' }} bg="var(--color-border)">
          <CardLabel>More Sales.</CardLabel>
        </Card>
      </Right>
    </Section>
  );
}
