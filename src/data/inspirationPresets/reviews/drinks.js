import buildReviews from './_builder';

const IMAGES = [
  '1551538827-9c037cb4f32a',
  '1514362545857-3bc16c4c7d1b',
  '1563227812-0ea4c22e6cc8',
  '1470337458703-46ad1756a187',
  '1528823872057-9c018a7a7553',
  '1536935338788-846bb9981813',
  '1510972527921-ce03766a1cf1',
  '1496318447583-f524534e9ce1',
  '1469460340997-2f854421e72f',
  '1504675099198-7023dd85f5a3',
  '1470337458703-46ad1756a187',
  '1556679343-c7306c1976bc',
];

const ENTRIES = [
  { title: 'Natural wine with real character', comment: 'Funky in the best way. Pairs beautifully with sharp cheese and crusty bread.', product: 'Orange Natural Wine', itemType: '750ml' },
  { title: 'Cold brew is shelf-stable bliss', comment: 'Keeps me caffeinated through summer. Smooth, chocolatey, not too strong.', product: 'Bottled Cold Brew', rating: 5 },
  { title: 'Craft soda tastes like a memory', comment: 'Birch beer just like my grandpa used to buy. Carbonation is perfect, not too sweet.', product: 'Heirloom Birch Beer' },
  { title: 'Pinot showed up in perfect condition', comment: 'Temperature-controlled shipping paid off. No cork taint, expressive nose.', product: 'Estate Pinot Noir', verified: true },
  { title: 'Matcha brightens my morning', comment: 'Ceremonial grade lives up to its name. Vibrant color, no bitterness when whisked properly.', product: 'Ceremonial Matcha' },
  { title: 'Tea sampler was a smart buy',  comment: 'Twelve varieties meant I finally found my oolong. Packaging preserved freshness beautifully.', product: 'Loose-Leaf Tea Sampler' },
  { title: 'Kombucha is tart and alive',   comment: 'Ginger-lemon is my favorite. You can tell it\'s freshly brewed — the fizz is aggressive in the best way.', product: 'Small-Batch Kombucha' },
  { title: 'Espresso martini kit',       comment: 'Made four perfect martinis at home. The concentrate is smooth and the recipe card is helpful.', product: 'Espresso Martini Kit', rating: 5 },
  { title: 'Cocktail glasses are beautiful', comment: 'Hand-blown, slightly irregular, feels special. Perfect weight in hand.', product: 'Hand-Blown Coupe Set', itemType: 'Set of 4' },
  { title: 'Mezcal has real smoke',      comment: 'Single-village, traceable, and it drinks clean. Respect the craft.', product: 'Oaxacan Mezcal' },
  { title: 'Sparkling water maker is a win', comment: 'Stopped buying cans. Carbonation level adjustable and it\'s saved me money in weeks.', product: 'Countertop Sparkling Water Maker' },
  { title: 'Craft bitters collection',    comment: 'Five bottles of experimentation. Orange, chocolate, lavender — transformed my old-fashioneds.', product: 'Artisan Bitters Set' },
  { title: 'Cold-pressed juice is vibrant', comment: 'The beet ginger is like a reset button. You can taste it\'s never been heated.', product: 'Cold-Pressed Juice Pack', rating: 5 },
  { title: 'Whiskey is smooth for the price', comment: 'Bourbon with real caramel and vanilla notes. Neat or on a rock, both work.', product: 'Small-Batch Bourbon', itemType: '750ml' },
  { title: 'Herbal tea blend soothed my throat', comment: 'Honey-lemon-ginger blend got me through a rough cold. Subscribed for a second round.', product: 'Wellness Tea Blend' },
  { title: 'Decanter oxygen did its job',  comment: 'A closed wine opened up beautifully after 20 minutes. Pour spout is drip-free.', product: 'Crystal Wine Decanter' },
  { title: 'Non-alcoholic spirit surprised me', comment: 'Finally a zero-proof option that doesn\'t taste like juice. Mixes like a real spirit.', product: 'Zero-Proof Spirit' },
  { title: 'Cocktail book is beautifully photographed', comment: 'Recipes actually work. Made three drinks from it my first night.', product: 'Craft Cocktail Book' },
  { title: 'Coconut water is crisp',      comment: 'Raw and refreshing. Doesn\'t have that sweetness bomb taste of boxed brands.', product: 'Raw Coconut Water Pack', verified: true },
  { title: 'Ice mold makes clear spheres', comment: 'Directional freezing is real. My old fashioneds look like cocktail bar quality.', product: 'Clear Ice Sphere Mold' },
];

export default buildReviews('drinks', ENTRIES, IMAGES);
