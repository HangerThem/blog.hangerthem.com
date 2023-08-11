export function generateSlug(title: string): string {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return slug.endsWith("-") ? slug.slice(0, -1) : slug;
}
