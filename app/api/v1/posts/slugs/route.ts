import prisma from "@/helpers/prismaHelper"

export const dynamic = "force-dynamic"

export async function GET(req: any) {
  const slugs: string[] = await prisma.post
    .findMany({
      where: {
        published: true,
      },
      select: {
        slug: true,
      },
    })
    .then((posts) => posts.map((post) => post.slug))

  if (!slugs) {
    const response: IGetAllSlugsResponse = {
      error: "No posts found",
    }
    return new Response(JSON.stringify(response), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const response: IGetAllSlugsResponse = {
    slugs,
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
