import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { validUserSession } from '../../utils/utils'

export const AuthWrapper = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  const [session, setSession] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const resp = async () => {
      setSession(await validUserSession())
    }

    resp()
  }, [])
  if (!session) {
    //redirext to login page
    return <Navigate to='/' replace state={{ from: location }} />
  }
  return <>{children}</>
}
