import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WidgetsShowcase from '../../components/home/WidgetsShowcase';
import content from '../../data/homeContent.json';
import { Page } from './style';

export default function Widgets({ theme, onThemeChange }) {
  return (
    <Page>
      <Header />
      <WidgetsShowcase data={content.widgetsShowcase} />
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
