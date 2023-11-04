import { requestPost, requestGet, requestPatch } from "@/helpers/requestHelper"

async function requestCreatePost(
  title: string,
  tagsId: string[],
  categoryId: string,
  content: string
): Promise<ICreatePostResponse> {
  return await requestPost<ICreatePostResponse>("/posts", {
    title,
    tagsId,
    categoryId,
    content,
  })
}

async function requestGetPosts(): Promise<IGetPostsResponse> {
  return await requestGet<IGetPostsResponse>(`/posts`)
}

async function requestGetPost(slug: string): Promise<IGetPostResponse> {
  return await requestGet<IGetPostResponse>(`/posts/${slug}`)
}

async function requestUpdatePost(post: Post): Promise<IUpdatePostResponse> {
  return await requestPatch<IUpdatePostResponse>(`/posts`, post)
}

export { requestCreatePost, requestGetPosts, requestGetPost, requestUpdatePost }
