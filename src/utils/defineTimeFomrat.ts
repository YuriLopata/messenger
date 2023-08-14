import { timestampToDate } from "./timestampToDate"

const isSameDate = (comparedData: number, comparedFormat: string): boolean => {
  if (
    timestampToDate(comparedData, comparedFormat) ===
    timestampToDate(Date.now(), comparedFormat)
  )
    return true

  return false
}

export const defineTimeFormat = (comparedData: number) => {
  if (isSameDate(comparedData, "DD.MM.YYYY")) return "HH:mm"
  if (isSameDate(comparedData, "week")) return "ddd"
  return "DD.MM.YYYY"
}
