import { URLS } from "../../constants/urls"
import { wrapper } from "../../utils/wrapper"

export const getChatList = async () => {
  try {
    const responseData = await wrapper("get", URLS.CHATS, { version: "0.0" })
    return responseData.response
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}
