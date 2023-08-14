import axios, { AxiosResponse } from "axios"

const checkResponse = (response: AxiosResponse) => response.data
const catchError = (error: any) => {
  throw error
}

export const wrapper = (
  method: "post" | "get" | "put" | "delete",
  url: string,
  data?: any
) => {
  const headers = { version: "0.0" }

  const params = data

  return axios
    .request({
      method,
      url,
      headers,
      params,
    })
    .then(checkResponse)
    .catch(catchError)
}
