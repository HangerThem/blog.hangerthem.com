import prisma from "@/helpers/prismaHelper"

export async function GET(req: any) {
  const id = req.url.split("/")[req.url.split("/").length - 1]

  const author = await prisma.user.findUnique({
    where: { id: id as string },
    select: {
      name: true,
      email: true,
    },
  })
  if (!author) {
    const response: IAuthorResponse = {
      error: "Author not found",
    }
    return new Response(JSON.stringify(response), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const response: IAuthorResponse = {
    author,
  }
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
