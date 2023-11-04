import { API_URL } from "@/config/servicesConfig"

async function requestGet<Res>(
  url: string,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "GET",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

async function requestPost<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "POST",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

async function requestPostFormData<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "POST",
      cache: cache ?? "no-store",
      body: body,
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

async function requestPatch<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "PATCH",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

async function requestDelete<Res>(
  url: string,
  body: any,
  cache?: "no-store" | "force-cache",
  revalidate?: number
): Promise<Res> {
  return (
    await fetch(API_URL + url, {
      method: "DELETE",
      cache: cache ?? "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: revalidate ?? 0 },
    })
  ).json() as Res
}

export {
  requestGet,
  requestPost,
  requestPostFormData,
  requestPatch,
  requestDelete,
}
