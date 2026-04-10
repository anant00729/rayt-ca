import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

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

const defaultTheme = THEMES.find(t => t.name === 'Facebook Blue') ?? THEMES[0];

export default function App() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <ThemeVars $colors={theme.colors} />
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
    </>
  );
}
