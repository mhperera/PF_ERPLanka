import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Wrapper = ({children}) => {
  return (
    <main
      className={`flex min-h-screen flex-col p-24 ${inter.className}`}
    >
        {children}
    </main>
  )
}

export default Wrapper