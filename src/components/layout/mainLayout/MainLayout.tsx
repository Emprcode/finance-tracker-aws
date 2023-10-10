import React from 'react'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import "./MainLayout.css"

export const MainLayout = ({children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div>
        <Header/>
        <div className='main'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}
