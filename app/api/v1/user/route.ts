import prisma from "@/helpers/prismaHelper"
import { getCookie } from "@/utils/serverCookies"
import { decodeToken } from "@/utils/tokenUtils"

export async function GET(req: any) {
  const token = getCookie(
    process.env.NEXT_PUBLIC_TOKEN_NAME as string,
    req.headers.get("cookie")
  )
  if (!token) {
    const response: IUserResponse = {
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
      const response: IUserResponse = {
        message: "User not found",
      }
      return new Response(JSON.stringify(response), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
    const response: IUserResponse = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        verified: user.verified,
      },
    }
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    const response: IUserResponse = {
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
