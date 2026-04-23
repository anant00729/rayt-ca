import buildReviews from './_builder';

const IMAGES = [
  '1502920917128-1aa500764cbd',
  '1542038784456-1ea8e935640e',
  '1606986628025-b9c8f16b3f9c',
  '1510127034890-d3b3e88d6f57',
  '1519638831568-d9897f54ed69',
  '1520549233664-03f65c1d1327',
  '1495121605193-b116b5b9c5fe',
  '1554048612-b6a482b22c97',
  '1452780212940-6f5c0d14d848',
  '1509117035-7e90f1fdc1e9',
  '1483728642387-6c3bdd6c93e5',
  '1481833761820-0509d3217039',
];

const ENTRIES = [
  { title: 'Sharp as a tack',           comment: 'Focus snaps instantly even in low light. Bokeh is creamy and the build feels like a tank. Worth the upgrade.', product: 'Prime 50mm f/1.4 Lens', itemType: 'EF Mount' },
  { title: 'Travel rig sorted',         comment: 'Fits in a tiny sling and still handles 4K without overheating on my 2hr shoots. Battery life beats the spec sheet.', product: 'Compact Mirrorless Body' },
  { title: 'Leather patina is chef\'s kiss', comment: 'The strap looked great out of the box and has only gotten better in six months. No slippage, no digging into the shoulder.', product: 'Hand-Stitched Camera Strap', verified: true },
  { title: 'Tripod holds my heavy setup',comment: 'Locked down my 70-200 + body combo in 30mph wind at the coast. Zero flex.', product: 'Carbon Fiber Tripod', rating: 5 },
  { title: 'Color science impressed me', comment: 'Skin tones out of camera are closer to my edited look than any body I\'ve shot. Cuts my retouch time in half.', product: 'Full-Frame Mirrorless', itemType: 'Body Only' },
  { title: 'Filter kit covers everything', comment: 'ND, CPL, and GND all play nicely with my lenses. No color cast I can see.', product: 'Magnetic ND Filter Set' },
  { title: 'Softbox = flattering light',  comment: 'Modifier throws gorgeous even light across a 6-foot subject. Gradient on the seamless backdrop is smooth.', product: '36" Octa Softbox', verified: true },
  { title: 'Weather sealing held up',    comment: 'Shot a wedding in light rain. Not a drop inside. Would buy again just for peace of mind.', product: 'Pro Zoom 24-70mm' },
  { title: 'Finally ditched my old bag', comment: 'Roll-top keeps gear dry and the custom dividers survive airline handling. Laptop sleeve is padded enough.', product: 'Weatherproof Camera Backpack', rating: 4 },
  { title: 'SD cards read fast',         comment: 'Offloaded 120GB in under 4 minutes with the bundled reader. No dropouts on 8K footage either.', product: '256GB UHS-II SD Card' },
  { title: 'Print calibration a breeze', comment: 'Paired the monitor with the calibrator and my prints finally match the screen. Game changer for fine art.', product: 'Color Calibration Kit', itemType: 'Pro' },
  { title: 'Macro ring flash delivers',  comment: 'Insect shots are sharp edge-to-edge and the diffuser kills harsh specular highlights.', product: 'Macro Ring Light', rating: 5 },
  { title: 'Gimbal is butter',           comment: 'Three-axis handles my rig well. Walking mode is noticeably smoother than the previous gen.', product: '3-Axis Gimbal Stabilizer' },
  { title: 'A bit front heavy',          comment: 'Pairs beautifully with primes but my 70-200 tips forward unless I counterweight. Not a dealbreaker.', product: 'Travel Tripod Head', rating: 3 },
  { title: 'Photo book came out beautiful', comment: 'Matte paper, lay-flat binding, and the blacks are deep. Ordered three more as gifts.', product: 'Custom Photo Book' },
  { title: 'Great backup body',          comment: 'Kept it in my bag as second shooter. Menus are close enough to primary that I can swap mid-shoot.', product: 'APS-C Mirrorless', itemType: 'Kit' },
  { title: 'Filter threads stripped',    comment: 'Love the glass itself but the thread on one filter cross-threaded on first use. Support sent a replacement within a week.', product: 'Variable ND Filter', rating: 4, verified: true },
  { title: 'Light meter nails exposure', comment: 'Hand-held readings are within 1/3 stop of my body\'s evaluative meter. Invaluable for film.', product: 'Digital Light Meter' },
  { title: 'Cleaning kit is thorough',   comment: 'Swabs are lint-free and the blower actually has punch. Saved my sensor from a giant dust speck.', product: 'Sensor Cleaning Kit' },
  { title: 'Leather case fits perfectly', comment: 'Snug but not tight. Patina is starting to show and it looks better every week.', product: 'Full-Grain Camera Half-Case' },
];

export default buildReviews('photography', ENTRIES, IMAGES);
