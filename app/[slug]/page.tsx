"use client";

import { usePathname } from "next/navigation";
import { generateSlug } from "@/utils/generateSlug";
import { PageContainer } from "@/styles/pageStyle";
import { posts } from "@/data/posts";
import { PostContainer, PostError } from "@/styles/postStyle";
import ContactCard from "@/components/contactCard";
import Image from "next/image";
import Link from "next/link";

const BlogPost = () => {
  const slug = usePathname().replace("/", "");
  const post = posts.find((post) => generateSlug(post.title) === slug);

  if (!post) {
    return (
      <PostError>
        <div>Post not found</div>
        <Link href="/">Go back</Link>
      </PostError>
    );
  }

  if (typeof post.content !== "object" || !Array.isArray(post.content)) {
    return (
      <PostError>
        <h1>Error: Invalid post content</h1>
        <p>The post content must be an array of IContent objects.</p>
        <Link href="/">Go back</Link>
      </PostError>
    );
  }

  return (
    <PageContainer>
      <ContactCard />
      <PostContainer>
        <h1>{post.title}</h1>
        <p>{post.date.toLocaleDateString()}</p>
        {post.content.map((item: any, index: number) =>
          item.type === "paragraph" ? (
            <p key={index}>{item.content.text}</p>
          ) : (
            <Image
              src={item.content.src || ""}
              alt={item.content.alt || ""}
              width={item.content.width}
              height={item.content.height}
              key={index}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )
        )}
      </PostContainer>
    </PageContainer>
  );
};

export default BlogPost;
