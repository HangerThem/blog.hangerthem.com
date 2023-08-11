"use client";

import PostCard from "@/components/postCard";
import ContactCard from "@/components/contactCard";
import { PageContainer } from "@/styles/pageStyle";
import { posts } from "@/utils/posts";

const HomePage = () => {
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <PageContainer>
      <ContactCard />
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </PageContainer>
  );
};

export default HomePage;
