import buildReviews from './_builder';

const IMAGES = [
  '1593642702821-c8da6771f0c6',
  '1517336714731-489689fd1ca8',
  '1571171637578-41bc2dd41cd2',
  '1550009158-9ebf69173e03',
  '1498049794561-7780e7231661',
  '1531297484001-80022131f5a1',
  '1580894732444-8ecded7900cd',
  '1588590560438-5e27fe3f6b71',
  '1546054454-aa26e2b734c7',
  '1484704849700-f032a568e944',
  '1593642702821-c8da6771f0c6',
  '1498049794561-7780e7231661',
];

const ENTRIES = [
  { title: 'Mechanical keyboard feels amazing', comment: 'Tactile switches nail the click-to-actuation balance. Aluminum deck is heavy in the best way.', product: '75% Mechanical Keyboard', itemType: 'Brown Switch' },
  { title: 'Monitor is razor sharp',     comment: 'Calibrated it for photo work and the colors are immediately more accurate than my previous panel. No dead pixels.', product: '27" 4K IPS Monitor' },
  { title: 'Headphones block everything', comment: 'ANC is legitimately useful on flights. Battery lasts three long-haul flights between charges.', product: 'Wireless Noise-Cancelling Headphones', rating: 5 },
  { title: 'Mouse fits my hand',         comment: 'Low profile, silent clicks, and the tracking is flawless on glass desks. Worth the premium.', product: 'Ergo Wireless Mouse' },
  { title: 'Dock replaced three cables',  comment: 'Single cable to laptop, three 4K displays powered up, ethernet working. Finally.', product: 'Thunderbolt 4 Dock', verified: true },
  { title: 'Fast NVMe for the price',    comment: 'Benchmarks at the listed speeds. Cloned my OS in minutes and the difference is night and day.', product: '2TB NVMe SSD' },
  { title: 'Webcam is surprisingly good', comment: 'Usable in dim light, stays in focus, and doesn\'t blow out highlights on video calls.', product: '4K USB-C Webcam' },
  { title: 'Phone tripod is solid',      comment: 'Quick-release plate doesn\'t shift under weight. Fluid head pans smoothly for video.', product: 'Mobile Phone Tripod Kit' },
  { title: 'Controller feels premium',   comment: 'Hall-effect sticks are the future. No drift after six months of heavy use.', product: 'Pro Wireless Controller', rating: 5 },
  { title: 'Power bank saved my day',    comment: 'Charged my laptop from 20% to 80% on a long flight. Fast charging is real.', product: '100W USB-C Power Bank' },
  { title: 'Streaming mic is plug-and-play', comment: 'XLR-quality over USB. Compression and gain dialed in by default. No driver hassles.', product: 'USB Condenser Mic' },
  { title: 'GPU cooler quieter than stock', comment: 'Drop in temps and my card is finally silent under load. Installation was fiddly but worth it.', product: 'GPU Aftermarket Cooler' },
  { title: 'Cable management dream',     comment: 'Magnetic cable holders stay put even on glass. No more snake pit under the desk.', product: 'Desk Cable Management Kit', rating: 5 },
  { title: 'Smartwatch battery is decent', comment: 'Two days with always-on display. Workout tracking is accurate against my chest strap.', product: 'GPS Smartwatch', itemType: '44mm' },
  { title: 'Router covered my whole house', comment: 'Three-pack mesh blanketed a 2800sqft home. App setup was a breeze.', product: 'WiFi 6 Mesh Router', itemType: '3-Pack' },
  { title: 'Hub is pricey but essential', comment: 'Seven ports, all work at rated speeds. Metal housing keeps it cool during big file transfers.', product: 'Multi-Port USB-C Hub', rating: 4 },
  { title: 'Keycap set matches perfectly', comment: 'Double-shot PBT, thick, legends are crisp. Exact match to my aesthetic.', product: 'Double-Shot PBT Keycaps' },
  { title: 'Laptop stand sturdy',        comment: 'Holds my 16" laptop at the right height. Aluminum doesn\'t flex under my palm weight.', product: 'Aluminum Laptop Stand', verified: true },
  { title: 'SSD enclosure fast',         comment: 'Hit the 10Gbps rated speeds in practice. Cool to the touch even after a 1TB transfer.', product: 'NVMe External Enclosure' },
  { title: 'Earbuds fit finally',        comment: 'Four ear tip sizes meant I found one that stays put. Great sound, tight bass, clear calls.', product: 'Active Noise-Cancelling Earbuds' },
];

export default buildReviews('tech', ENTRIES, IMAGES);
