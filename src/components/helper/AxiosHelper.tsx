import axios from 'axios'
import { TransactionPayload } from '../../lib/types'
import { baseURL } from '../../config'

const apiEp = baseURL + 'transactions'

//get Authorization header
const getUserToken = () => {
  const token = sessionStorage.getItem('token')
  if (!token) {
    throw new Error('Token does not exist!')
  }
  // console.log(token)
  return token
}
export const getAllTransactions = async () => {
  try {
    const token = getUserToken()

    const { data } = await axios.get(apiEp, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

export const postTransaction = async (payload: TransactionPayload) => {
  try {
    const token = getUserToken()

    const { data } = await axios.post(apiEp, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deleteTransaction = async (transactionId: string) => {
  try {
    const token = getUserToken()

    const requestBody = {
      transactionId: transactionId,
    }
    const { data } = await axios.delete(apiEp, {
      data: requestBody,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}
