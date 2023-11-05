import { Auth } from 'aws-amplify'

export const validUserSession = async () => {
  try {
    const session = await Auth.currentSession()
    // console.log(session.getIdToken().payload['name'])
    if (session) {
      const expiry = session.getAccessToken().getExpiration()
      if (Date.now() < expiry * 1000) {
        sessionStorage.setItem('token', session.getIdToken().getJwtToken())
        sessionStorage.setItem('name', session.getIdToken().payload['name'])
        return true
      }
    }
  } catch (error) {
    console.log(error)
  }
  return false
}
