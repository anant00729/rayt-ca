import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import { OPTIONS } from './options';
import {
  PanelShell, PanelHead, PanelKicker, LiveDot,
  TabStrip, TabBtn, PanelBody,
  FieldGroup, FieldLabel,
  ColorPaletteWrap, NestedGroup,
  StyledInput,
  CtaRow, StartNowBtn, ResetLink,
} from './SettingsPanel.style';
import {
  Section, ColorField, Opts, CheckRow, SliderField,
} from './fields';

function BoltIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

export default function SettingsPanel({ settings, onChange, onReset }) {
  const [tab, setTab] = useState('content');
  const set = onChange;

  return (
    <PanelShell>
      <PanelHead>
        <PanelKicker>
          <span>Customize</span>
          <LiveDot><BoltIcon /> LIVE</LiveDot>
        </PanelKicker>
        <TabStrip role="tablist">
          <TabBtn
            $active={tab === 'content'}
            onClick={() => setTab('content')}
            role="tab"
            aria-selected={tab === 'content'}
          >
            Content
          </TabBtn>
          <TabBtn
            $active={tab === 'design'}
            onClick={() => setTab('design')}
            role="tab"
            aria-selected={tab === 'design'}
          >
            Design
          </TabBtn>
        </TabStrip>
      </PanelHead>

      <PanelBody>
        {tab === 'content' && (
          <>
            <Section label="Section header" defaultOpen>
              <CheckRow
                label="Show section header"
                checked={settings.showSectionHeader !== false}
                onChange={(e) => set('showSectionHeader', e.target.checked)}
              />
              {settings.showSectionHeader !== false && (
                <NestedGroup>
                  <FieldGroup>
                    <FieldLabel>Title text</FieldLabel>
                    <StyledInput
                      value={settings.sectionTitleText ?? ''}
                      onChange={(e) => set('sectionTitleText', e.target.value)}
                    />
                  </FieldGroup>
                  <ColorPaletteWrap>
                    <ColorField
                      fieldKey="sectionTitleColor"
                      label="Title color"
                      value={settings.sectionTitleColor}
                      onChange={set}
                    />
                  </ColorPaletteWrap>
                  <SliderField
                    label="Title size"
                    settingKey="sectionTitleSize"
                    settings={settings}
                    set={set}
                    min={16}
                    max={80}
                    step={2}
                    defaultValue={48}
                  />
                  <FieldGroup>
                    <FieldLabel>Title weight</FieldLabel>
                    <Opts
                      list={OPTIONS.reviewerNameWeight}
                      settingKey="sectionTitleWeight"
                      settings={settings}
                      set={set}
                    />
                  </FieldGroup>

                  <CheckRow
                    label="Show subtitle"
                    checked={settings.showSectionSubtitle}
                    onChange={(e) => set('showSectionSubtitle', e.target.checked)}
                  />
                  {settings.showSectionSubtitle && (
                    <NestedGroup>
                      <FieldGroup>
                        <FieldLabel>Subtitle text</FieldLabel>
                        <StyledInput
                          value={settings.sectionSubtitleText ?? ''}
                          onChange={(e) => set('sectionSubtitleText', e.target.value)}
                        />
                      </FieldGroup>
                      <ColorPaletteWrap>
                        <ColorField
                          fieldKey="sectionSubtitleColor"
                          label="Subtitle color"
                          value={settings.sectionSubtitleColor}
                          onChange={set}
                        />
                      </ColorPaletteWrap>
                    </NestedGroup>
                  )}

                  <CheckRow
                    label="Show average rating"
                    checked={settings.showSectionAvgRating}
                    onChange={(e) => set('showSectionAvgRating', e.target.checked)}
                  />
                  {settings.showSectionAvgRating && (
                    <NestedGroup>
                      <ColorPaletteWrap>
                        <ColorField
                          fieldKey="sectionAvgTextColor"
                          label="Avg text color"
                          value={settings.sectionAvgTextColor}
                          onChange={set}
                        />
                      </ColorPaletteWrap>
                    </NestedGroup>
                  )}
                </NestedGroup>
              )}
            </Section>

            <Section label="Top bar">
              <CheckRow
                label="Show top bar"
                checked={settings.showTopBar !== false}
                onChange={(e) => set('showTopBar', e.target.checked)}
              />
              {settings.showTopBar !== false && (
                <NestedGroup>
                  <ColorPaletteWrap>
                    <ColorField
                      fieldKey="topBarCountColor"
                      label="Count color"
                      value={settings.topBarCountColor}
                      onChange={set}
                    />
                  </ColorPaletteWrap>
                  <SliderField
                    label="Star size"
                    settingKey="topBarStarSize"
                    settings={settings}
                    set={set}
                    min={12}
                    max={28}
                    step={1}
                    defaultValue={18}
                  />

                  <CheckRow
                    label="Show write-a-review button"
                    checked={settings.showWriteReviewBtn}
                    onChange={(e) => set('showWriteReviewBtn', e.target.checked)}
                  />
                  {settings.showWriteReviewBtn && (
                    <NestedGroup>
                      <ColorPaletteWrap>
                        <ColorField
                          fieldKey="writeReviewBtnTextColor"
                          label="Text color"
                          value={settings.writeReviewBtnTextColor}
                          onChange={set}
                        />
                        <ColorField
                          fieldKey="writeReviewBtnBorderColor"
                          label="Border color"
                          value={settings.writeReviewBtnBorderColor}
                          onChange={set}
                        />
                      </ColorPaletteWrap>
                      <SliderField
                        label="Button radius"
                        settingKey="writeReviewBtnRadius"
                        settings={settings}
                        set={set}
                        min={0}
                        max={24}
                        step={1}
                        defaultValue={6}
                      />
                    </NestedGroup>
                  )}

                  <CheckRow
                    label="Show filter &amp; sort"
                    checked={settings.showFilterSort !== false}
                    onChange={(e) => set('showFilterSort', e.target.checked)}
                  />
                  {settings.showFilterSort !== false && (
                    <NestedGroup>
                      <ColorPaletteWrap>
                        <ColorField
                          fieldKey="filterSortBtnColor"
                          label="Accent color"
                          value={settings.filterSortBtnColor}
                          onChange={set}
                        />
                      </ColorPaletteWrap>
                    </NestedGroup>
                  )}

                  <FieldGroup style={{ marginTop: 14 }}>
                    <FieldLabel>Default sort</FieldLabel>
                    <Opts
                      list={OPTIONS.defaultSort}
                      settingKey="defaultSort"
                      settings={settings}
                      set={set}
                    />
                  </FieldGroup>
                </NestedGroup>
              )}
            </Section>

            <Section label="Load more">
              <CheckRow
                label="Show load-more button"
                checked={settings.showLoadMore}
                onChange={(e) => set('showLoadMore', e.target.checked)}
              />
              <FieldGroup style={{ marginTop: 10 }}>
                <FieldLabel>Reviews per page</FieldLabel>
                <StyledInput
                  type="number"
                  min={1}
                  max={50}
                  value={settings.reviewsPerPage ?? 10}
                  onChange={(e) => set('reviewsPerPage', Number(e.target.value))}
                  style={{ width: 96 }}
                />
              </FieldGroup>
              {settings.showLoadMore && (
                <NestedGroup>
                  <ColorPaletteWrap>
                    <ColorField
                      fieldKey="loadMoreBtnBgColor"
                      label="Button background"
                      value={settings.loadMoreBtnBgColor}
                      onChange={set}
                    />
                    <ColorField
                      fieldKey="loadMoreBtnTextColor"
                      label="Button text"
                      value={settings.loadMoreBtnTextColor}
                      onChange={set}
                    />
                  </ColorPaletteWrap>
                  <SliderField
                    label="Button radius"
                    settingKey="loadMoreBtnRadius"
                    settings={settings}
                    set={set}
                    min={0}
                    max={32}
                    step={1}
                    defaultValue={8}
                  />
                </NestedGroup>
              )}
            </Section>
          </>
        )}

        {tab === 'design' && (
          <>
            <Section label="Layout" defaultOpen>
              <FieldGroup>
                <FieldLabel>Layout</FieldLabel>
                <Opts
                  list={OPTIONS.layout}
                  settingKey="layout"
                  settings={settings}
                  set={set}
                />
              </FieldGroup>
              <FieldGroup>
                <FieldLabel>Media position</FieldLabel>
                <Opts
                  list={OPTIONS.mediaPosition}
                  settingKey="mediaPosition"
                  settings={settings}
                  set={set}
                />
              </FieldGroup>
            </Section>

            <Section label="Container">
              <ColorPaletteWrap>
                <ColorField
                  fieldKey="containerBgColor"
                  label="Background color"
                  value={settings.containerBgColor}
                  onChange={set}
                />
              </ColorPaletteWrap>
              <SliderField
                label="Padding"
                settingKey="containerPadding"
                settings={settings}
                set={set}
                min={0}
                max={80}
                step={4}
                defaultValue={32}
              />
            </Section>

            <Section label="Review card">
              <ColorPaletteWrap>
                <ColorField
                  fieldKey="cardBgColor"
                  label="Card background"
                  value={settings.cardBgColor}
                  onChange={set}
                />
              </ColorPaletteWrap>
              <SliderField
                label="Corner radius"
                settingKey="cardBorderRadius"
                settings={settings}
                set={set}
                min={0}
                max={32}
                step={1}
                defaultValue={10}
              />
              <SliderField
                label="Padding"
                settingKey="cardPadding"
                settings={settings}
                set={set}
                min={8}
                max={40}
                step={2}
                defaultValue={16}
              />
              <FieldGroup>
                <FieldLabel>Shadow</FieldLabel>
                <Opts
                  list={OPTIONS.cardShadow}
                  settingKey="cardShadow"
                  settings={settings}
                  set={set}
                />
              </FieldGroup>

              <CheckRow
                label="Show border"
                checked={settings.showCardBorder !== false}
                onChange={(e) => set('showCardBorder', e.target.checked)}
              />
              {settings.showCardBorder !== false && (
                <NestedGroup>
                  <ColorPaletteWrap>
                    <ColorField
                      fieldKey="cardBorderColor"
                      label="Border color"
                      value={settings.cardBorderColor}
                      onChange={set}
                    />
                  </ColorPaletteWrap>
                  <SliderField
                    label="Border width"
                    settingKey="cardBorderWidth"
                    settings={settings}
                    set={set}
                    min={1}
                    max={4}
                    step={1}
                    defaultValue={1}
                  />
                </NestedGroup>
              )}
            </Section>

            <Section label="Stars">
              <ColorPaletteWrap>
                <ColorField
                  fieldKey="starColor"
                  label="Star color"
                  value={settings.starColor}
                  onChange={set}
                />
                <ColorField
                  fieldKey="mutedColor"
                  label="Empty icon color"
                  value={settings.mutedColor}
                  onChange={set}
                />
              </ColorPaletteWrap>
              <SliderField
                label="Star size"
                settingKey="starSize"
                settings={settings}
                set={set}
                min={10}
                max={24}
                step={1}
                defaultValue={14}
              />
            </Section>

            <Section label="Reviewer">
              <FieldGroup>
                <FieldLabel>Name</FieldLabel>
                <ColorPaletteWrap>
                  <ColorField
                    fieldKey="reviewerNameColor"
                    label="Color"
                    value={settings.reviewerNameColor}
                    onChange={set}
                  />
                </ColorPaletteWrap>
                <SliderField
                  label="Size"
                  settingKey="reviewerNameSize"
                  settings={settings}
                  set={set}
                  min={11}
                  max={20}
                  step={1}
                  defaultValue={14}
                />
                <FieldGroup style={{ marginTop: 8 }}>
                  <FieldLabel>Weight</FieldLabel>
                  <Opts
                    list={OPTIONS.reviewerNameWeight}
                    settingKey="reviewerNameWeight"
                    settings={settings}
                    set={set}
                  />
                </FieldGroup>
              </FieldGroup>

              <CheckRow
                label="Show verified badge"
                checked={settings.showVerifiedBadge}
                onChange={(e) => set('showVerifiedBadge', e.target.checked)}
              />
              {settings.showVerifiedBadge && (
                <NestedGroup>
                  <ColorPaletteWrap>
                    <ColorField
                      fieldKey="verifiedBadgeColor"
                      label="Badge color"
                      value={settings.verifiedBadgeColor}
                      onChange={set}
                    />
                  </ColorPaletteWrap>
                </NestedGroup>
              )}

              <CheckRow
                label="Show date"
                checked={settings.showDate}
                onChange={(e) => set('showDate', e.target.checked)}
              />
              {settings.showDate && (
                <NestedGroup>
                  <ColorPaletteWrap>
                    <ColorField
                      fieldKey="dateColor"
                      label="Date color"
                      value={settings.dateColor}
                      onChange={set}
                    />
                  </ColorPaletteWrap>
                  <SliderField
                    label="Date size"
                    settingKey="dateSize"
                    settings={settings}
                    set={set}
                    min={10}
                    max={16}
                    step={1}
                    defaultValue={12}
                  />
                </NestedGroup>
              )}
            </Section>

            <Section label="Review text">
              <ColorPaletteWrap>
                <ColorField
                  fieldKey="reviewTextColor"
                  label="Text color"
                  value={settings.reviewTextColor}
                  onChange={set}
                />
              </ColorPaletteWrap>
              <SliderField
                label="Text size"
                settingKey="reviewTextSize"
                settings={settings}
                set={set}
                min={11}
                max={20}
                step={1}
                defaultValue={14}
              />
              <CheckRow
                label="Truncate text"
                checked={settings.truncateText}
                onChange={(e) => set('truncateText', e.target.checked)}
              />
              {settings.truncateText && (
                <NestedGroup>
                  <SliderField
                    label="Max lines"
                    settingKey="maxLines"
                    settings={settings}
                    set={set}
                    min={2}
                    max={10}
                    step={1}
                    defaultValue={6}
                    suffix=""
                  />
                </NestedGroup>
              )}
            </Section>

            <Section label="Images">
              <CheckRow
                label="Show images"
                checked={settings.showImages}
                onChange={(e) => set('showImages', e.target.checked)}
              />
              {settings.showImages && (
                <NestedGroup>
                  <SliderField
                    label="Thumbnail size"
                    settingKey="imageThumbnailSize"
                    settings={settings}
                    set={set}
                    min={60}
                    max={200}
                    step={10}
                    defaultValue={80}
                  />
                  <SliderField
                    label="Image radius"
                    settingKey="imageRadius"
                    settings={settings}
                    set={set}
                    min={0}
                    max={20}
                    step={1}
                    defaultValue={6}
                  />
                </NestedGroup>
              )}
            </Section>
          </>
        )}
      </PanelBody>

      <CtaRow>
        <StartNowBtn as={Link} to={ROUTES.PRICING}>Start now</StartNowBtn>
        <ResetLink type="button" onClick={onReset}>Reset to defaults</ResetLink>
      </CtaRow>
    </PanelShell>
  );
}
