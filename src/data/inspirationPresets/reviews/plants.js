import buildReviews from './_builder';

const IMAGES = [
  '1459411552884-841db9b3cc2a',
  '1509423350716-97f9360b4e09',
  '1485955900006-10f4d324d411',
  '1463936575829-25148e1db1b8',
  '1470058869958-2a77ade41c02',
  '1466692476868-aef1dfb1e735',
  '1492552085122-36706c238a5e',
  '1518837695005-2083093ee35b',
  '1511497584788-876760111969',
  '1479516650799-9aa7a7a6a6a2',
  '1521408571456-73e8a7dd1fb0',
  '1524821655863-9dac27c2a5c3',
];

const ENTRIES = [
  { title: 'Monstera arrived thriving',  comment: 'Leaves were unfurling within a week. Root system was healthy and the packaging was gentle.', product: 'Monstera Deliciosa', itemType: '6" Pot' },
  { title: 'Pothos exploded',            comment: 'Grew two feet in three months. Takes cuttings easily — I\'ve propagated four times already.', product: 'Golden Pothos' },
  { title: 'Fiddle leaf is the star',    comment: 'Nervous buying it but it\'s stable and putting out a new leaf every 4-6 weeks.', product: 'Fiddle Leaf Fig' },
  { title: 'Ceramic planter is gorgeous', comment: 'Glaze is beautiful and the drainage saucer actually catches water. Substantial feel.', product: 'Hand-Thrown Ceramic Pot', rating: 5 },
  { title: 'Snake plant is unkillable',  comment: 'Forgot to water for three weeks and it\'s still fine. Exactly what I needed.', product: 'Snake Plant Laurentii' },
  { title: 'Grow light revived my plants', comment: 'Winter was brutal but the spectrum on this light kept my babies pushing new growth.', product: 'Full-Spectrum Grow Light' },
  { title: 'Calathea is a drama queen but beautiful', comment: 'High maintenance but the leaves are stunning. Humidifier running nearby helps a lot.', product: 'Calathea Orbifolia', rating: 4 },
  { title: 'Soil mix drains perfectly',  comment: 'Potted my aroid collection in this and they all responded with fresh root growth.', product: 'Aroid Soil Mix', verified: true },
  { title: 'Moisture meter pays for itself', comment: 'Stopped over-watering my plants. The probes read accurately and battery lasts forever.', product: 'Digital Moisture Meter' },
  { title: 'Propagation station cute and functional', comment: 'Test tubes hold cuttings well and the stand is steady. Watching roots grow never gets old.', product: 'Glass Propagation Station' },
  { title: 'Philodendron unfurls weekly', comment: 'Shipped in a cozy box, arrived perky. Already put up a new leaf.', product: 'Philodendron Birkin' },
  { title: 'Self-watering planter works', comment: 'Wick system kept my fern hydrated during a week-long vacation. No more plant-sitter needed.', product: 'Self-Watering Planter' },
  { title: 'Cactus collection starter pack', comment: 'Six healthy cacti, all different. Perfect for a sunny windowsill.', product: 'Mini Cactus Set', itemType: 'Set of 6' },
  { title: 'Pruning shears sharp and precise', comment: 'Clean cuts every time. Spring-loaded so my hand doesn\'t fatigue pruning a dozen plants.', product: 'Precision Pruning Shears' },
  { title: 'Humidifier is a game changer', comment: 'Humidity loving plants finally happy. Quiet enough to run overnight in the bedroom.', product: 'Ultrasonic Plant Humidifier' },
  { title: 'Trellis handles my monstera', comment: 'Moss pole stayed upright even when my plant got top-heavy. Easy to extend as it grows.', product: 'Extendable Moss Pole' },
  { title: 'Orchid bloomed in its pot',  comment: 'Clear slotted pot makes root checks easy. My phalaenopsis is happier than ever.', product: 'Clear Orchid Pot' },
  { title: 'Fertilizer works but read the dosage', comment: 'Potent — dilute more than you think. Plants responded within a week when I got it right.', product: 'Concentrated Plant Food', rating: 4 },
  { title: 'Herb starter kit thriving',  comment: 'Basil, mint, parsley all germinated within ten days. Kitchen smells amazing.', product: 'Kitchen Herb Starter Kit' },
  { title: 'Watering can pour is controllable', comment: 'Thin spout reaches under leaves. No more soggy foliage.', product: 'Long-Spout Watering Can' },
];

export default buildReviews('plants', ENTRIES, IMAGES);
