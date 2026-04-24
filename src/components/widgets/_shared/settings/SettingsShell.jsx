import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import {
  PanelShell, PanelHead, PanelKicker, LiveDot,
  TabStrip, TabBtn, PanelBody,
  CtaRow, StartNowBtn, ResetLink,
} from './SettingsPanel.style';

function BoltIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

export default function SettingsShell({ tabs, initialTab = 'content', onReset }) {
  const keys = Object.keys(tabs);
  const [tab, setTab] = useState(keys.includes(initialTab) ? initialTab : keys[0]);

  return (
    <PanelShell>
      <PanelHead>
        <PanelKicker>
          <span>Customize</span>
          <LiveDot><BoltIcon /> LIVE</LiveDot>
        </PanelKicker>
        <TabStrip role="tablist">
          {keys.map((k) => (
            <TabBtn
              key={k}
              $active={tab === k}
              onClick={() => setTab(k)}
              role="tab"
              aria-selected={tab === k}
            >
              {tabs[k].label}
            </TabBtn>
          ))}
        </TabStrip>
      </PanelHead>

      <PanelBody>
        {tabs[tab].render()}
      </PanelBody>

      <CtaRow>
        <StartNowBtn as={Link} to={ROUTES.PRICING}>Start now</StartNowBtn>
        <ResetLink type="button" onClick={onReset}>Reset to defaults</ResetLink>
      </CtaRow>
    </PanelShell>
  );
}
