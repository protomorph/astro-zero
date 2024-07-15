
import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

import { slugify } from '@utils/slugify'
import { hrefs } from '@utils/hrefs'

export type CategoryItem = {
  count: number
  href: string
  name: string
  slug: string
}

export type TagItem = {
  count: number
  href: string
  name: string
  slug: string
}

export async function getPosts () {

  const posts = [
    ...await getCollection('posts', (
      { data }: CollectionEntry<'posts'>
    ) => {
      if (import.meta.env.PROD)
        return (
          new Date(data.pubDate)
        ).getTime() < Date.now()
        || data.draft !== true

      return  true
    })
  ]
  .sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )

  const byCategory = (
    category: string
  ): CollectionEntry<'posts'>[] => posts.filter(
    ({ data }) => slugify(data.category) === slugify(category)
  )

  const byTag = (
    tag: string
  ): CollectionEntry<'posts'>[] => posts.filter(
    ({ data }) => data.tags.map(
      (t: string) => slugify(t)
    ).includes(slugify(tag))
  )

  const categories = [...new Set(
    posts.flatMap(
      ({ data}) => data.category
    ).filter(Boolean)
  )]
  .map<CategoryItem>((category: string) => ({
    count: byCategory(category).length,
    href: hrefs.category(category),
    name: category,
    slug: slugify(category),
  }))
  .sort(
    (a, b) => b.count - a.count
  )

  const tags = [...new Set(
    posts.flatMap(
      ({ data }) => data.tags || []
    ).filter(Boolean)
  )]
  .map<TagItem>((tag: string) => ({
    count: byTag(tag).length,
    href: hrefs.tag(tag),
    name: tag,
    slug: slugify(tag),
  }))
  .sort(
    (a, b) => b.count - a.count
  )

  for (let { data } of posts) {
    data.categorized = categories.find(
      (c) => slugify(c.name) === slugify(data.category)
    )

    data.tagged = data.tags.map(
      (tag: string) => tags.find(
        (t) => slugify(t.name) === slugify(tag)
      )
    )
  }

  return {
    posts,
    categories,
    tags,

    byTag,
    byCategory,

    featured(
      limit: number = 4
    ): CollectionEntry<'posts'>[] {
      return [
        ...posts.filter(
          ({ data }) => data.featured
        )
      ].slice(0, limit)
    },
    latest(
      limit: number = 6,
      featured: boolean = true
    ): CollectionEntry<'posts'>[] {
      const filter = featured ? posts : posts.filter(
        ({ data }) => ! data.featured
      )

      return [...filter].slice(0, limit)
    },
    related(
      { id, data }: CollectionEntry<'posts'>,
      limit: number = 4
    ): CollectionEntry<'posts'>[] {
      return [
        ...byCategory(data.category)
      ].filter(
        (a) => a.id !== id
      ).slice(0, limit)
    },
  }

}
