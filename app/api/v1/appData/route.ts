import prisma from "@/helpers/prismaHelper"

export async function GET() {
  const categories: ICategory[] = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  })
  const tags: ITag[] = await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
    },
  })
  const response: IAppDataResponse = {
    categories,
    tags,
  }
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
