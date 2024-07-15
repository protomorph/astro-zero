
import { slugify } from './slugify'

const BLOG = '/blog'
const CATEGORIES = '/categories'
const TAGS = '/tags'

export const hrefs = {
  blog: `${BLOG}`,
  categories: `${BLOG}${CATEGORIES}`,
  home: '/',
  search: '/search',
  tags: `${BLOG}${TAGS}`,

  category: (cat: string) => `${BLOG}${CATEGORIES}/${slugify(cat)}`,
  post: (slug: string) => `${BLOG}/${slugify(slug)}`,
  tag: (tag: string) => `${BLOG}${TAGS}/${slugify(tag)}`,
}
