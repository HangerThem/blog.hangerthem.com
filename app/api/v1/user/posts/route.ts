import prisma from "@/helpers/prismaHelper"
import { getCookie } from "@/utils/serverCookies"
import { decodeToken } from "@/utils/tokenUtils"

export async function GET(req: any) {
  const token = getCookie(
    process.env.NEXT_PUBLIC_TOKEN_NAME as string,
    req.headers.get("cookie")
  )
  if (!token) {
    const response: IUserPostsResponse = {
      message: "Unauthorized",
    }
    return new Response(JSON.stringify(response), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  try {
    const decodedToken = decodeToken(token) as TokenPayload
    const user = await prisma.user.findUnique({
      where: {
        id: decodedToken.id,
      },
    })
    if (!user) {
      const response: IUserPostsResponse = {
        message: "User not found",
      }
      return new Response(JSON.stringify(response), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
    const posts = await prisma.post.findMany({
      where: {
        authorId: user.id,
      },
      select: {
        id: true,
        title: true,
        slug: true,
        content: true,
        published: true,
        author: {
          select: {
            name: true,
            email: true,
          },
        },
        createdAt: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    const response: IUserPostsResponse = {
      posts,
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    const response: IUserPostsResponse = {
      message: "Unauthorized",
    }
    return new Response(JSON.stringify(response), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
