import { requestGet } from "@/helpers/requestHelper"

async function requestUser(): Promise<IUserResponse> {
  return await requestGet<IUserResponse>("/user")
}

async function requestUserPosts(): Promise<IUserPostsResponse> {
  return await requestGet<IUserPostsResponse>("/user/posts")
}

export { requestUser, requestUserPosts }
