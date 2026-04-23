import photographySettings from './photography.json';
import jewelrySettings from './jewelry.json';
import petsSettings from './pets.json';
import furnitureSettings from './furniture.json';
import coffeeSettings from './coffee.json';
import techSettings from './tech.json';
import plantsSettings from './plants.json';
import drinksSettings from './drinks.json';
import beautySettings from './beauty.json';

import photographyReviews from './reviews/photography';
import jewelryReviews from './reviews/jewelry';
import petsReviews from './reviews/pets';
import furnitureReviews from './reviews/furniture';
import coffeeReviews from './reviews/coffee';
import techReviews from './reviews/tech';
import plantsReviews from './reviews/plants';
import drinksReviews from './reviews/drinks';
import beautyReviews from './reviews/beauty';

export const INSPIRATION_PRESETS = {
  photography: { key: 'photography', label: 'Photography', settings: photographySettings, reviews: photographyReviews, accent: '#f1ece6' },
  jewelry: { key: 'jewelry', label: 'Jewelry', settings: jewelrySettings, reviews: jewelryReviews, accent: '#f4ecdf' },
  pets: { key: 'pets', label: 'Pets', settings: petsSettings, reviews: petsReviews, accent: '#f1e8dc' },
  furniture: { key: 'furniture', label: 'Furniture', settings: furnitureSettings, reviews: furnitureReviews, accent: '#ece6dc' },
  coffee: { key: 'coffee', label: 'Coffee', settings: coffeeSettings, reviews: coffeeReviews, accent: '#ece1d3' },
  tech: { key: 'tech', label: 'Tech', settings: techSettings, reviews: techReviews, accent: '#e6ecf4' },
  plants: { key: 'plants', label: 'Plants', settings: plantsSettings, reviews: plantsReviews, accent: '#e4ecdc' },
  drinks: { key: 'drinks', label: 'Drinks', settings: drinksSettings, reviews: drinksReviews, accent: '#f3e3e3' },
  beauty: { key: 'beauty', label: 'Beauty', settings: beautySettings, reviews: beautyReviews, accent: '#f5e6ec' },
};

export const INSPIRATION_TAB_ORDER = [
  'photography', 'plants', 'jewelry', 'drinks', 'coffee' ,'tech', 'pets', 'beauty', 'furniture' 
];
