
export const clean = (str: string) => str
  .replace(/#{1,6}\s/g, ' ')
  .replace(/\r\n\r\n/g, ' ')
  .replace(/```/g, ' ')
  .replace(/\r\n/g, ' ')
  .replace(/\s{1,}/g, ' ')
  .toLowerCase()
  .trim()
