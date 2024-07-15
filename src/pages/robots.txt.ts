
import type { APIRoute } from 'astro'

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`

export const GET: APIRoute = () => new Response(
  robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  }
)
