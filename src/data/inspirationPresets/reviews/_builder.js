const NAMES = [
  'Alex R.', 'Priya S.', 'Marcus L.', 'Nina K.', 'Jordan T.', 'Sofia P.',
  'Wei C.', 'Amira D.', 'Liam O.', 'Hana M.', 'Diego F.', 'Yuki T.',
  'Ethan B.', 'Isla W.', 'Omar J.', 'Ruby G.', 'Tom V.', 'Clara N.',
  'Ben H.', 'Zara K.',
];

const DAYS = [9, 22, 41, 55, 73, 88, 102, 119, 136, 154, 172, 190, 208, 227, 245, 263, 281, 299, 318, 336];

function imgUrl(id) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=900&auto=format&fit=crop`;
}

function dateFor(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString();
}

/**
 * @param {string} topic - short slug
 * @param {{ title: string, comment: string, product: string, itemType?: string, rating?: number, verified?: boolean, imgIdx?: number, secondImgIdx?: number }[]} entries
 * @param {string[]} imageIds - pool of Unsplash photo IDs for this topic
 */
export default function buildReviews(topic, entries, imageIds) {
  return entries.slice(0, 20).map((e, i) => {
    const imgIdx = e.imgIdx ?? (i % imageIds.length);
    const primary = imgUrl(imageIds[imgIdx]);
    const pictureUrls = [primary];
    if (e.secondImgIdx !== undefined && imageIds[e.secondImgIdx]) {
      pictureUrls.push(imgUrl(imageIds[e.secondImgIdx]));
    }
    return {
      id: `${topic}-${i + 1}`,
      reviewerName: NAMES[i % NAMES.length],
      rating: e.rating ?? (i % 7 === 0 ? 4 : i % 11 === 0 ? 3 : 5),
      createdAt: dateFor(DAYS[i % DAYS.length]),
      reviewTitle: e.title,
      comment: e.comment,
      pictureUrls,
      verified: e.verified ?? (i % 4 !== 0),
      productTitle: e.product,
      productHandle: e.product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
      productImageUrl: imgUrl(imageIds[(imgIdx + 1) % imageIds.length]),
      ...(e.itemType ? { itemType: e.itemType } : {}),
    };
  });
}
