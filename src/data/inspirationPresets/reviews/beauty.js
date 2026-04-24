import buildReviews from './_builder';

const IMAGES = [
  '1522335789203-aabd1fc54bc9',
  '1570172619644-dfd03ed5d881',
  '1596462502278-27bfdc403348',
  '1512496015851-a90fb38ba796',
  '1556228720-195a672e8a03',
  '1526045478516-99145907023c',
  '1594736797933-d0501ba2fe65',
  '1571781926291-c477ebfd024b',
  '1588167056547-c183313da47c',
  '1519014816548-bf5fe059798b',
  '1522335789203-aabd1fc54bc9',
  '1598440947619-2c35fc9aa908',
];

const ENTRIES = [
  { title: 'Serum cleared my skin',      comment: 'Two weeks in and my hormonal breakouts are visibly calmer. Absorbs fast, no residue.', product: 'Niacinamide Serum', itemType: '30ml' },
  { title: 'Cleanser feels luxurious',   comment: 'Gentle enough for every day. Doesn\'t strip, foams just enough, smells botanical.', product: 'Milky Gel Cleanser' },
  { title: 'Lipstick color is exactly as pictured', comment: 'Rich pigment, non-drying, and the bullet itself is gorgeous. My new daily.', product: 'Satin Finish Lipstick' },
  { title: 'Retinol worth the hype',     comment: 'Three months in, fine lines around my eyes are softer. Started slow and had zero irritation.', product: 'Encapsulated Retinol' },
  { title: 'Foundation matches perfectly', comment: 'Shade finder worked on the first try. Natural finish, buildable, wears a full day.', product: 'Skin Tint Foundation', verified: true },
  { title: 'Mascara lengthens without clumping', comment: 'Brush shape makes fanning out easy. Stays put through humidity and tears.', product: 'Lengthening Mascara' },
  { title: 'Body lotion absorbs fast',   comment: 'Skin feels plush, not greasy. Subtle scent that fades within minutes. Perfect for layering.', product: 'Hydrating Body Lotion' },
  { title: 'Hair mask transformed my ends', comment: 'Bleached hair felt straw. Two uses and it\'s genuinely soft. Smell is heavenly.', product: 'Deep Conditioning Mask' },
  { title: 'Blush gives me that flushed look', comment: 'Cream texture blends with fingers. The shade suits warm and cool undertones both.', product: 'Cream Blush' },
  { title: 'Fragrance lasts all day',    comment: 'Dry-down is beautiful. Got compliments at hour 10. Worth the splurge.', product: 'Eau de Parfum', itemType: '50ml' },
  { title: 'Sunscreen you\'ll actually wear', comment: 'No white cast, no greasy finish, sits perfectly under makeup. Finally.', product: 'Mineral SPF 50' },
  { title: 'Eye cream de-puffed my mornings', comment: 'Metal applicator feels amazing cold. Morning bags are noticeably reduced.', product: 'Cooling Eye Cream', rating: 5 },
  { title: 'Exfoliator is the perfect strength', comment: 'AHA + BHA combo didn\'t sting or redden. Skin is noticeably smoother.', product: 'Resurfacing Exfoliator' },
  { title: 'Lip balm heals',             comment: 'Chapped, peeling lips healed overnight. Not sticky, not waxy, lightly scented.', product: 'Healing Lip Balm' },
  { title: 'Palette has every shade I need', comment: 'Mattes are buttery, shimmers are intense. The warm tones suit my skin.', product: 'Warm-Tone Eyeshadow Palette' },
  { title: 'Cleansing balm is a ritual', comment: 'Melts mascara without stinging my eyes. Skin feels clean but not tight after rinsing.', product: 'Double Cleanse Balm', verified: true },
  { title: 'Body scrub left me glowing', comment: 'Coarse enough to exfoliate but not scratchy. Skin looked visibly brighter.', product: 'Coffee Body Scrub' },
  { title: 'Brow gel holds all day',     comment: 'Fine fibers actually add bulk to sparse spots. Doesn\'t get crunchy.', product: 'Tinted Brow Gel' },
  { title: 'Hair oil tames frizz',       comment: 'Two drops through mid-lengths to ends. Humidity is no longer a problem.', product: 'Argan Hair Oil', rating: 5 },
  { title: 'Fragrance layered beautifully', comment: 'Body lotion + EDP combo makes the scent last even longer. Great gift set.', product: 'Layered Fragrance Set' },
];

export default buildReviews('beauty', ENTRIES, IMAGES);
