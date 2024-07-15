
import type { APIContext, APIRoute } from 'astro'

import rss from '@astrojs/rss'

import { getPosts } from '@utils/posts'
import { hrefs } from '@utils/hrefs'
import { site } from '@src/site'

export const GET: APIRoute = async (context: APIContext) => {
  const { posts } = await getPosts()

  return rss({
    title: site.name,
    description: site.description,
    site: context.site as URL,
    items: posts.map(({ data, slug }) => ({
      title: data.title,
      description: data.description,
      link: hrefs.post(slug),
      pubDate: data.pubDate,
    })),
  })
}
