import styled from 'styled-components';

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

const Wrapper = styled.section`
  align-items: center;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  margin: 0 auto;
  background: transparent;
`;

const Row = styled.div`
  padding: 4rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: 3rem;
  background: var(--color-primary);
  max-width: 1350px;
  margin: 0 auto;
  border-left: 1px solid var(--color-border);
  border-right: 1px solid var(--color-border);
  border-top: 1px solid var(--color-border);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2.5rem 1.5rem;
  }
`;

const RowLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FeatureTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-secondary);
  margin-bottom: 0.3rem;
`;

const FeatureSubtitle = styled.p`
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  color: var(--color-muted);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
`;

const FeatureDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-muted);
  margin-bottom: 1.25rem;
`;

const FeatureCTA = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-decoration: none;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 2px;
  width: fit-content;
  transition: border-color 0.15s;

  &:hover {
    border-color: var(--color-secondary);
  }
`;

const Previews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const PreviewCard = styled.div`
  background: ${({ bg }) => bg || 'var(--color-border)'};
  border-radius: 10px;
  aspect-ratio: 4/3;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 18px,
      rgba(0,0,0,0.06) 18px,
      rgba(0,0,0,0.06) 19px
    );
  }
`;

const PreviewLabel = styled.span`
  position: relative;
  font-size: 0.7rem;
  font-weight: 700;
  color: rgba(0,0,0,0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

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
