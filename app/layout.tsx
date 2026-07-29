import type { Metadata } from 'next'
import './globals.css'
import { siteDescription, siteName, siteTitle, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} - ${siteTitle}`,
  description: siteDescription,
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
