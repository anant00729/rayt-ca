import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Page, Content } from './style';

export default function Product({ theme, onThemeChange }) {
  return (
    <Page>
      <Header />
      <Content><h1>Product</h1></Content>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
