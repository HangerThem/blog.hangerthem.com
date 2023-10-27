import { serialize, CookieSerializeOptions } from "cookie"

const getCookie = (key: string, cookies: any) => {
  return cookies[key]
}

const setCookie = (key: string, value: string, expires: number, res: any) => {
  const options: CookieSerializeOptions = {
    expires: new Date(Date.now() + expires),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    sameSite: "strict",
  }
  res.setHeader("Set-Cookie", serialize(key, value, options))
}

const removeCookie = (key: string, res: any) => {
  const options: CookieSerializeOptions = {
    expires: new Date(Date.now() - 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    sameSite: "strict",
  }
  res.setHeader("Set-Cookie", serialize(key, "", options))
}

export { getCookie, setCookie, removeCookie }
