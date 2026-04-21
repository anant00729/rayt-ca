import styled from 'styled-components';
import { tokens } from '../../styles/tokens';
import Button from '../../components/ui/Button';
import { ROUTES } from '../../constants/routes';
import { useDocumentMeta } from '../../lib/seo';

const Container = styled.div`
  max-width: 480px;
  margin: 8rem auto;
  padding: 0 1.5rem;
  text-align: center;
  font-family: 'Nunito Sans', sans-serif;
`;

const Code = styled.p`
  font-size: 5rem;
  font-weight: 900;
  color: ${tokens.sky100};
  margin: 0 0 0.25rem;
  line-height: 1;
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${tokens.ink900};
  margin: 0 0 0.75rem;
`;

const Body = styled.p`
  color: ${tokens.ink500};
  margin: 0 0 2rem;
`;

export default function NotFound() {
  useDocumentMeta({ title: 'Page not found', description: 'This page does not exist.' });
  return (
    <Container>
      <Code>404</Code>
      <Heading>Page not found</Heading>
      <Body>The page you&apos;re looking for doesn&apos;t exist or may have moved.</Body>
      <Button variant="secondary" to={ROUTES.HOME}>Go home</Button>
    </Container>
  );
}
