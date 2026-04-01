import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
`;

const Headline = styled.h1`
  color: #f5f5f5;
  font-family: sans-serif;
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 400;
  letter-spacing: 0.02em;
`;

export default function App() {
  return (
    <Page>
      <Headline>Building something good!</Headline>
    </Page>
  );
}
