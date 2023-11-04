import prisma from "@/helpers/prismaHelper"
import { generateSlug } from "@/utils/slugUtils"
import { decodeToken } from "@/utils/tokenUtils"
import { getCookie } from "@/utils/serverCookies"

export async function POST(req: any) {
  const { title, tagsId, categoryId, content } = await req.json()
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
  const slug = generateSlug(title)
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  })
  if (!category) {
    const response: ICreatePostResponse = {
      error: "Category not found",
    }
    return new Response(JSON.stringify(response), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const post = await prisma.post.create({
    data: {
      title,
      slug,
      content,
      categoryId: category.id,
      authorId: user.id,
      tags: {
        connect: tagsId.map((tagId: string) => ({
          id: tagId,
        })),
      },
    },
  })
  const response: ICreatePostResponse = {
    message: "Post created successfully",
  }
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function GET() {
  const posts: Post[] = await prisma.post.findMany({
    where: {
      published: true,
    },
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

  const response: IGetPostsResponse = {
    posts,
  }

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export async function PATCH(req: any) {
  const { id, title, tags, category, content, published } = await req.json()
  const token = getCookie(
    process.env.NEXT_PUBLIC_TOKEN_NAME as string,
    req.headers.get("cookie")
  )
  const { id: userId } = decodeToken(token) as TokenPayload
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  if (!user) {
    const response: IUpdatePostResponse = {
      error: "Unauthorized",
    }
    return new Response(JSON.stringify(response), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  })
  if (!post) {
    const response: IUpdatePostResponse = {
      error: "Post not found",
    }
    return new Response(JSON.stringify(response), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  if (post.authorId !== user.id) {
    const response: IUpdatePostResponse = {
      error: "Unauthorized",
    }
    return new Response(JSON.stringify(response), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const slug = generateSlug(title)
  const categoryUpdated = await prisma.category.findUnique({
    where: {
      id: category.id,
    },
  })
  if (!category) {
    const response: IUpdatePostResponse = {
      error: "Category not found",
    }
    return new Response(JSON.stringify(response), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const updatedPost = await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
      slug,
      categoryId: category.id,
      published: published ?? false,
      tags: {
        connect: tags.map((tag: ITag) => ({
          id: tag.id,
        })),
      },
    },
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
  const response: IUpdatePostResponse = {
    message: "Post updated successfully",
    post: updatedPost,
  }
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
