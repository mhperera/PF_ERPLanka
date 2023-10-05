import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Wrapper = ({children}) => {
  return (
    <main
      className={`flex min-h-screen flex-col px-24 py-0 my-0 ${inter.className}`}
    >
        {children}
    </main>
  )
}

export default Wrapper