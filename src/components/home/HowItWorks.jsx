import { HeadlineSplit } from '../text/Highlights';
import {
  Wrap, Header, Eyebrow, Headline,
  Steps, Step, StepNumber, StepTitle, StepDesc,
} from './HowItWorks.style';

export default function HowItWorks({ data }) {
  return (
    <Wrap>
      <Header>
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <Headline>
          <HeadlineSplit data={data.headline} variant="swoosh" />
        </Headline>
      </Header>
      <Steps>
        {data.steps.map((step) => (
          <Step key={step.number}>
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.description}</StepDesc>
          </Step>
        ))}
      </Steps>
    </Wrap>
  );
}
