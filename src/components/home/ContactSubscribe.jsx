import {
  Wrap, Inner,
  ContactPanel, PanelEyebrow, PanelHeadline, PanelBody, ContactCta,
  SubscribePanel, SubscribeHeadline, SubscribeBody,
  SubscribeForm, SubscribeInput, SubscribeButton,
} from './ContactSubscribe.style';

export default function ContactSubscribe({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up to real subscribe endpoint later
  };

  return (
    <Wrap>
      <Inner>
        <ContactPanel>
          <PanelEyebrow>{data.contact.eyebrow}</PanelEyebrow>
          <PanelHeadline>{data.contact.headline}</PanelHeadline>
          <PanelBody>{data.contact.body}</PanelBody>
          <ContactCta href={data.contact.ctaHref}>{data.contact.ctaText} →</ContactCta>
        </ContactPanel>

        <SubscribePanel>
          <SubscribeHeadline>{data.subscribe.headline}</SubscribeHeadline>
          <SubscribeBody>{data.subscribe.body}</SubscribeBody>
          <SubscribeForm onSubmit={handleSubmit}>
            <SubscribeInput
              type="email"
              placeholder={data.subscribe.placeholder}
              aria-label="Email address"
              required
            />
            <SubscribeButton type="submit">{data.subscribe.ctaText} →</SubscribeButton>
          </SubscribeForm>
        </SubscribePanel>
      </Inner>
    </Wrap>
  );
}
