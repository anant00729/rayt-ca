import { HeadlineSplit } from '../../components/text/Highlights';
import { Wrap, Head, Eyebrow, Headline, List, Item, Question, Answer } from './PricingFAQ.style';

export default function PricingFAQ({ data }) {
  return (
    <Wrap>
      <Head>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <Headline>
          <HeadlineSplit data={data.headline} variant="marker" />
        </Headline>
      </Head>
      <List>
        {data.items.map((item) => (
          <Item key={item.q}>
            <Question>{item.q}</Question>
            <Answer>{item.a}</Answer>
          </Item>
        ))}
      </List>
    </Wrap>
  );
}
