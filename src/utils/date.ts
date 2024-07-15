
import { site } from '@src/site'

export function formatDate (
  date: Date | number,
  options: Intl.DateTimeFormatOptions
) {
  return new Intl.DateTimeFormat(
    site.locale, options
  ).format(new Date(date))
}

export const isoDate = (date: Date) => (new Date(date)).toISOString()

export const readableDateLong = (date: Date) => formatDate(date, {
	day: 'numeric',
	month: 'long',
	weekday: 'long',
	year: 'numeric',
})

export const readableDateShort = (date: Date) => formatDate(date, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export const updateDate = (date: number) => formatDate(date, {
  dateStyle: 'medium',
  timeStyle: 'long',
  hourCycle: 'h23',
  timeZone: site.timezone,
})

export const year = (new Date()).getFullYear()

