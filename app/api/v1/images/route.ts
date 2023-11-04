import { getCookie } from "@/utils/serverCookies"
import { decodeToken } from "@/utils/tokenUtils"
import prisma from "@/helpers/prismaHelper"

export async function POST(req: Request) {
  const formData = await req.formData()
  const image = formData.get("image")

  const token = getCookie(
    process.env.NEXT_PUBLIC_TOKEN_NAME as string,
    req.headers.get("cookie")
  )
  const { id } = decodeToken(token) as TokenPayload
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })
  if (!user) {
    const response: ICreatePostResponse = {
      error: "Unauthorized",
    }
    return new Response(JSON.stringify(response), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  if (!image) {
    return new Response(JSON.stringify({ message: "No image provided" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const cdnUrl = process.env.CDN_URL
  if (!cdnUrl) {
    return new Response(JSON.stringify({ message: "CDN URL not found" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const cdnEndpoint = process.env.CDN_ENDPOINT
  if (!cdnEndpoint) {
    return new Response(JSON.stringify({ message: "CDN endpoint not found" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  try {
    const cdnResponse = await fetch(`${cdnUrl}/${cdnEndpoint}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const cdnData = await cdnResponse.json()
    if (!cdnData.imageDetails.url) {
      return new Response(JSON.stringify({ message: "Image upload failed" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
    const response: IUploadImageResponse = {
      imageUrl: cdnData.imageDetails.url,
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ message: "Image upload failed" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
