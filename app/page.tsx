"use client";

import PostCard from "@/components/postCard";
import QuoteCard from "@/components/quoteCard";
import ContactCard from "@/components/contactCard";
import { PageContainer } from "@/styles/pageStyle";
import { posts } from "@/data/posts";

const HomePage = () => {
  posts.sort((a, b) => b.id - a.id);
  return (
    <PageContainer>
      <ContactCard />
      <div>
        {posts.map((item) => {
          switch (item.type) {
            case "post":
              return <PostCard post={item} key={item.title} />;
            case "quote":
              return <QuoteCard quote={item as any} key={item.title} />;
            default:
              return null;
          }
        })}
      </div>
    </PageContainer>
  );
};

export default HomePage;
