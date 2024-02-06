import {
  Card,
  CardTitle,
  CardContent,
  CardDetails,
  CardLink,
  CardDate,
  CardCategory,
  CardTags,
  CardTag,
  CardAuthor,
  CardHeader,
  CardNewSplash,
} from "@/components/cards/cardStyles"
import Link from "next/link"
import React from "react"

interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const trunkedText = (text: string) => {
    const trunked = text.slice(0, 250)
    return trunked.length < text.length ? `${trunked}...` : trunked
  }

  const isNewPost = (createdAt: string) => {
    const createdAtDate = new Date(createdAt)
    const now = new Date()
    const diff = now.getTime() - createdAtDate.getTime()
    const diffInDays = diff / (1000 * 3600 * 24)
    return diffInDays < 3
  }

  return (
    <Card className={isNewPost(post.createdAt.toString()) ? "new" : ""}>
      {isNewPost(post.createdAt.toString()) && <CardNewSplash />}
      <CardHeader>
        <CardCategory>{post.category.name}</CardCategory>•
        <CardDate>{new Date(post.createdAt).toDateString()}</CardDate>
      </CardHeader>
      <CardTitle>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </CardTitle>
      <CardDetails>
        <CardTags>
          {post.tags.map((tag) => (
            <CardTag key={tag.id}>#{tag.name}</CardTag>
          ))}
        </CardTags>
        <CardAuthor>
          {post.author.name} • {post.author.email}
        </CardAuthor>
      </CardDetails>
      <CardContent>
        <>{trunkedText(post.content)}</>
      </CardContent>
      <CardLink href={`/posts/${post.slug}`}>Read more</CardLink>
    </Card>
  )
}

export default PostCard
