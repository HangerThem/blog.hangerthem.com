"use client"

import { GetStaticPaths, GetStaticProps } from "next"
import {
  requestGetPost,
  requestGetAllSlugs,
} from "@/services/api-services/postServices"
import { PageContainerNavbar } from "@/components/container/containerStyles"
import PostContainer from "@/components/container/postContainer"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

interface BlogPostProps {
  post: Post | undefined | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await requestGetAllSlugs()
  if (!slugs.slugs) return { paths: [], fallback: false }
  const paths = slugs.slugs.map((slug) => ({ params: { slug } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  if (!params?.slug) return { props: { post: null } }
  const slug = params.slug as string
  const res = await requestGetPost(slug)
  const post = res.post ? res.post : null

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <PageContainerNavbar>
      <Navbar />
      <PostContainer post={post} />
      <Footer />
    </PageContainerNavbar>
  )
}
