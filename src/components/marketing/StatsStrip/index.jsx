import { Strip, Stat, StatValue, StatLabel } from './style';

export default function StatsStrip({ items = [] }) {
  return (
    <Strip $count={items.length}>
      {items.map(item => (
        <Stat key={item.label}>
          <StatValue>{item.value}</StatValue>
          <StatLabel>{item.label}</StatLabel>
        </Stat>
      ))}
    </Strip>
  );
}
