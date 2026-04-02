import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Page, Content } from './style';

export default function Pricing({ theme, onThemeChange }) {
  return (
    <Page>
      <Header />
      <Content><h1>Pricing</h1></Content>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
