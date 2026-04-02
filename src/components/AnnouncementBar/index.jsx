import { Bar, Pill, Arrow } from './style';

export default function AnnouncementBar() {
  return (
    <Bar>
      <Pill href="https://google.com" target="_blank" rel="noopener noreferrer">
        ✦ Introducing RayT &nbsp;·&nbsp; Building tools for teams that ship fast
        <Arrow>→</Arrow>
      </Pill>
    </Bar>
  );
}
