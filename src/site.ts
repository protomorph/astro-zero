
import { hrefs } from './utils/hrefs'

export type SiteSubscribe = {
  action: string
  button: string
  label: string
  name: string
  placeholder: string
  show: boolean
}

export type SiteConfig = {
  base: string
  description: string
  featuredPosts: number
  lang: string
  latestPosts: number
  locale: string
  name: string
  perPage: number
  relatedPosts: number
  subscribe: SiteSubscribe
  timezone: string
  url: string
}

export const site: SiteConfig = {
  name: 'Astro Zero',
  description: 'A zero styling, bare-bones Astro starter template',

  lang: 'en',
  locale: 'en-GB',
  timezone: 'Europe/London',

  base: '/',
  url: 'http://localhost:4321/',

  perPage: 6,
  latestPosts: 6,
  relatedPosts: 4,
  featuredPosts: 4,

  subscribe: {
    action: '#subscribe-action',
    button: 'Subscribe',
    label: 'Subscribe to our Newsletter',
    name: 'email',
    placeholder: 'name@mail.com',
    show: true,
  },
}

export type SiteNavItem = {
  href: string
  title: string
}

export const navigation: SiteNavItem[] = [
  {
    href: hrefs.home,
    title: 'Home',
  },
  {
    href: hrefs.blog,
    title: 'Blog',
  },
  {
    href: hrefs.search,
    title: 'Search',
  },
]

export const siteImports: string[] = []
