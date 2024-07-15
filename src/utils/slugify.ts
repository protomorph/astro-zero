
import { deburr } from './deburr'

export const slugify = (str: string) => deburr(str)
  .toLowerCase().trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '')
