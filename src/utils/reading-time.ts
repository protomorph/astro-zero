
import type { CollectionEntry } from 'astro:content'
import { clean } from './markdown'

const WORDS_PER_MINUTE = 200

export function readingTime (
  body: CollectionEntry<'posts'>['body']
) {
  if (! body) return 0

  const words = clean(body).split(/\s+/g).length

  return words < 250 ? 1 : words < 500 ? 2
    : Math.ceil(words / WORDS_PER_MINUTE)
}
