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
    return new Response(
      JSON.stringify({ message: "Invalid email or password" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
  const passwordMatch = await comparePassword(password, user.password)
  if (!passwordMatch) {
    return new Response(
      JSON.stringify({ message: "Invalid email or password" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
  const token = createToken({ email })
  const response: ILoginResponse = {
    token,
  }
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
