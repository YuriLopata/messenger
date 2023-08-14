import dayjs from "dayjs"
import weekOfYear from "dayjs/plugin/weekOfYear"
dayjs.extend(weekOfYear)

export const timestampToDate = (timestamp: number, format: string) => {
  if (format === "week") return dayjs(timestamp).week()
  
  return dayjs.unix(timestamp).format(format)
}
