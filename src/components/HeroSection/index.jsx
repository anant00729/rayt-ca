import { Section, Left, Label, Headline, Divider, Badges, Badge, BadgeIcon, Body, Right, Card, CardLabel } from './style';

export default function HeroSection() {
  return (
    <Section>
      <Left>
        <Label>Built for modern teams</Label>
        <Headline>Modern tools for teams that ship fast.</Headline>
        <Divider />
        <Badges>
          <Badge><BadgeIcon>⚡</BadgeIcon>Fast</Badge>
          <Badge><BadgeIcon>🔒</BadgeIcon>Secure</Badge>
          <Badge><BadgeIcon>♻</BadgeIcon>Scalable</Badge>
        </Badges>
        <Divider />
        <Body>
          Visually-stunning, easy to customize tools built for teams that move fast.
          The perfect starting point for your next project and the ultimate resource
          for shipping real products.
        </Body>
      </Left>

      <Right>
        <Card style={{ width: '58%', height: '45%', top: '2%', right: '2%', transform: 'rotate(2deg)' }} bg="var(--color-secondary)">
          <CardLabel style={{ color: 'rgba(255,255,255,0.2)' }}>Ship faster.</CardLabel>
        </Card>
        <Card style={{ width: '62%', height: '44%', top: '30%', left: '0%', transform: 'rotate(-1.5deg)' }} bg="var(--color-accent)">
          <CardLabel>Build smart.</CardLabel>
        </Card>
        <Card style={{ width: '50%', height: '38%', bottom: '2%', right: '5%', transform: 'rotate(1deg)' }} bg="var(--color-border)">
          <CardLabel>Scale easy.</CardLabel>
        </Card>
      </Right>
    </Section>
  );
}
