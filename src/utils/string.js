export function slugGenerator(string) {
  // const english = /^[A-Za-z0-9]*$/;
  const slug = string.toLowerCase().replace(/-+/g, "").replace(/\s+/g, "-")
  return slug
}
