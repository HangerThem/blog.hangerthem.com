"use client"

import { useEffect, useState } from "react"
import { requestGetPost } from "@/services/api-services/postServices"
import {
  PostPageContainer,
  PostDetails,
  PostTitle,
  PostAuthor,
  PostDate,
  PostCategory,
  PostHeader,
  PostTag,
  PostContent,
  PostTags,
} from "@/components/container/postContainerStyles"
import Showdown from "showdown"

interface PostProps {
  slug: string
}

const PostContainer: React.FC<PostProps> = ({ slug }) => {
  const [post, setPost] = useState<Post>()
  const converter = new Showdown.Converter({
    completeHTMLDocument: true,
    ghCompatibleHeaderId: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tables: true,
    tasklists: true,
    simpleLineBreaks: true,
    openLinksInNewWindow: true,
    emoji: true,
  })

  useEffect(() => {
    requestGetPost(slug).then((res) => {
      if (!res.post) return
      setPost(res.post)
    })
  }, [])

  if (!post) return <PostPageContainer />

  return (
    <PostPageContainer>
      <PostHeader>
        <PostCategory>{post.category.name}</PostCategory>
        <PostTitle>{post.title}</PostTitle>
        <PostTags>
          {post.tags.map((tag) => (
            <PostTag key={tag.id}>#{tag.name}</PostTag>
          ))}
        </PostTags>
      </PostHeader>
      <PostDetails>
        <PostDate>{new Date(post.createdAt).toDateString()}</PostDate>
        <PostAuthor>
          {post.author.name} • {post.author.email}
        </PostAuthor>
      </PostDetails>
      <PostContent
        dangerouslySetInnerHTML={{
          __html: converter.makeHtml(post.content),
        }}
      />
    </PostPageContainer>
  )
}

export default PostContainer
