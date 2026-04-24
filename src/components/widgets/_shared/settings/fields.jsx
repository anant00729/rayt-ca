import { useState } from 'react';
import {
  SectionWrap, SectionHeaderBtn, SectionLabel, SectionChevron, SectionBody,
  FieldGroup, FieldLabel,
  ColorRow, ColorSwatchWrap, ColorSwatchInput, ColorSwatchPreview,
  ColorInfo, ColorLabel, ColorHex,
  StyledSelect, StyledInput,
  SliderRow, SliderTrack, SliderValueBox,
  CheckRowLabel, StarBadge,
} from './SettingsPanel.style';

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function StarSvg() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.25l2.952 5.982 6.6.96-4.776 4.656 1.128 6.576L12 17.35l-5.904 3.074 1.128-6.576L2.448 9.192l6.6-.96L12 2.25z" />
    </svg>
  );
}

export const StarIconLabel = () => (
  <StarBadge><StarSvg /></StarBadge>
);

export function Section({ label, defaultOpen = false, labelExtra, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <SectionWrap>
      <SectionHeaderBtn type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <SectionLabel>
          {label}
          {labelExtra}
        </SectionLabel>
        <SectionChevron $open={open}><ChevronDown /></SectionChevron>
      </SectionHeaderBtn>
      <SectionBody $open={open} aria-hidden={!open}>
        {open && children}
      </SectionBody>
    </SectionWrap>
  );
}

export function ColorField({ fieldKey, label, value, onChange }) {
  return (
    <ColorRow>
      <ColorSwatchWrap>
        <ColorSwatchPreview $color={value} />
        <ColorSwatchInput
          type="color"
          value={value || '#000000'}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          aria-label={label}
        />
      </ColorSwatchWrap>
      <ColorInfo>
        <ColorLabel>{label}</ColorLabel>
        <ColorHex>{value}</ColorHex>
      </ColorInfo>
    </ColorRow>
  );
}

export function Opts({ list, settingKey, settings, set }) {
  if (!list) return null;
  return (
    <StyledSelect $radius={settings.selectRadius} value={settings[settingKey]} onChange={(e) => set(settingKey, e.target.value)}>
      {list.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </StyledSelect>
  );
}

export function CheckRow({ label, checked, onChange }) {
  return (
    <CheckRowLabel>
      <input type="checkbox" checked={!!checked} onChange={onChange} />
      <span>{label}</span>
    </CheckRowLabel>
  );
}

export function SliderField({
  label, settingKey, settings, set, min, max, step, defaultValue, suffix = 'px',
}) {
  const raw = settings[settingKey];
  const value = Number.isFinite(Number(raw)) ? Number(raw) : defaultValue;
  return (
    <FieldGroup>
      <FieldLabel>{label}</FieldLabel>
      <SliderRow>
        <SliderTrack
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => set(settingKey, Number(e.target.value))}
          aria-label={label}
        />
        <SliderValueBox>{value}{suffix ? ` ${suffix}` : ''}</SliderValueBox>
      </SliderRow>
    </FieldGroup>
  );
}

export function TextField({ label, settingKey, settings, set, placeholder }) {
  return (
    <FieldGroup>
      <FieldLabel>{label}</FieldLabel>
      <StyledInput
        value={settings[settingKey] ?? ''}
        onChange={(e) => set(settingKey, e.target.value)}
        placeholder={placeholder}
      />
    </FieldGroup>
  );
}

export function NumberField({ label, settingKey, settings, set, min, max }) {
  return (
    <FieldGroup>
      <FieldLabel>{label}</FieldLabel>
      <StyledInput
        type="number"
        min={min}
        max={max}
        value={settings[settingKey] ?? 0}
        onChange={(e) => set(settingKey, Number(e.target.value))}
        style={{ width: 96 }}
      />
    </FieldGroup>
  );
}
