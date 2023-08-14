import { URLS } from "../../constants/urls"
import { wrapper } from "../../utils/wrapper"

export const getMessageList = async (chat_id: string) => {
  try {
    const responseData = await wrapper("get", URLS.MESSAGES, {
      version: "0.0",
      chat_id: chat_id,
    })
    return responseData
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}
