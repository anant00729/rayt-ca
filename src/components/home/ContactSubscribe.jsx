import Button from '../ui/Button';
import {
  Wrap, Inner,
  ContactPanel, PanelEyebrow, PanelHeadline, PanelBody,
  SubscribePanel, SubscribeHeadline, SubscribeBody,
  SubscribeForm, SubscribeInput,
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
          <Button
            variant="secondary"
            size="md"
            to={data.contact.ctaHref}
            icon="→"
            style={{ alignSelf: 'flex-start' }}
          >
            {data.contact.ctaText}
          </Button>
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
            <Button variant="primary" size="md" type="submit" icon="→">
              {data.subscribe.ctaText}
            </Button>
          </SubscribeForm>
        </SubscribePanel>
      </Inner>
    </Wrap>
  );
}
