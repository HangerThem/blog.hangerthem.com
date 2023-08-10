"use client";

import { usePathname } from "next/navigation";
import { posts, generateSlug } from "@/utils/data";

const BlogPost = () => {
  const slug = usePathname().replace("/", "");
  const post = posts.find((post) => generateSlug(post.title) === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date.toUTCString().split(" ").slice(0, 4).join(" ")}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
