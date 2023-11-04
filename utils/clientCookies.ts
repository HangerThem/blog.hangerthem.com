import Cookies from "js-cookie"

export const getCookie = (key: string) => {
  return Cookies.get(key)
}

export const setCookie = (key: string, value: string, expires: number) => {
  Cookies.set(key, value, {
    expires: expires,
    path: "/",
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    sameSite: "strict",
    secure: true,
  })
}

export const removeCookie = (key: string) => {
  Cookies.remove(key)
}
