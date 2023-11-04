import prisma from "@/helpers/prismaHelper"

export async function GET(req: any) {
  const slug = req.url.split("/")[req.url.split("/").length - 1]

  const post: Post | null = await prisma.post.findUnique({
    where: { slug: slug as string, published: true },
    select: {
      id: true,
      title: true,
      slug: true,
      content: true,
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

  if (!post) {
    const response: IGetPostResponse = {
      error: "Post not found",
    }
    return new Response(JSON.stringify(response), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const response: IGetPostResponse = {
    post,
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
