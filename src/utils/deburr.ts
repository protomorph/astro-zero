
export const deburr = (str: string) => str
  .normalize('NFD').replace(/\p{Diacritic}/gu, '')
