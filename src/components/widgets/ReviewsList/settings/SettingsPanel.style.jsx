import styled from 'styled-components';
import { tokens } from '../../../../styles/tokens';

export const PanelShell = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.74);
  backdrop-filter: blur(22px) saturate(180%);
  -webkit-backdrop-filter: blur(22px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 22px;
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.9) inset,
    0 12px 36px rgba(18, 52, 88, 0.1);
  overflow: hidden;
`;

export const PanelHead = styled.div`
  padding: 14px 16px 10px;
  border-bottom: 1px solid ${tokens.border};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PanelKicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${tokens.sky700};
`;

export const LiveDot = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #147a55;
  font-size: 0.64rem;
  letter-spacing: 0.1em;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${tokens.mint500};
    box-shadow: 0 0 0 3px rgba(82, 201, 160, 0.25);
  }
`;

export const TabStrip = styled.div`
  display: flex;
  gap: 2px;
  background: rgba(234, 244, 253, 0.55);
  padding: 3px;
  border-radius: 12px;
`;

export const TabBtn = styled.button`
  flex: 1;
  padding: 7px 10px;
  border: none;
  border-radius: 9px;
  background: ${({ $active }) => ($active ? '#ffffff' : 'transparent')};
  color: ${({ $active }) => ($active ? tokens.sky700 : tokens.ink500)};
  font-size: 0.78rem;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  letter-spacing: 0.02em;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? '0 1px 3px rgba(18, 52, 88, 0.08)' : 'none'};
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255,255,255,0.55)')};
  }
`;

export const PanelBody = styled.div`
  max-height: 640px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 6px;

  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb {
    background: rgba(14, 27, 43, 0.15);
    border-radius: 3px;
  }

  @media (max-width: 1099px) {
    max-height: 420px;
  }
`;

export const SectionWrap = styled.div`
  border-bottom: 1px solid ${tokens.border};
  &:last-child { border-bottom: none; }
`;

export const SectionHeaderBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  &:hover { background: rgba(234, 244, 253, 0.4); }
`;

export const SectionLabel = styled.span`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${tokens.ink900};
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const SectionChevron = styled.span`
  color: ${tokens.ink500};
  transition: transform 0.2s;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
  display: inline-flex;
  align-items: center;
`;

export const SectionBody = styled.div`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '2000px' : '0')};
  padding: ${({ $open }) => ($open ? '4px 16px 16px' : '0 16px')};
  transition: max-height 0.25s ease, padding 0.2s ease;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
  min-width: 0;
`;

export const FieldLabel = styled.label`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${tokens.ink700};
`;

export const NestedGroup = styled.div`
  margin-left: 14px;
  padding-left: 10px;
  border-left: 2px solid rgba(188, 216, 240, 0.55);
  min-width: 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 7px 10px;
  border: 1px solid ${tokens.borderStrong};
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.85);
  font-size: 0.82rem;
  color: ${tokens.ink900};
  box-sizing: border-box;
  &::placeholder { color: ${tokens.ink300}; }
  &:focus {
    outline: none;
    border-color: ${tokens.sky500};
    box-shadow: 0 0 0 3px rgba(90, 155, 224, 0.15);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 7px 10px;
  border: 1px solid ${tokens.borderStrong};
  border-radius: ${({ $radius }) => ($radius !== undefined ? $radius : 8)}px;
  background: rgba(255, 255, 255, 0.85);
  font-size: 0.82rem;
  color: ${tokens.ink900};
  cursor: pointer;
  transition: border-radius 420ms ease;
  @media (prefers-reduced-motion: reduce) { transition: none; }
  &:focus {
    outline: none;
    border-color: ${tokens.sky500};
  }
`;

export const SliderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

export const SliderTrack = styled.input`
  flex: 1;
  min-width: 0;
  width: 0;
  height: 4px;
  accent-color: ${tokens.sky700};
  cursor: pointer;
`;

export const SliderValueBox = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border: 1px solid ${tokens.borderStrong};
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.85);
  font-size: 0.72rem;
  color: ${tokens.ink700};
  min-width: 60px;
  white-space: nowrap;
`;

export const ColorPaletteWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  border-bottom: 1px solid ${tokens.border};
  &:last-child { border-bottom: none; }
`;

export const ColorSwatchWrap = styled.label`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${tokens.borderStrong};
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(14, 27, 43, 0.08);
`;

export const ColorSwatchInput = styled.input`
  position: absolute;
  inset: -4px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  opacity: 0;
  cursor: pointer;
`;

export const ColorSwatchPreview = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ $color }) => $color};
`;

export const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`;

export const ColorLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${tokens.ink900};
`;

export const ColorHex = styled.span`
  font-size: 0.68rem;
  color: ${tokens.ink500};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const CheckRowLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  padding: 6px 0;
  font-size: 0.8rem;
  color: ${tokens.ink700};

  input {
    margin-top: 2px;
    accent-color: ${tokens.sky700};
    flex-shrink: 0;
    cursor: pointer;
  }
`;

export const CtaRow = styled.div`
  padding: 14px 16px;
  border-top: 1px solid ${tokens.border};
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.55);
`;

export const StartNowBtn = styled.button`
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding: 11px 14px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    ${tokens.sky700} 0%,
    ${tokens.lilacDeep} 100%
  );
  color: #ffffff;
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  cursor: pointer;
  box-shadow:
    0 1px 0 0 rgba(255, 255, 255, 0.3) inset,
    0 10px 24px rgba(46, 111, 176, 0.3);
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow:
      0 1px 0 0 rgba(255, 255, 255, 0.35) inset,
      0 14px 30px rgba(46, 111, 176, 0.38);
  }

  &:active { transform: translateY(0); }
`;

export const ResetLink = styled.button`
  background: none;
  border: none;
  padding: 6px 8px;
  font-size: 0.74rem;
  font-weight: 600;
  color: ${tokens.ink500};
  cursor: pointer;
  letter-spacing: 0.02em;
  align-self: center;

  &:hover { color: ${tokens.sky700}; }
`;

export const StarBadge = styled.span`
  display: inline-flex;
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
  color: ${tokens.mint500};

  svg { width: 100%; height: 100%; }
`;
