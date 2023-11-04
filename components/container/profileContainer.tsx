"use client"

import { useAuth } from "@/context/authContext"
import { decodeToken } from "@/utils/tokenUtils"
import { requestUserPosts } from "@/services/api-services/userServices"
import { requestUpdatePost } from "@/services/api-services/postServices"
import {
  ProfileContainerPage,
  ProfileTitle,
} from "@/components/container/profileContainerStyles"
import { useEffect, useState } from "react"

export default function ProfileContainer() {
  const { token } = useAuth()
  const [posts, setPosts] = useState<Post[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (!token) return
    const { name, email } = decodeToken(token) as TokenPayload
    setName(name)
    setEmail(email)
    requestUserPosts().then((res) => setPosts(res.posts || []))
  }, [])

  const handlePublishChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    post: Post
  ) => {
    const published = e.target.checked
    requestUpdatePost({ ...post, published }).then((res) => {
      const updatedPosts = posts.map((p) => {
        if (p.id === post.id) {
          return { ...p, published }
        }
        return p
      })
      setPosts(updatedPosts)
    })
  }

  return (
    <ProfileContainerPage>
      <ProfileTitle>Profile</ProfileTitle>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>
              {new Date(post.createdAt).toDateString()} •{" "}
              {post.published ? "Published" : "Draft"}
            </p>
            <label htmlFor="published">
              {post.published ? "Unpublish" : "Publish"}
            </label>{" "}
            <input
              type="checkbox"
              name="published"
              checked={post.published}
              onChange={(e) => handlePublishChange(e, post)}
            />
          </li>
        ))}
      </ul>
    </ProfileContainerPage>
  )
}
