import Footer from '../../components/Footer';
import { Page, Content } from './style';

export default function Customers({ theme, onThemeChange }) {
  return (
    <Page>
      <Content><h1>Customers</h1></Content>
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
