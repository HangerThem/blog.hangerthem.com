import { PrismaClient } from "@prisma/client"
import { categories, tags } from "./data"

const prisma = new PrismaClient()

async function main() {
  await prisma.category.deleteMany()
  console.log("Deleted all categories")
  await prisma.tag.deleteMany()
  console.log("Deleted all tags")
  await populateCategories()
  console.log("Populated categories")
  await populateTags()
  console.log("Populated tags")
}

async function populateCategories() {
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    })
  }
}

async function populateTags() {
  for (const tag of tags) {
    await prisma.tag.create({
      data: tag,
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })

  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
