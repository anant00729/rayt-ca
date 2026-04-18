export function formatDate(iso) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

export function parseMedia(review) {
  const media = [];

  if (review.videoUrl) {
    media.push({ type: 'video', src: review.videoUrl, thumb: review.videoThumbnailUrl || null });
  } else if (review.youtubeUrl) {
    const match = review.youtubeUrl.match(/(?:v=|youtu\.be\/)([^&?]+)/);
    const id = match ? match[1] : null;
    media.push({
      type: 'youtube',
      src: review.youtubeUrl,
      thumb: id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null,
    });
  }

  const pics = review.pictureUrls;
  if (pics) {
    const urls = Array.isArray(pics)
      ? pics
      : typeof pics === 'string'
        ? JSON.parse(pics)
        : [];
    urls.forEach(url => media.push({ type: 'image', src: url, thumb: url }));
  }

  return media;
}

export function computeRatingStats(reviews) {
  if (!reviews.length) return { avg: '0.0', total: 0, counts: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } };

  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let sum = 0;
  for (const r of reviews) {
    const star = Math.min(5, Math.max(1, Math.round(r.rating)));
    counts[star] = (counts[star] || 0) + 1;
    sum += r.rating;
  }

  return {
    avg: (sum / reviews.length).toFixed(1),
    total: reviews.length,
    counts,
  };
}

export function sortReviews(reviews, sortBy) {
  const arr = [...reviews];
  switch (sortBy) {
    case 'highest':
      return arr.sort((a, b) => b.rating - a.rating);
    case 'lowest':
      return arr.sort((a, b) => a.rating - b.rating);
    case 'pictures-first':
      return arr.sort((a, b) => {
        const aHas = !!(a.pictureUrls?.length || a.videoUrl || a.youtubeUrl);
        const bHas = !!(b.pictureUrls?.length || b.videoUrl || b.youtubeUrl);
        return Number(bHas) - Number(aHas);
      });
    case 'only-pictures':
      return arr.filter(r => r.pictureUrls?.length || r.videoUrl || r.youtubeUrl);
    case 'recent':
    default:
      return arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
}

export function filterReviews(reviews, activeFilters) {
  if (!activeFilters.length) return reviews;
  return reviews.filter(r => activeFilters.includes(r.rating));
}

const SHADOW_MAP = {
  none: 'none',
  subtle: '0 1px 4px rgba(0,0,0,0.08)',
  strong: '0 4px 16px rgba(0,0,0,0.16)',
};

export function shadowVal(preset) {
  return SHADOW_MAP[preset] || 'none';
}
