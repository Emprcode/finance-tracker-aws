import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import React from 'react'
import Login from './pages/login/Login'
import { Amplify } from 'aws-amplify'
import { congitoConfig } from './config'
import { AuthWrapper } from './components/authWrapper/AuthWrapper'

Amplify.configure({
  Auth: {
    region: congitoConfig.REGION,
    userPoolId: congitoConfig.USER_POOL_ID,
    userPoolWebClientId: congitoConfig.USER_POOL_APP_CLIENT_ID,
  },
})

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
