import { requestGet } from "@/helpers/requestHelper"

async function requestGetAuthor(id: string): Promise<IAuthorResponse> {
  return await requestGet<IAuthorResponse>(`/authors/${id}`)
}

export { requestGetAuthor }
