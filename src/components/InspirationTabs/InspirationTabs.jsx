import { BarWrapper, Bar, Tab } from './InspirationTabs.style';


export default function InspirationTabs({ tabs, activeKey, onSelect }) {
  return (
    <BarWrapper>
      <Bar role="tablist" aria-label="Inspiration presets">
      {tabs.map((t) => {
        const active = t.key === activeKey;
        return (
          <Tab
            key={t.key}
            role="tab"
            aria-selected={active}
            $active={active}
            $accent={t.accent}
            onClick={() => onSelect(t.key)}
          >
            {t.label}
          </Tab>
        );
      })}
    </Bar>
    </BarWrapper>
  );
}
