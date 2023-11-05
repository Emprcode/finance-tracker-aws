import { Auth } from 'aws-amplify'

export const validUserSession = async () => {
  try {
    const session = await Auth.currentSession()
    if (session) {
      const expiry = session.getAccessToken().getExpiration()
      if (Date.now() < expiry * 1000) {
        sessionStorage.setItem('token', session.getIdToken().getJwtToken())
        return true
      }
    }
  } catch (error) {
    console.log(error)
  }
  return false
}
