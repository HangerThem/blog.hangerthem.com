import prisma from "@/helpers/prismaHelper"
import { comparePassword } from "@/utils/passwordUtils"
import { createToken } from "@/utils/tokenUtils"

export async function POST(req: any) {
  const { email, password } = await req.json()
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (!user) {
    const response: ILoginResponse = {
      message: "User not found",
    }
    return new Response(JSON.stringify(response), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const passwordMatch = await comparePassword(password, user.password)
  if (!passwordMatch) {
    const response: ILoginResponse = {
      message: "Invalid email or password",
    }
    return new Response(JSON.stringify(response), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const token = createToken({ id: user.id, email: user.email, name: user.name })
  const response: ILoginResponse = {
    token,
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
}
