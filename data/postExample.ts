let post: IPost = {
  id: 1,
  date: new Date(),
  author: "John Doe",
  title: "My First Post",
  content: [
    { type: "header", level: 1, text: "Introduction" },
    { type: "paragraph", text: "This is the first paragraph of my post." },
    {
      type: "image",
      src: "http://example.com/image.jpg",
      alt: "An example image",
      width: 500,
      height: 500,
    },
    { type: "header", level: 2, text: "My List" },
    { type: "list", items: ["Item 1", "Item 2", "Item 3"], ordered: false },
    { type: "paragraph", text: "This is the conclusion of my post." },
  ],
}
