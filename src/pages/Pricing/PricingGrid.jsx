import { useState } from 'react';
import Button from '../../components/ui/Button';
import { EXTERNAL } from '../../constants/routes';
import {
  GridWrap, ToggleRow, ToggleGroup, ToggleBtn, SavingsPill,
  Grid, Card, Badge, PlanName, Tagline,
  PriceRow, PriceAmount, PriceSuffix, PriceFootnote,
  FeatureList, Feature, CtaSlot, TrustNote,
} from './PricingGrid.style';

function formatPrice(value) {
  if (value === 0) return 'Free';
  return `$${value}`;
}

export default function PricingGrid({ plans, toggle, trustNote }) {
  const [billing, setBilling] = useState('monthly');

  return (
    <GridWrap>
      <ToggleRow role="group" aria-label="Billing period">
        <ToggleGroup>
          <ToggleBtn
            type="button"
            $active={billing === 'monthly'}
            aria-pressed={billing === 'monthly'}
            onClick={() => setBilling('monthly')}
          >
            {toggle.monthly}
          </ToggleBtn>
          <ToggleBtn
            type="button"
            $active={billing === 'yearly'}
            aria-pressed={billing === 'yearly'}
            onClick={() => setBilling('yearly')}
          >
            {toggle.yearly}
            <SavingsPill>{toggle.savingsLabel}</SavingsPill>
          </ToggleBtn>
        </ToggleGroup>
      </ToggleRow>

      <Grid>
        {plans.map((plan) => {
          const isFeatured = Boolean(plan.badge);
          const amount = plan.price[billing];
          const isFree = amount === 0;
          return (
            <Card key={plan.id} $featured={isFeatured} aria-label={`${plan.name} plan`}>
              {plan.badge && <Badge>{plan.badge}</Badge>}
              <PlanName>{plan.name}</PlanName>
              <Tagline>{plan.tagline}</Tagline>

              <PriceRow>
                <PriceAmount>{formatPrice(amount)}</PriceAmount>
                {!isFree && <PriceSuffix>{plan.priceSuffix}</PriceSuffix>}
                {isFree && plan.priceSuffix && <PriceSuffix>{plan.priceSuffix}</PriceSuffix>}
              </PriceRow>
              <PriceFootnote>
                {isFree
                  ? 'No credit card required'
                  : billing === 'yearly'
                    ? `Billed yearly · $${amount * 12}/yr`
                    : 'Billed monthly'}
              </PriceFootnote>

              <FeatureList>
                {plan.features.map((feat) => (
                  <Feature key={feat}>{feat}</Feature>
                ))}
              </FeatureList>

              <CtaSlot>
                <Button
                  variant={plan.ctaVariant || 'secondary'}
                  size="md"
                  href={EXTERNAL.GET_STARTED}
                  icon="→"
                >
                  {plan.ctaText}
                </Button>
              </CtaSlot>
            </Card>
          );
        })}
      </Grid>

      {trustNote && <TrustNote>{trustNote}</TrustNote>}
    </GridWrap>
  );
}
