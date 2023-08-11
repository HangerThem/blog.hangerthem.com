import { IPost } from "../interface/IPost";

export const posts: IPost[] = [
  {
    id: 1,
    date: new Date("2023-08-11"),
    type: "post",
    title: "Well, hello there!",
    content: [
      {
        type: "paragraph",
        content: {
          text: "So this is it - my first blog post, on my own blog. I have been thinking about this for a long time, and now I finally did it. I am not sure how often or what I will write about, but I will try to keep it interesting.",
        },
      },
      {
        type: "paragraph",
        content: {
          text: "But now for a short introduction: My name is Frank Borisjuk also known as HangerThem. I am 19 years old, a software developer from Czechia, currently working at Dreamind as a full-stack developer. I am also a student at PSLIB, where I study computer science.",
        },
      },
      {
        type: "image",
        content: {
          src: "/static/images/borisjuk_01.png",
          width: 500,
          height: 500,
          alt: "Image",
        },
      },
    ],
  },
];
