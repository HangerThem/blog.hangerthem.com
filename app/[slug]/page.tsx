"use client";

import { usePathname } from "next/navigation";
import { generateSlug } from "@/utils/generateSlug";
import { PageContainer } from "@/styles/pageStyle";
import { posts } from "@/data/posts";
import { PostContainer, PostError } from "@/styles/postStyle";
import { useState, useEffect } from "react";
import ContactCard from "@/components/contactCard";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const BlogPost = () => {
  const slug = usePathname().replace("/", "");
  const post = posts.find((post) => generateSlug(post.title) === slug);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  if (!post) {
    return (
      <>
        <Navigation />
        <PostError>
          <div>Post not found</div>
          <Link href="/">Go back</Link>
        </PostError>
        <Footer />
      </>
    );
  }

  if (typeof post.content !== "object" || !Array.isArray(post.content)) {
    return (
      <>
        <Navigation />
        <PostError>
          <h1>Error: Invalid post content</h1>
          <p>The post content must be an array of IContent objects.</p>
          <Link href="/">Go back</Link>
        </PostError>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <PageContainer>
        <ContactCard />
        <PostContainer>
          <h1>{post.title}</h1>
          <p>{post.date.toLocaleDateString()}</p>
          {post.content.map((item: any, index: number) =>
            item.type === "paragraph" ? (
              <p key={index}>{item.content.text}</p>
            ) : item.type === "image" ? (
              <Image
                src={`/static/images/${item.content.src}` || ""}
                alt={item.content.alt || ""}
                width={item.content.width}
                height={item.content.height}
                key={index}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ) : item.type === "title" ? (
              <h2 key={index}>{item.content}</h2>
            ) : (
              <ul>
                {item.content.map((listItem: any, index: number) => (
                  <li key={index}>{listItem}</li>
                ))}
              </ul>
            )
          )}
        </PostContainer>
      </PageContainer>
      <Footer />
    </>
  );
};

export default BlogPost;
