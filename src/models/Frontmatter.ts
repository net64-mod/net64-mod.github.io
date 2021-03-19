export interface Frontmatter {
  title: string
  description?: string
  keywords?: string
}

export interface FrontmatterBlog {
  author: string
  title: string
  date: string | Date
  description?: string
  keywords?: string
}
