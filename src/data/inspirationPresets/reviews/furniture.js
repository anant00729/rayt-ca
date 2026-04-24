import buildReviews from './_builder';

const IMAGES = [
  '1555041469-a586c61ea9bc',
  '1493663284031-b7e3aefcae8e',
  '1524758631624-e2822e304c36',
  '1540574163026-643ea20ade25',
  '1505693416388-ac5ce068fe85',
  '1519710164239-da123dc03ef4',
  '1556909114-f6e7ad7d3136',
  '1513161455079-7dc1de15ef3e',
  '1567016526105-22da7c13161a',
  '1555041469-a586c61ea9bc',
  '1567538096630-e0c55bd6374c',
  '1583847268964-b28dc8f51f92',
];

const ENTRIES = [
  { title: 'Sofa is life-changing',      comment: 'Deep seat, supportive back, and the boucle holds up to a toddler + dog. Delivery crew placed it perfectly.', product: 'Modular Boucle Sofa', verified: true },
  { title: 'Solid wood table',           comment: 'You can feel the mass when you drag it. Grain is gorgeous and it arrived without a single nick.', product: 'Oak Dining Table', itemType: '6-Seater' },
  { title: 'Dresser assembled in an hour', comment: 'Clear instructions, all hardware labeled. Drawers glide like they cost twice as much.', product: 'Walnut Dresser' },
  { title: 'Chair is surprisingly comfortable', comment: 'Looks sculptural but supports my back for long work days. Nice balance of form and function.', product: 'Accent Lounge Chair', rating: 5 },
  { title: 'Shelf holds a lot of books', comment: 'Racked up 60+ hardcovers with zero sag. Finish is smooth and matches my other pieces.', product: 'Open Bookshelf' },
  { title: 'Bed frame is rock solid',    comment: 'No creaking, no wobble. The headboard padding is exactly as plush as pictured.', product: 'Upholstered Platform Bed', itemType: 'Queen' },
  { title: 'Console table fits my entryway', comment: 'Measured twice, landed perfect. Drawer soft-closes which my cat appreciates less than I do.', product: 'Slim Console Table' },
  { title: 'Coffee table a bit low',     comment: 'Beautiful piece but I wish it were 2 inches taller for my sofa depth. My own fault for not measuring.', product: 'Marble Coffee Table', rating: 4 },
  { title: 'Rug ties the whole room together', comment: 'Thick wool, no shedding after vacuuming twice. Colors are true to photo.', product: 'Hand-Tufted Wool Rug', rating: 5 },
  { title: 'Dining chairs are sturdy',   comment: 'Set of four survived two dinner parties without a wobble. Seat cushion is thick enough for long meals.', product: 'Cane-Back Dining Chair Set', itemType: 'Set of 4' },
  { title: 'Nightstand drawer soft-closes', comment: 'Small detail, huge upgrade from my old one. Perfect height relative to the bed.', product: 'Two-Drawer Nightstand' },
  { title: 'Bar stool height is perfect', comment: 'Counter fit perfectly, swivel is smooth, and backrest is actually comfortable.', product: 'Swivel Counter Stool' },
  { title: 'Desk has plenty of depth',   comment: 'Two monitors, a laptop, and still room for papers. Cable grommet is a thoughtful touch.', product: 'Walnut Writing Desk', verified: true },
  { title: 'Mirror installation was easy', comment: 'Hanging hardware was pre-installed and level. Frame feels substantial in hand.', product: 'Arched Floor Mirror' },
  { title: 'Cushion firmness is just right', comment: 'Not too soft, not a rock. Sinks in enough to be cozy without losing support.', product: 'Slipcovered Armchair' },
  { title: 'Floor lamp looks premium',   comment: 'Brass finish is warm, not yellow. Dimmer is smooth and throws great ambient light.', product: 'Brass Arc Floor Lamp', rating: 5 },
  { title: 'Bench great for entryway',   comment: 'Sturdy enough to sit on to put shoes. The storage below fits a basket each for two kids.', product: 'Oak Entryway Bench' },
  { title: 'Sectional took up more space than expected', comment: 'Love it but underestimated the chaise depth. Measure your room.', product: 'L-Shaped Sectional', rating: 3 },
  { title: 'Credenza gorgeous in living room', comment: 'Fits the TV and hides all the console cable spaghetti. Doors close flush.', product: 'Mid-Century Credenza' },
  { title: 'Side table matches everything', comment: 'Neutral enough to work in two different rooms. I ended up buying a second one.', product: 'Round Marble Side Table', verified: true },
];

export default buildReviews('furniture', ENTRIES, IMAGES);
