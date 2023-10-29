import axios from 'axios'
import { TransactionPayload } from '../../lib/types'
import { baseURL } from '../../config'

const apiEp = baseURL + '/transactions'

//get Authorization header
const getUserToken = () => {
  const userToken = sessionStorage.getItem('userToken')
  const userObj = userToken ? JSON.parse(userToken) : null
  return userObj
}

export const getAllTransactions = async () => {
  try {
    const user = getUserToken()
    if (!user) {
      return {
        status: 'error',
        message: 'login first',
      }
    }
    const { data } = await axios.get(apiEp, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

export const postTransaction = async (payload: TransactionPayload) => {
  try {
    const user = getUserToken()
    if (!user) {
      return {
        status: 'error',
        message: 'Login first',
      }
    }
    const { data } = await axios.post(apiEp, payload, {
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deleteTransaction = async (transactionId: string) => {
  try {
    const user = getUserToken()
    if (!user) {
      return {
        status: 'error',
        message: 'Login first',
      }
    }
    const { data } = await axios.delete(apiEp, {
      data: transactionId,
      headers: {
        Authorization: `Bearer ${user}`,
      },
    })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
