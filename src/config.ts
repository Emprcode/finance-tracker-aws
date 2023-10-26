export const congitoConfig = {
  REGION: 'ap-southeast-2',
  USER_POOL_ID: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  USER_POOL_APP_CLIENT_ID: process.env.REACT_APP_COGNITO_USER_POOL_APP_CLIENT_ID,
}

export const baseURL: string = process.env.REACT_APP_BASE_URL || ''
