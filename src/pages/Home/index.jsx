import AnnouncementBar from '../../components/AnnouncementBar';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import Footer from '../../components/Footer';
import { Page } from './style';

export default function Home({ theme, onThemeChange }) {
  return (
    <Page>
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer theme={theme} onThemeChange={onThemeChange} />
    </Page>
  );
}
