"use client";

import { usePathname } from "next/navigation";
import { generateSlug } from "@/utils/generateSlug";
import { posts } from "@/utils/posts";

const BlogPost = () => {
  const slug = usePathname().replace("/", "");
  const post = posts.find((post) => generateSlug(post.title) === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date.toLocaleDateString()}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
