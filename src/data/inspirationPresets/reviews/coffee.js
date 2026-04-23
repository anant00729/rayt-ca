import buildReviews from './_builder';

const IMAGES = [
  '1511920170033-f8396924c348',
  '1495474472287-4d71bcdd2085',
  '1442512595331-e89e73853f31',
  '1509042239860-f550ce710b93',
  '1497935586351-b67a49e012bf',
  '1447933601403-0c6688de566e',
  '1461023058943-07fcbe16d735',
  '1498804103079-a6351b050096',
  '1517701604599-bb29b565090c',
  '1517253003578-8d0107baee87',
  '1504630083234-14187a9df0f5',
  '1521017432531-fbd92d768814',
];

const ENTRIES = [
  { title: 'Ethiopian beans are incredible', comment: 'Bright, floral, no bitterness. Completely changed how I think about a pour-over.', product: 'Ethiopian Yirgacheffe', itemType: '250g Whole Bean' },
  { title: 'Burr grinder worth every dollar',  comment: 'Even grind size means my espresso extraction finally makes sense. Huge upgrade from the blade grinder.', product: 'Conical Burr Grinder', rating: 5 },
  { title: 'V60 is my morning ritual',   comment: 'Ceramic holds heat well and the drawdown is right at 2:30 every time. Zen.', product: 'V60 Pour-Over Dripper' },
  { title: 'Chocolatey and smooth',      comment: 'Natural process Brazil is my daily. Keeps through the whole bag and shines cold brewed too.', product: 'Brazil Natural Single Origin' },
  { title: 'Espresso machine dialed in fast', comment: 'First shot was drinkable. By day three I had latte art down. Steam wand is powerful.', product: 'Semi-Auto Espresso Machine', itemType: 'Stainless' },
  { title: 'Gooseneck pours perfectly',  comment: 'Controlled stream makes pour-over actually reproducible. Handle stays cool on a hot stove.', product: 'Gooseneck Kettle' },
  { title: 'Subscription keeps me stocked', comment: 'Love the rotation. Got three origins I\'d never have tried on my own.', product: 'Roaster\'s Choice Subscription', verified: true },
  { title: 'Decaf that tastes like coffee', comment: 'Swiss water process actually works. My evening cup is finally enjoyable.', product: 'Swiss Water Decaf', rating: 5 },
  { title: 'Mug keeps coffee hot forever', comment: 'Drove 40 minutes with coffee in this mug and it was still steaming when I got there.', product: 'Double-Wall Travel Mug' },
  { title: 'Moka pot works on induction', comment: 'Love the thick, rich cup. Took a few tries to get the grind right but it\'s dialed now.', product: 'Induction-Ready Moka Pot', itemType: '6-Cup' },
  { title: 'Cold brew concentrate is smooth', comment: 'One bag gets me a week of cold brew. Clean, chocolatey, no bitterness.', product: 'Cold Brew Coffee Blend' },
  { title: 'French press cleans up easy', comment: 'The filter basket unscrews for a deep clean. Glass is thick enough I don\'t baby it.', product: 'Double-Filter French Press' },
  { title: 'Scale has timer built in',   comment: 'Bloom timing is automatic now. Accurate to the tenth of a gram and responsive.', product: 'Drip Coffee Scale', rating: 5 },
  { title: 'Light roast is a touch sour', comment: 'I prefer medium. Dialing my grind finer helped a bit but the roast profile isn\'t my style.', product: 'Kenyan AA Light Roast', rating: 3 },
  { title: 'Canister keeps beans fresh', comment: 'One-way valve actually works. Beans taste as good in week four as in week one.', product: 'Airtight Coffee Canister' },
  { title: 'Aeropress is a travel must', comment: 'I take this on every work trip. Makes a perfect cup in any hotel room.', product: 'Travel Aeropress Kit', verified: true },
  { title: 'Milk frother whips like a pro', comment: 'Dense microfoam in under 30 seconds. Latte art is doable even for beginners.', product: 'Electric Milk Frother' },
  { title: 'Espresso tamper fits perfectly', comment: 'Calibrated to 30lbs so I\'m consistent. Feels good in the hand.', product: 'Calibrated Espresso Tamper', rating: 4 },
  { title: 'Syrups are naturally sweet', comment: 'Real vanilla bean specks visible. No artificial aftertaste.', product: 'Small-Batch Vanilla Syrup' },
  { title: 'Barista mat saves my counter', comment: 'Catches drips and stops gadgets from sliding. Wish I\'d bought it sooner.', product: 'Silicone Barista Mat' },
];

export default buildReviews('coffee', ENTRIES, IMAGES);
