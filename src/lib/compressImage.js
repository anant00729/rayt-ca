const DEFAULT_MAX_BYTES = 5120;

async function loadImage(file) {
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = () => reject(new Error('Image decode failed'));
      img.src = url;
    });
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}

function drawScaled(img, maxDim) {
  const ratio = Math.min(1, maxDim / Math.max(img.width, img.height));
  const w = Math.max(1, Math.round(img.width * ratio));
  const h = Math.max(1, Math.round(img.height * ratio));
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, w, h);
  return canvas;
}

function canvasToWebp(canvas, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('toBlob failed'))),
      'image/webp',
      quality,
    );
  });
}

export async function compressToWebp(file, maxBytes = DEFAULT_MAX_BYTES) {
  const img = await loadImage(file);
  const dims = [1600, 1200, 900, 720, 540, 420, 320];
  const qualities = [0.8, 0.65, 0.5, 0.4, 0.3, 0.2];

  let smallest = null;
  for (const dim of dims) {
    const canvas = drawScaled(img, dim);
    for (const q of qualities) {
      const blob = await canvasToWebp(canvas, q);
      if (!smallest || blob.size < smallest.size) smallest = blob;
      if (blob.size <= maxBytes) return blob;
    }
  }
  return smallest;
}
