import { Wrapper, Row, RowLeft, FeatureTitle, FeatureSubtitle, FeatureDesc, FeatureCTA, Previews, PreviewCard, PreviewLabel } from './style';

const FEATURES = [
  {
    title: 'Analytics',
    subtitle: 'Real-time insights',
    description: 'A powerful analytics dashboard that gives your team full visibility into performance metrics, user behaviour, and growth trends.',
    cta: 'Explore Analytics →',
  },
  {
    title: 'Workflows',
    subtitle: 'Automation engine',
    description: 'Build and automate multi-step workflows without writing a line of glue code. Connect tools, trigger actions, and move fast.',
    cta: 'Explore Workflows →',
  },
  {
    title: 'Integrations',
    subtitle: 'Connect everything',
    description: 'One-click integrations with the tools your team already uses. Slack, GitHub, Notion, Stripe — all in one place.',
    cta: 'Browse Integrations →',
  },
];

const CARD_COLORS = [
  ['#e8edf2', '#dde5ee', '#d0dbe8'],
  ['var(--color-border)', '#c8d9c4', 'var(--color-accent)'],
  ['var(--color-secondary)', '#3a4a52', '#475b63'],
];

export default function FeaturesSection() {
  return (
    <Wrapper>
      {FEATURES.map((f, i) => (
        <Row key={f.title}>
          <RowLeft>
            <FeatureTitle>{f.title}</FeatureTitle>
            <FeatureSubtitle>{f.subtitle}</FeatureSubtitle>
            <FeatureDesc>{f.description}</FeatureDesc>
            <FeatureCTA href="https://google.com" target="_blank" rel="noopener noreferrer">
              {f.cta}
            </FeatureCTA>
          </RowLeft>
          <Previews>
            {CARD_COLORS[i].map((bg, j) => (
              <PreviewCard key={j} bg={bg}>
                <PreviewLabel style={{ color: bg === 'var(--color-secondary)' || bg === '#3a4a52' || bg === '#475b63' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.25)' }}>
                  Preview {j + 1}
                </PreviewLabel>
              </PreviewCard>
            ))}
          </Previews>
        </Row>
      ))}
    </Wrapper>
  );
}
