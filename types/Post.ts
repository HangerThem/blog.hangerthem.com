interface Post {
  id: string
  title: string
  slug: string
  author: IAuthor
  content: string
  createdAt: Date
  category: ICategory
  published?: boolean
  tags: ITag[]
}
