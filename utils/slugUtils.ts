const generateSlug = (title: string): string => {
  return `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-$/, "")}-${new Date().getTime().toString()}`
}

const matchSlug = (slug: string): string => {
  return slug.match(/[^-]+$/)?.toString() || ""
}

export { generateSlug, matchSlug }
