import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { validUserSession } from '../../utils/utils'

export const AuthWrapper = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  const [session, setSession] = useState<boolean | undefined>()
  const location = useLocation()

  useEffect(() => {
    const resp = async () => {
      setSession(await validUserSession())
    }

    resp()
  }, [])

  if (session === false) {
    //redirext to login page
    return <Navigate to='/' replace state={{ from: location }} />
  }
  return <>{children}</>
}
