"use client"

import { PageContainerNavbar } from "@/components/container/containerStyles"
import PostContainer from "@/components/container/postContainer"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <PageContainerNavbar>
      <Navbar />
      <PostContainer slug={params.slug} />
      <Footer />
    </PageContainerNavbar>
  )
}
