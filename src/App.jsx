import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { tokens } from './styles/tokens';

import Header from './components/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductReviews from './pages/ProductReviews';
import CustomerReferrals from './pages/CustomerReferrals';
import AIConvert from './pages/AIConvert';
import Widgets from './pages/Widgets';
import Customers from './pages/Customers';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';

import colors from './data/colors.json';

export const THEMES = colors.themes;

const ThemeVars = createGlobalStyle`
  :root {
    --color-primary: ${p => p.$colors.primary};
    --color-secondary: ${p => p.$colors.secondary};
    --color-accent: ${p => p.$colors.accent};
    --color-muted: ${p => p.$colors.muted};
    --color-border: ${p => p.$colors.border}50;
  }
`;

const GlobalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: -10% -10% auto -10%;
    height: 80%;
    background:
      radial-gradient(60% 60% at 20% 30%, ${tokens.sky100} 0%, transparent 60%),
      radial-gradient(50% 50% at 80% 20%, ${tokens.mint100} 0%, transparent 65%),
      radial-gradient(50% 50% at 60% 80%, ${tokens.lilac100} 0%, transparent 70%);
    filter: blur(30px);
    opacity: 0.85;
  }
`;

const PageBody = styled.div`
  padding-top: 96px;
`;

const defaultTheme = THEMES.find(t => t.name === 'Facebook Blue') ?? THEMES[0];

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <ThemeVars $colors={theme.colors} />
      <GlobalBg />
      <Header floating />
      <PageBody>
        <Routes>
          <Route path="/" element={<Home theme={theme} onThemeChange={setTheme} />} />
          <Route path="/product" element={<Product theme={theme} onThemeChange={setTheme} />} />
          <Route path="/product-reviews" element={<ProductReviews theme={theme} onThemeChange={setTheme} />} />
          <Route path="/customer-referrals" element={<CustomerReferrals theme={theme} onThemeChange={setTheme} />} />
          <Route path="/ai" element={<AIConvert theme={theme} onThemeChange={setTheme} />} />
          <Route path="/widgets" element={<Widgets theme={theme} onThemeChange={setTheme} />} />
          <Route path="/customers" element={<Customers theme={theme} onThemeChange={setTheme} />} />
          <Route path="/pricing" element={<Pricing theme={theme} onThemeChange={setTheme} />} />
          <Route path="/resources" element={<Resources theme={theme} onThemeChange={setTheme} />} />
        </Routes>
      </PageBody>
    </>
  );
}
