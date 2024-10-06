export type column = {
  id: string,
  title: string
  type: string
  format?: string
  decimalDigits?: number
}
export type cell = {
  value?: string | number | null
  unit?: string
}
export type row = Record<string, cell | undefined>

export enum OrderDirection {
  Ascending = "ascending",
  Descending = "descending",
}
