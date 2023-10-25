import axios from 'axios'
import { baseURL } from '../../config'

//get Authorization header
const getUserToken = () => {
  const userToken = sessionStorage.getItem('userToken')
  const userObj = userToken ? JSON.parse(userToken) : null
  return userObj
}

export const getAllTransactions = async () => {
  try {
    const user = getUserToken()
    console.log(user)
    if (!user) {
      return {
        status: 'error',
        message: 'login first',
      }
    }
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })

    console.log(response)
    return response
  } catch (error) {
    return error
  }
}
