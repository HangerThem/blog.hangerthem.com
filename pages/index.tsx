import { GetStaticProps } from "next"
import PostCard from "@/components/cards/postCard"
import { PageContainerNavbar } from "@/components/container/containerStyles"
import { CardsContainer } from "@/components/container/containerStyles"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { requestGetPosts } from "@/services/api-services/postServices"

export default function HomePage({ posts }: { posts: Post[] }) {
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await requestGetPosts()
  if (!res.posts) {
    return {
      props: {
        posts: [],
      },
      revalidate: 60,
    }
  }
  const posts = res.posts.sort((a: any, b: any) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
