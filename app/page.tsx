"use client";

import Link from "next/link";
import { posts, generateSlug } from "@/utils/data";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${generateSlug(post.title)}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
