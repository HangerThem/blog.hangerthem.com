import { requestPost } from "@/helpers/requestHelper"

async function requestRegister(
  email: string,
  name: string,
  password: string,
  passwordConfirmation: string
): Promise<IRegisterResponse> {
  return await requestPost<IRegisterResponse>("/auth/register", {
    email,
    name,
    password,
    passwordConfirmation,
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

async function requestVerify(token: string): Promise<IVerifyResponse> {
  return await requestPost<IVerifyResponse>("/auth/verify", {
    token,
  })
}

export { requestRegister, requestLogin, requestVerify }
