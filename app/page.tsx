"use client";

import PostCard from "@/components/postCard";
import QuoteCard from "@/components/quoteCard";
import ContactCard from "@/components/contactCard";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { PageContainer } from "@/styles/pageStyle";
import { useState, useEffect } from "react";
import { posts } from "@/data/posts";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  posts.sort((a, b) => b.id - a.id);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <Navigation />
      <PageContainer>
        <ContactCard />
        <div>
          {posts.map((item) => {
            switch (item.type) {
              case "post":
                return <PostCard post={item as any} key={item.title} />;
              case "quote":
                return <QuoteCard quote={item as any} key={item.title} />;
              default:
                return null;
            }
          })}
        </div>
      </PageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
