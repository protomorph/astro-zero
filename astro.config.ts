
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'astro/config'

import AutoImport from 'astro-auto-import'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

import { remarkCode } from './src/utils/remark-plugin-code'
import { site, siteImports } from './src/site'

const dir = dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  base: site.base,
  integrations: [
    AutoImport({ imports: siteImports }),
    mdx(),
    sitemap()
  ],
  markdown: {
    gfm: true,
    remarkPlugins: [remarkCode],
    syntaxHighlight: 'prism',
  },
  site: site.url,
  vite: {
    resolve: {
      alias: {
        '@src': resolve(dir, './src'),
        '@assets': resolve(dir, './src/assets'),
      },
    },
  },
})
