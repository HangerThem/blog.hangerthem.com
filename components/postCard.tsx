"use client";

import Link from "next/link";
import {
  PostCardContainer,
  PostCardTitle,
  PostCardDivider,
  PostCardDetails,
} from "./postCardStyle";
import { generateSlug } from "@/utils/generateSlug";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    date: Date;
    type: string;
    content: string;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <PostCardContainer key={post.id}>
      <Link href={`/${generateSlug(post.title)}`}>
        <PostCardTitle>{post.title}</PostCardTitle>
      </Link>
      <PostCardDivider />
      <div>
        <PostCardDetails>
          {post.date.toLocaleDateString()} •{" "}
          {post.type[0].toUpperCase() + post.type.slice(1)}
        </PostCardDetails>
        <div>
          {post.content.length > 150
            ? post.content.slice(0, 150) + "..."
            : post.content}
        </div>
      </div>
    </PostCardContainer>
  );
};

export default PostCard;
