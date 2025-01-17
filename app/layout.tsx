import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thiago Loureiro - Technology Manager, Solution Architect, DevOps Specialist',
  description: 'Created with v0 :)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
