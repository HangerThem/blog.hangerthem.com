"use client"

import { useEffect, useState } from "react"
import { requestGetPosts } from "@/services/api-services/postServices"
import PostCard from "@/components/cards/postCard"
import { PageContainerNavbar } from "@/components/container/containerStyles"
import { CardsContainer } from "@/components/container/containerStyles"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    requestGetPosts().then((res) => {
      setLoading(false)
      if (!res.posts) return
      res.posts.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
      setPosts(res.posts)
    })
  }, [])

  if (loading) return null

  return (
    <PageContainerNavbar>
      <Navbar />
      <CardsContainer>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </CardsContainer>
      <Footer />
    </PageContainerNavbar>
  )
}
