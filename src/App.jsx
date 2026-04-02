import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

const ThemeVars = createGlobalStyle`
  :root {
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-accent: ${theme.colors.accent};
    --color-muted: ${theme.colors.muted};
    --color-border: ${theme.colors.border};
  }
`;

const Page = styled.div`
  min-height: 100vh;
  background:
    repeating-linear-gradient(
      -45deg,
      var(--color-border),
      var(--color-border) 1px,
      transparent 1px,
      transparent 8px
    ),
    var(--color-primary);
  background-attachment: fixed;
`;

export default function App() {
  return (
    <>
      <ThemeVars />
      <Page>
        <AnnouncementBar />
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </Page>
    </>
  );
}
