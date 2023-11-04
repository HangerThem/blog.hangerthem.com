import { requestGet } from "@/helpers/requestHelper"

async function requestAppData(): Promise<IAppDataResponse> {
  return await requestGet<IAppDataResponse>("/appData")
}

export { requestAppData }
