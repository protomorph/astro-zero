
import { defineCollection } from 'astro:content'

import { posts } from '@src/schema/posts'

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: posts,
  }),
}
