'use client'

import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { PAGE_MAX_WIDTH, PAGE_PADDING } from '@/constants/fixed-styles'

import CssBaseline from '@mui/material/CssBaseline'
import { Header } from '@/components/header/header.component'
import { ThemeContextProvider } from '@/themes/ThemeContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const Text = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} bg-slate-900`}>
        <Header />
        <div className="">
          <div className={`w-full mx-[auto] ${PAGE_MAX_WIDTH} ${PAGE_PADDING}`}>{children}</div>
        </div>
      </body>
    </ThemeContextProvider>
  )
}
