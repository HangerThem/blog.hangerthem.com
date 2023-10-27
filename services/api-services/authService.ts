import { requestPost } from "@/helpers/requestHelper"

async function requestRegister(
  email: string,
  name: string,
  password: string
): Promise<IRegisterResponse> {
  return await requestPost<IRegisterResponse>("/auth/register", {
    email,
    name,
    password,
  })
}

async function requestLogin(
  email: string,
  password: string
): Promise<ILoginResponse> {
  return await requestPost<ILoginResponse>("/auth/login", {
    email,
    password,
  })
}

export { requestRegister, requestLogin }
