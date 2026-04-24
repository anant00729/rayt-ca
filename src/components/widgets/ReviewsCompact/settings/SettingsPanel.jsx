import { OPTIONS } from './options';
import {
  SettingsShell,
  Section, ColorField, Opts, CheckRow, SliderField, TextField,
  FieldGroup, FieldLabel, NestedGroup, ColorPaletteWrap,
} from '../../_shared/settings';

export default function SettingsPanel({ settings, onChange, onReset }) {
  const set = onChange;

  const renderContent = () => (
    <>
      <Section label="Section header" defaultOpen>
        <CheckRow
          label="Show section header"
          checked={!!settings.showSectionHeader}
          onChange={(e) => set('showSectionHeader', e.target.checked)}
        />
        {settings.showSectionHeader && (
          <NestedGroup>
            <TextField label="Title text" settingKey="sectionTitleText" settings={settings} set={set} />
            <ColorPaletteWrap>
              <ColorField fieldKey="sectionTitleColor" label="Title color" value={settings.sectionTitleColor} onChange={set} />
            </ColorPaletteWrap>
            <SliderField label="Title size" settingKey="sectionTitleSize" settings={settings} set={set} min={16} max={80} step={2} defaultValue={40} />
            <FieldGroup>
              <FieldLabel>Title weight</FieldLabel>
              <Opts list={OPTIONS.reviewerNameWeight} settingKey="sectionTitleWeight" settings={settings} set={set} />
            </FieldGroup>
          </NestedGroup>
        )}
      </Section>

      <Section label="Rating summary">
        <CheckRow
          label="Show average rating"
          checked={!!settings.showAvgRating}
          onChange={(e) => set('showAvgRating', e.target.checked)}
        />
        {settings.showAvgRating && (
          <NestedGroup>
            <ColorPaletteWrap>
              <ColorField fieldKey="avgRatingColor" label="Average color" value={settings.avgRatingColor} onChange={set} />
            </ColorPaletteWrap>
            <SliderField label="Average size" settingKey="avgRatingSize" settings={settings} set={set} min={24} max={96} step={2} defaultValue={48} />
          </NestedGroup>
        )}
        <CheckRow
          label="Show rating breakdown"
          checked={!!settings.showRatingBreakdown}
          onChange={(e) => set('showRatingBreakdown', e.target.checked)}
        />
        {settings.showRatingBreakdown && (
          <NestedGroup>
            <ColorPaletteWrap>
              <ColorField fieldKey="breakdownBarColor" label="Bar color" value={settings.breakdownBarColor} onChange={set} />
              <ColorField fieldKey="breakdownBarBgColor" label="Bar track" value={settings.breakdownBarBgColor} onChange={set} />
              <ColorField fieldKey="breakdownTextColor" label="Text color" value={settings.breakdownTextColor} onChange={set} />
            </ColorPaletteWrap>
          </NestedGroup>
        )}
      </Section>

      <Section label="Top bar">
        <CheckRow
          label="Show top bar"
          checked={!!settings.showTopBar}
          onChange={(e) => set('showTopBar', e.target.checked)}
        />
        {settings.showTopBar && (
          <NestedGroup>
            <ColorPaletteWrap>
              <ColorField fieldKey="topBarCountColor" label="Count color" value={settings.topBarCountColor} onChange={set} />
            </ColorPaletteWrap>
            <SliderField label="Star size" settingKey="topBarStarSize" settings={settings} set={set} min={12} max={28} step={1} defaultValue={18} />
            <SliderField label="Count size" settingKey="topBarCountSize" settings={settings} set={set} min={11} max={20} step={1} defaultValue={14} />
          </NestedGroup>
        )}
      </Section>

      <Section label="Write a review">
        <CheckRow
          label="Show write-review button"
          checked={!!settings.showWriteReviewBtn}
          onChange={(e) => set('showWriteReviewBtn', e.target.checked)}
        />
        {settings.showWriteReviewBtn && (
          <NestedGroup>
            <TextField label="Button text" settingKey="writeReviewBtnText" settings={settings} set={set} />
            <FieldGroup>
              <FieldLabel>Style</FieldLabel>
              <Opts list={OPTIONS.writeReviewBtnStyle} settingKey="writeReviewBtnStyle" settings={settings} set={set} />
            </FieldGroup>
            <ColorPaletteWrap>
              <ColorField fieldKey="writeReviewBtnBgColor" label="Background" value={settings.writeReviewBtnBgColor} onChange={set} />
              <ColorField fieldKey="writeReviewBtnTextColor" label="Text" value={settings.writeReviewBtnTextColor} onChange={set} />
              <ColorField fieldKey="writeReviewBtnBorderColor" label="Border" value={settings.writeReviewBtnBorderColor} onChange={set} />
            </ColorPaletteWrap>
            <SliderField label="Radius" settingKey="writeReviewBtnRadius" settings={settings} set={set} min={0} max={24} step={1} defaultValue={6} />
          </NestedGroup>
        )}
      </Section>

      <Section label="Filter &amp; sort">
        <CheckRow
          label="Show filter &amp; sort"
          checked={!!settings.showFilterSort}
          onChange={(e) => set('showFilterSort', e.target.checked)}
        />
        {settings.showFilterSort && (
          <NestedGroup>
            <ColorPaletteWrap>
              <ColorField fieldKey="filterSortIconColor" label="Accent color" value={settings.filterSortIconColor} onChange={set} />
            </ColorPaletteWrap>
            <FieldGroup>
              <FieldLabel>Default sort</FieldLabel>
              <Opts list={OPTIONS.defaultSort} settingKey="defaultSort" settings={settings} set={set} />
            </FieldGroup>
          </NestedGroup>
        )}
      </Section>

      <Section label="Load more">
        <CheckRow
          label="Show load-more button"
          checked={!!settings.showLoadMore}
          onChange={(e) => set('showLoadMore', e.target.checked)}
        />
        {settings.showLoadMore && (
          <NestedGroup>
            <TextField label="Button text" settingKey="loadMoreBtnText" settings={settings} set={set} />
            <SliderField label="Initial rows" settingKey="initialRows" settings={settings} set={set} min={1} max={8} step={1} defaultValue={2} suffix="" />
            <ColorPaletteWrap>
              <ColorField fieldKey="loadMoreBtnBgColor" label="Background" value={settings.loadMoreBtnBgColor} onChange={set} />
              <ColorField fieldKey="loadMoreBtnTextColor" label="Text" value={settings.loadMoreBtnTextColor} onChange={set} />
              <ColorField fieldKey="loadMoreBtnBorderColor" label="Border" value={settings.loadMoreBtnBorderColor} onChange={set} />
            </ColorPaletteWrap>
            <SliderField label="Radius" settingKey="loadMoreBtnRadius" settings={settings} set={set} min={0} max={32} step={1} defaultValue={6} />
          </NestedGroup>
        )}
      </Section>

      <Section label="Toggles">
        <CheckRow label="Show images" checked={!!settings.showImages} onChange={(e) => set('showImages', e.target.checked)} />
        <CheckRow label="Show date" checked={!!settings.showDate} onChange={(e) => set('showDate', e.target.checked)} />
        <CheckRow label="Show verified badge" checked={!!settings.showVerifiedBadge} onChange={(e) => set('showVerifiedBadge', e.target.checked)} />
        <CheckRow label="Show item type" checked={!!settings.showItemType} onChange={(e) => set('showItemType', e.target.checked)} />
        <CheckRow label="Show product info" checked={!!settings.showProductInfo} onChange={(e) => set('showProductInfo', e.target.checked)} />
        <CheckRow label="Truncate text" checked={!!settings.truncateText} onChange={(e) => set('truncateText', e.target.checked)} />
        {settings.truncateText && (
          <NestedGroup>
            <SliderField label="Max lines" settingKey="maxLines" settings={settings} set={set} min={2} max={12} step={1} defaultValue={6} suffix="" />
          </NestedGroup>
        )}
      </Section>
    </>
  );

  const renderDesign = () => (
    <>
      <Section label="Container" defaultOpen>
        <ColorPaletteWrap>
          <ColorField fieldKey="containerBgColor" label="Background" value={settings.containerBgColor} onChange={set} />
        </ColorPaletteWrap>
        <SliderField label="Padding" settingKey="containerPadding" settings={settings} set={set} min={0} max={80} step={4} defaultValue={32} />
        <SliderField label="Max width" settingKey="containerMaxWidth" settings={settings} set={set} min={600} max={1600} step={20} defaultValue={1400} />
      </Section>

      <Section label="Grid">
        <FieldGroup>
          <FieldLabel>Desktop columns</FieldLabel>
          <Opts list={OPTIONS.desktopColumns} settingKey="desktopColumns" settings={settings} set={set} />
        </FieldGroup>
        <FieldGroup>
          <FieldLabel>Mobile columns</FieldLabel>
          <Opts list={OPTIONS.mobileColumns} settingKey="mobileColumns" settings={settings} set={set} />
        </FieldGroup>
        <SliderField label="Grid gap" settingKey="gridGap" settings={settings} set={set} min={0} max={48} step={2} defaultValue={16} />
      </Section>

      <Section label="Card">
        <ColorPaletteWrap>
          <ColorField fieldKey="cardBgColor" label="Background" value={settings.cardBgColor} onChange={set} />
        </ColorPaletteWrap>
        <SliderField label="Corner radius" settingKey="cardBorderRadius" settings={settings} set={set} min={0} max={32} step={1} defaultValue={8} />
        <SliderField label="Padding" settingKey="cardPadding" settings={settings} set={set} min={8} max={40} step={2} defaultValue={20} />
        <FieldGroup>
          <FieldLabel>Shadow</FieldLabel>
          <Opts list={OPTIONS.cardShadow} settingKey="cardShadow" settings={settings} set={set} />
        </FieldGroup>
        <CheckRow
          label="Show border"
          checked={!!settings.showCardBorder}
          onChange={(e) => set('showCardBorder', e.target.checked)}
        />
        {settings.showCardBorder && (
          <NestedGroup>
            <ColorPaletteWrap>
              <ColorField fieldKey="cardBorderColor" label="Border color" value={settings.cardBorderColor} onChange={set} />
            </ColorPaletteWrap>
            <SliderField label="Border width" settingKey="cardBorderWidth" settings={settings} set={set} min={1} max={4} step={1} defaultValue={1} />
          </NestedGroup>
        )}
      </Section>

      <Section label="Stars">
        <ColorPaletteWrap>
          <ColorField fieldKey="starColor" label="Star color" value={settings.starColor} onChange={set} />
          <ColorField fieldKey="mutedColor" label="Empty color" value={settings.mutedColor} onChange={set} />
        </ColorPaletteWrap>
        <SliderField label="Star size" settingKey="starSize" settings={settings} set={set} min={10} max={24} step={1} defaultValue={14} />
      </Section>

      <Section label="Reviewer">
        <ColorPaletteWrap>
          <ColorField fieldKey="reviewerNameColor" label="Name color" value={settings.reviewerNameColor} onChange={set} />
        </ColorPaletteWrap>
        <SliderField label="Name size" settingKey="reviewerNameSize" settings={settings} set={set} min={11} max={22} step={1} defaultValue={15} />
        <FieldGroup>
          <FieldLabel>Name weight</FieldLabel>
          <Opts list={OPTIONS.reviewerNameWeight} settingKey="reviewerNameWeight" settings={settings} set={set} />
        </FieldGroup>
        {settings.showVerifiedBadge && (
          <ColorPaletteWrap>
            <ColorField fieldKey="verifiedBadgeColor" label="Verified badge" value={settings.verifiedBadgeColor} onChange={set} />
          </ColorPaletteWrap>
        )}
        {settings.showDate && (
          <>
            <ColorPaletteWrap>
              <ColorField fieldKey="dateColor" label="Date color" value={settings.dateColor} onChange={set} />
            </ColorPaletteWrap>
            <SliderField label="Date size" settingKey="dateSize" settings={settings} set={set} min={10} max={16} step={1} defaultValue={12} />
          </>
        )}
      </Section>

      <Section label="Review text">
        <ColorPaletteWrap>
          <ColorField fieldKey="reviewTextColor" label="Text color" value={settings.reviewTextColor} onChange={set} />
        </ColorPaletteWrap>
        <SliderField label="Text size" settingKey="reviewTextSize" settings={settings} set={set} min={11} max={20} step={1} defaultValue={14} />
      </Section>

      <Section label="Media">
        <SliderField label="Image radius" settingKey="imageRadius" settings={settings} set={set} min={0} max={20} step={1} defaultValue={8} />
        <SliderField label="Image max height" settingKey="imageMaxHeight" settings={settings} set={set} min={80} max={320} step={10} defaultValue={180} />
      </Section>

      <Section label="Product info">
        <ColorPaletteWrap>
          <ColorField fieldKey="productNameColor" label="Product name" value={settings.productNameColor} onChange={set} />
        </ColorPaletteWrap>
        <SliderField label="Product image radius" settingKey="productImageRadius" settings={settings} set={set} min={0} max={20} step={1} defaultValue={4} />
      </Section>
    </>
  );

  return (
    <SettingsShell
      onReset={onReset}
      tabs={{
        content: { label: 'Content', render: renderContent },
        design: { label: 'Design', render: renderDesign },
      }}
    />
  );
}
