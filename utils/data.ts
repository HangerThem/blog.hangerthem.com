export const posts = [
  {
    id: 1,
    date: new Date("2023-01-13"),
    title: "First Post",
    content: "This is my first blog post.",
  },
  {
    id: 2,
    date: new Date("2023-01-12"),
    title: "Second Post of mine",
    content: "This is my second blog post.",
  },
];

export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}
