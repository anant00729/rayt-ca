import Footer from '../../components/Footer';
import { Page, Content } from './style';

export default function Resources({ theme, onThemeChange }) {
  return (
    <Page>
      <Content><h1>Resources</h1></Content>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
