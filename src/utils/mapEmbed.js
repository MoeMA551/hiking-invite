export function toCoordEmbedUrl(lat, lng) {
  if (lat == null || lng == null) return "";
  return `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
}