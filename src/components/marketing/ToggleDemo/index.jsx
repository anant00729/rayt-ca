import { useState } from 'react';
import { Card, Info, Title, Desc, ToggleWrap, ToggleLabel, Toggle, DemoArea, DemoPanel, DemoLabel, BeforeAfterTag } from './style';

export default function ToggleDemo({ title, description, beforeLabel = 'Without AI', afterLabel = 'With AI' }) {
  const [on, setOn] = useState(false);

  return (
    <Card>
      <Info>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <ToggleWrap>
          <ToggleLabel $active={!on}>Off</ToggleLabel>
          <Toggle $on={on} onClick={() => setOn(prev => !prev)} aria-label={`Toggle ${title}`} />
          <ToggleLabel $active={on}>On</ToggleLabel>
        </ToggleWrap>
      </Info>
      <DemoArea>
        <DemoPanel $bg={on ? 'color-mix(in srgb, var(--color-accent) 15%, var(--color-border))' : undefined}>
          <BeforeAfterTag $active={on}>{on ? afterLabel : beforeLabel}</BeforeAfterTag>
          <DemoLabel>{on ? `${title} — Active` : `${title} — Inactive`}</DemoLabel>
          <DemoLabel>Image placeholder</DemoLabel>
        </DemoPanel>
      </DemoArea>
    </Card>
  );
}
