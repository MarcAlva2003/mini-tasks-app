'use client'

import { Inter, Poppins } from 'next/font/google'
import { PAGE_MAX_WIDTH, PAGE_PADDING } from '@/constants/fixed-styles'
import { Header } from '@/components/header/header.component'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin']
})

export const Text = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <body className={`${inter.variable} ${poppins.variable} font-sans bg-background text-foreground`}>
      <Header />
      <div className="pt-16">
        <div className={`w-full mx-auto ${PAGE_MAX_WIDTH} ${PAGE_PADDING}`}>{children}</div>
      </div>
    </body>
  )
}
