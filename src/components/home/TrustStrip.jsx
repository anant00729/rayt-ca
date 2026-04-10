import { StripWrap, StripInner, StripItem, StripValue, StripLabel } from './TrustStrip.style';

export default function TrustStrip({ data }) {
  return (
    <StripWrap>
      <StripInner>
        {data.items.map((item) => (
          <StripItem key={item.label}>
            <StripValue>{item.value}</StripValue>
            <StripLabel>{item.label}</StripLabel>
          </StripItem>
        ))}
      </StripInner>
    </StripWrap>
  );
}
