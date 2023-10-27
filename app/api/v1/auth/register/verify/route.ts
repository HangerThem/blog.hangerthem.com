import prisma from "@/helpers/prismaHelper"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")

  if (typeof token !== "string") {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      verifyToken: token,
    },
  })
  if (!user) {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      verified: true,
      verifyToken: null,
    },
  })
  return new Response(JSON.stringify({ message: "User verified" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
