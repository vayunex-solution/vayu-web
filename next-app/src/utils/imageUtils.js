/**
 * Safely extracts image src URL string from either a string path
 * or Next.js static image import object ({ src, height, width, default })
 */
export function getImgSrc(img) {
  if (!img) return '';
  if (typeof img === 'string') return img;
  if (img.src) return img.src;
  if (img.default) {
    if (typeof img.default === 'string') return img.default;
    if (img.default.src) return img.default.src;
  }
  return '';
}

export default getImgSrc;
