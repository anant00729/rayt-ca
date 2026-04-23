import buildReviews from './_builder';

const IMAGES = [
  '1583337130417-3346a1be7dee',
  '1517849845537-4d257902454a',
  '1543466835-00a7907e9de1',
  '1586023492125-27b2c045efd7',
  '1561037404-61cd46aa615b',
  '1552053831-71594a27632d',
  '1587300003388-59208cc962cb',
  '1425082661705-1834bfd09dca',
  '1548199973-03cce0bbc87b',
  '1601758228041-f3b2795255f1',
  '1574144611937-0df059b5ef3e',
  '1519052537078-e6302a4968d4',
];

const ENTRIES = [
  { title: 'My dog is obsessed',         comment: 'He drags it off the shelf every morning. Chewed for weeks and still looks new.', product: 'Natural Rubber Chew Toy' },
  { title: 'Harness fit is spot on',     comment: 'Adjusted once and hasn\'t slipped since. My pup pulls less on walks with this than the old one.', product: 'No-Pull Dog Harness', itemType: 'Medium' },
  { title: 'Cat jumps right in',         comment: 'Was worried she\'d ignore it but she chose the bed over my laptop. Miracle.', product: 'Plush Cat Cave', rating: 5, verified: true },
  { title: 'Food bowl actually slows her down', comment: 'She used to inhale her meal in 40 seconds. Now it takes 8 minutes and no more vomiting.', product: 'Slow Feeder Bowl' },
  { title: 'Leash is sturdy',            comment: 'Survived a squirrel incident. Padded handle saved my palm.', product: 'Reflective Training Leash' },
  { title: 'Kitten loves the tunnel',    comment: 'Collapsible, easy to wash, and she lives in it. 10/10 purchase.', product: 'Crinkle Play Tunnel' },
  { title: 'Grooming brush works',       comment: 'Shed hair comes off in clumps and my golden actually enjoys the process. House is visibly cleaner.', product: 'Self-Cleaning Pet Brush', rating: 5 },
  { title: 'Crate assembled easily',     comment: 'Thirty minutes from box to done. The corners are padded so my older dog isn\'t banging himself.', product: 'Travel Crate', itemType: 'Large' },
  { title: 'Puppy pee pads saved our floors', comment: 'Absorbent, no leaks. Training went smooth because she learned to aim.', product: 'Training Pads', rating: 4 },
  { title: 'Catnip toy = house clown',   comment: 'My rescue has been playing for hours. Scent is strong enough to tempt even the picky one.', product: 'Organic Catnip Mice', verified: true },
  { title: 'Bed arrived smaller than I thought', comment: 'Lovely quality but order a size up. My 70lb lab only fits curled.', product: 'Orthopedic Dog Bed', rating: 3 },
  { title: 'Treats he\'ll do anything for', comment: 'Used these for loose-leash training. He\'s walking like a champion now.', product: 'Freeze-Dried Liver Treats' },
  { title: 'Waterproof collar is legit', comment: 'Took it through the lake and the farm mud. Hose off, good as new. No smell.', product: 'Waterproof Dog Collar' },
  { title: 'GPS tracker is a lifesaver', comment: 'Found our runaway cat in 20 minutes. Battery lasts a full week between charges.', product: 'Pet GPS Tracker', itemType: 'Cats & Small Dogs' },
  { title: 'Litter box is huge but worth it', comment: 'My big cat finally fits comfortably. Scooping once a day is enough with the bigger surface area.', product: 'Jumbo Enclosed Litter Box' },
  { title: 'Car seat cover is a must',   comment: 'No more fur on the back seats. The hammock style kept him out of the footwell on turns.', product: 'Car Seat Hammock', verified: true },
  { title: 'Plush a bit too squeaky',    comment: 'He loves it but I hate the noise. Ordered a non-squeak version as backup for sanity.', product: 'Plush Squeaker Dog Toy', rating: 4 },
  { title: 'Fish tank kit complete',     comment: 'Everything actually included. Filter is quiet, light spectrum looks great on the plants.', product: 'Starter Aquarium Kit' },
  { title: 'Scratcher replaced the couch', comment: 'She finally stopped clawing the sofa. Wore through this one in two months but that\'s the point.', product: 'Sisal Cat Scratcher', rating: 5 },
  { title: 'Cool mat for hot days',      comment: 'Summer heat wave and he actually chose the mat over the tile. Self-activating, no water to fuss with.', product: 'Cooling Pet Mat' },
];

export default buildReviews('pets', ENTRIES, IMAGES);
