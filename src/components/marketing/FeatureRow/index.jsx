import { Row, TextSide, Title, Subtitle, Desc, CTA, ImageSide, Placeholder, PlaceholderLabel } from './style';

export default function FeatureRow({ title, subtitle, description, ctaText, imagePosition = 'right', placeholderBg }) {
  const reverse = imagePosition === 'left';

  return (
    <Row $reverse={reverse}>
      <TextSide $reverse={reverse}>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Desc>{description}</Desc>
        {ctaText && <CTA href="#">{ctaText}</CTA>}
      </TextSide>
      <ImageSide $reverse={reverse}>
        <Placeholder $bg={placeholderBg}>
          <PlaceholderLabel>{title}</PlaceholderLabel>
        </Placeholder>
      </ImageSide>
    </Row>
  );
}
