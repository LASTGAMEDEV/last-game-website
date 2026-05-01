import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['700', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Last Game — Indie Game Studio',
  description:
    'We build games about things that matter. Play Last Acre — available on iOS and Android.',
  openGraph: {
    title: 'Last Game — Indie Game Studio',
    description: 'We build games about things that matter.',
    type: 'website',
    siteName: 'Last Game',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Game — Indie Game Studio',
    description: 'We build games about things that matter.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
