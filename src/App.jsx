import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

// Existing themes
import baltic from '../colors/baltic.json';
import costal from '../colors/costal.json';
import lavenderBlush from '../colors/lavender-blush.json';
import midnight from '../colors/midnight.json';
import ocean from '../colors/ocean.json';

// Reds/Crimsons
import airbnbCoral from '../colors/airbnb-coral.json';
import pinterestRed from '../colors/pinterest-red.json';
import youtubeCrimson from '../colors/youtube-crimson.json';
import cherryBlossom from '../colors/cherry-blossom.json';
import rustEmber from '../colors/rust-ember.json';
import wineVelvet from '../colors/wine-velvet.json';

// Oranges/Ambers
import soundcloudOrange from '../colors/soundcloud-orange.json';
import hubspotAmber from '../colors/hubspot-amber.json';
import tangerineDream from '../colors/tangerine-dream.json';
import burntSienna from '../colors/burnt-sienna.json';
import peachHorizon from '../colors/peach-horizon.json';

// Yellows/Golds
import bumbleGold from '../colors/bumble-gold.json';
import saffronGlow from '../colors/saffron-glow.json';
import honeyMustard from '../colors/honey-mustard.json';
import sunflowerField from '../colors/sunflower-field.json';
import marigoldSun from '../colors/marigold-sun.json';

// Greens
import spotifyGreen from '../colors/spotify-green.json';
import shopifyEmerald from '../colors/shopify-emerald.json';
import whatsappJade from '../colors/whatsapp-jade.json';
import forestMoss from '../colors/forest-moss.json';
import sageGarden from '../colors/sage-garden.json';
import mintFresh from '../colors/mint-fresh.json';

// Teals/Cyans
import canvaTeal from '../colors/canva-teal.json';
import vimeoCyan from '../colors/vimeo-cyan.json';
import arcticFrost from '../colors/arctic-frost.json';
import deepLagoon from '../colors/deep-lagoon.json';
import turquoiseWave from '../colors/turquoise-wave.json';

// Blues
import facebookBlue from '../colors/facebook-blue.json';
import twitterSky from '../colors/twitter-sky.json';
import linkedinNavy from '../colors/linkedin-navy.json';
import stripeIndigo from '../colors/stripe-indigo.json';
import cobaltSteel from '../colors/cobalt-steel.json';
import azureMist from '../colors/azure-mist.json';
import sapphireDeep from '../colors/sapphire-deep.json';
import powderBlue from '../colors/powder-blue.json';

// Indigos/Violets
import twitchViolet from '../colors/twitch-violet.json';
import yahooPlum from '../colors/yahoo-plum.json';
import amethystGlow from '../colors/amethyst-glow.json';
import irisBloom from '../colors/iris-bloom.json';
import electricViolet from '../colors/electric-violet.json';

// Purples/Magentas
import figmaMagenta from '../colors/figma-magenta.json';
import notionMauve from '../colors/notion-mauve.json';
import orchidDusk from '../colors/orchid-dusk.json';
import fuchsiaPop from '../colors/fuchsia-pop.json';
import berryCrush from '../colors/berry-crush.json';

// Pinks/Roses
import dribbblePink from '../colors/dribbble-pink.json';
import lyftRose from '../colors/lyft-rose.json';
import blushPetal from '../colors/blush-petal.json';
import flamingoKiss from '../colors/flamingo-kiss.json';
import cottonCandy from '../colors/cotton-candy.json';

// Neutrals/Earth Tones
import appleGraphite from '../colors/apple-graphite.json';
import aesopClay from '../colors/aesop-clay.json';
import mujiStone from '../colors/muji-stone.json';
import warmCharcoal from '../colors/warm-charcoal.json';
import driftwood from '../colors/driftwood.json';
import sandstone from '../colors/sandstone.json';

export const THEMES = [
  // Existing
  baltic, costal, lavenderBlush, midnight, ocean,
  // Reds
  airbnbCoral, pinterestRed, youtubeCrimson, cherryBlossom, rustEmber, wineVelvet,
  // Oranges
  soundcloudOrange, hubspotAmber, tangerineDream, burntSienna, peachHorizon,
  // Yellows
  bumbleGold, saffronGlow, honeyMustard, sunflowerField, marigoldSun,
  // Greens
  spotifyGreen, shopifyEmerald, whatsappJade, forestMoss, sageGarden, mintFresh,
  // Teals
  canvaTeal, vimeoCyan, arcticFrost, deepLagoon, turquoiseWave,
  // Blues
  facebookBlue, twitterSky, linkedinNavy, stripeIndigo, cobaltSteel, azureMist, sapphireDeep, powderBlue,
  // Indigos
  twitchViolet, yahooPlum, amethystGlow, irisBloom, electricViolet,
  // Purples
  figmaMagenta, notionMauve, orchidDusk, fuchsiaPop, berryCrush,
  // Pinks
  dribbblePink, lyftRose, blushPetal, flamingoKiss, cottonCandy,
  // Neutrals
  appleGraphite, aesopClay, mujiStone, warmCharcoal, driftwood, sandstone,
];

const ThemeVars = createGlobalStyle`
  :root {
    --color-primary: ${p => p.$colors.primary};
    --color-secondary: ${p => p.$colors.secondary};
    --color-accent: ${p => p.$colors.accent};
    --color-muted: ${p => p.$colors.muted};
    --color-border: ${p => p.$colors.border}50;
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
  const [theme, setTheme] = useState(facebookBlue);

  return (
    <>
      <ThemeVars $colors={theme.colors} />
      <Page>
        <AnnouncementBar />
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Footer theme={theme} onThemeChange={setTheme} />
      </Page>
    </>
  );
}
