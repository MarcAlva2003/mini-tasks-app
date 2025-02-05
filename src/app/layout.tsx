import './globals.css'

import type { Metadata } from 'next'
import { Text } from './text'

export const metadata: Metadata = {
  title: 'Álvarez Marcos',
  description: 'Álvarez Marcos Portfolio - Frontend Developer',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Text>{children}</Text>
    </html>
  )
}
