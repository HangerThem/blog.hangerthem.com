import { requestGet } from "@/helpers/requestHelper"

async function requestUser(): Promise<IUserResponse> {
  return await requestGet<IUserResponse>("/user")
}

export { requestUser }