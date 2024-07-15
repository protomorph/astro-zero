
import { z } from 'astro:content'

export const posts = z.object({
  category: z.string().optional().default('Uncategorised'),
  description: z.string(),
  draft: z.boolean().optional().default(false),
  featured: z.boolean().optional().default(false),
  pubDate: z.date(),
  tags: z.array(z.string()).optional().default(['new']),
  title: z.string(),
})
