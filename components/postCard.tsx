import Link from "next/link";
import {
  PostCardContainer,
  PostCardTitle,
  PostCardDivider,
  PostCardDetails,
  PostLink,
} from "./postCardStyle";
import { generateSlug } from "@/utils/generateSlug";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    date: Date;
    type: string;
    content: Array<any>;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  const firstParagraph = post.content.find((item) => item.type === "paragraph");
  const truncatedText = firstParagraph?.content.text.slice(0, 150);

  return (
    <PostCardContainer key={post.id}>
      <PostCardTitle>
        <Link href={`/${generateSlug(post.title)}`}>{post.title}</Link>
      </PostCardTitle>
      <PostCardDivider />
      <div>
        <PostCardDetails>
          {post.date.toLocaleDateString()} •{" "}
          {post.type[0].toUpperCase() + post.type.slice(1)}
        </PostCardDetails>
        <div>
          {truncatedText && (
            <p key={truncatedText}>
              {truncatedText.length < 150
                ? truncatedText
                : truncatedText + "..."}
            </p>
          )}
          <PostLink>
            <Link href={`/${generateSlug(post.title)}`}>Read more</Link>
          </PostLink>
        </div>
      </div>
    </PostCardContainer>
  );
};

export default PostCard;
