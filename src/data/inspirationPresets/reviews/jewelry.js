import buildReviews from './_builder';

const IMAGES = [
  '1515562141207-7a88fb7ce338',
  '1583937443566-6fe1a1c6e400',
  '1599643477877-530eb83abc8e',
  '1611652022419-a9419f74343d',
  '1506630448388-4e683c67ddb0',
  '1535632066927-ab7c9ab60908',
  '1573408301185-9146fe634ad0',
  '1515562141207-7a88fb7ce338',
  '1617038220319-276d3cfab638',
  '1583937443566-6fe1a1c6e400',
  '1596944924616-7b38e7cfac36',
  '1605106702734-205df224ecce',
];

const ENTRIES = [
  { title: 'Timeless and so well made',  comment: 'The pavé setting is spotless and the ring fits true to size. Wearing daily for two months with zero issues.', product: 'Pavé Diamond Band', verified: true },
  { title: 'Perfect anniversary gift',   comment: 'Came in gorgeous packaging, certificate included. She cried. 10/10.', product: 'Solitaire Engagement Ring', itemType: '0.75ct' },
  { title: 'Chain feels premium',        comment: 'Weighty without being heavy on the neck. Clasp hasn\'t slipped once.', product: 'Solid Gold Rope Chain', rating: 5 },
  { title: 'Hoops are the perfect size',  comment: 'Not too big, not too small. Catches the light beautifully and they\'re surprisingly lightweight.', product: 'Medium Diamond Hoops' },
  { title: 'Stones are brilliant',       comment: 'The cut gives serious sparkle. Had a jeweler friend inspect and she was impressed.', product: 'Tennis Bracelet' },
  { title: 'Resized quickly',            comment: 'Sent in for a resize, back in two weeks with invisible seam. Service exceeded expectations.', product: 'Vintage-Inspired Ring', verified: true },
  { title: 'Pendant a touch small',      comment: 'Beautiful stone but a bit dainty for my frame. Layers nicely with my longer chain though.', product: 'Minimalist Diamond Pendant', rating: 4 },
  { title: 'Feels like an heirloom',     comment: 'The engraving looks hand-done and the box itself is gift-ready. I\'ll pass this down.', product: 'Engraved Signet Ring' },
  { title: 'Earrings for every day',     comment: 'Put them in the morning and forget about them. Comfortable enough to sleep in.', product: 'Diamond Studs' },
  { title: 'Color of the stone is exactly as pictured', comment: 'The sapphire matches the listing photos perfectly. No surprises. Fast shipping too.', product: 'Sapphire Halo Ring', verified: true },
  { title: 'Craftsmanship is evident',   comment: 'Prongs are symmetrical, underside finished beautifully. You can tell a real person made this.', product: 'Handmade Cluster Earrings', rating: 5 },
  { title: 'Bracelet clasp took getting used to', comment: 'Secure once latched but a bit fiddly to open one-handed. Otherwise gorgeous.', product: 'Link Bracelet', rating: 4 },
  { title: 'Love the layered look',      comment: 'Bought three different lengths and they layer without tangling. Exactly the vibe I wanted.', product: 'Paperclip Chain Set' },
  { title: 'Tiny diamond, huge impact',  comment: 'Subtle during the day, sparkles under evening light. Perfect for a second piercing.', product: 'Tiny Diamond Huggies' },
  { title: 'Ring box is beautiful',      comment: 'Presentation is as much a gift as the ring. Velvet interior, satisfying magnet closure.', product: 'Solitaire + Band Set', itemType: 'Size 6' },
  { title: 'Metal hasn\'t tarnished',    comment: 'Wore through workouts and showers for a month. Still shiny, no green skin.', product: 'Solid Gold Stud Earrings', rating: 5 },
  { title: 'Watch face is stunning',     comment: 'Guilloché dial is detailed in a way photos don\'t capture. Arrived perfectly timed.', product: 'Automatic Dress Watch' },
  { title: 'Engagement upgrade',         comment: 'Upgraded the center stone with their trade-in program. Painless process, beautiful result.', product: 'Three-Stone Engagement Ring', verified: true },
  { title: 'Necklace a little long for me', comment: 'Love the pendant but the chain is longer than expected. Had it shortened locally.', product: 'Baguette Bar Necklace', rating: 3 },
  { title: 'Mother\'s day win',          comment: 'My mom hasn\'t taken it off since. She says the chain is the softest she owns.', product: 'Delicate Heart Pendant' },
];

export default buildReviews('jewelry', ENTRIES, IMAGES);
