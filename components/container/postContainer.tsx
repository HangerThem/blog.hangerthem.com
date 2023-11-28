"use client"

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
  post: Post | undefined | null
}

const PostContainer: React.FC<PostProps> = ({ post }) => {
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
