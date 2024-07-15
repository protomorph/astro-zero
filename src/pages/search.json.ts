
import type { APIRoute } from 'astro'

import { readableDateShort } from '@utils/date'
import { getPosts } from '@utils/posts'
import { clean } from '@utils/markdown'
import { hrefs } from '@utils/hrefs'

const join = (...args: string[]) => clean(args.join(' '))

export const GET: APIRoute = async () => {
  const { posts } = await getPosts()

  return new Response(JSON.stringify(
    posts.map(({ body, data, slug }) => ({
      body: join(
        body,
        data.title,
        data.category,
        data.description,
        data.tags.join(' ')
      ),
      date: readableDateShort(data.pubDate),
      description: data.description,
      href: hrefs.post(slug),
      image: data.image,
      title: data.title,
    }))
  ))
}
