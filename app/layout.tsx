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
  metadataBase: new URL('https://www.lastgamestudio.com'),
  title: 'Last Game — Indie Game Studio',
  description:
    'We build games about things that matter. Play Last Acre — a farming simulation rooted in real agriculture, real genetics, and real market forces.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Last Game — Indie Game Studio',
    description:
      'We build games about things that matter. Play Last Acre — a farming simulation rooted in real agriculture, real genetics, and real market forces.',
    type: 'website',
    siteName: 'Last Game Studio',
    url: 'https://www.lastgamestudio.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Last Acre — Your land. Your legacy.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Game — Indie Game Studio',
    description:
      'We build games about things that matter. Play Last Acre — a farming simulation rooted in real agriculture, real genetics, and real market forces.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://www.lastgamestudio.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.lastgamestudio.com/#organization',
                  name: 'Last Game Studio',
                  url: 'https://www.lastgamestudio.com/',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.lastgamestudio.com/logo.png',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://www.lastgamestudio.com/#website',
                  url: 'https://www.lastgamestudio.com/',
                  name: 'Last Game Studio',
                  publisher: {
                    '@id': 'https://www.lastgamestudio.com/#organization',
                  },
                },
                {
                  '@type': 'VideoGame',
                  '@id': 'https://www.lastgamestudio.com/games/last-acre/#game',
                  name: 'Last Acre',
                  description:
                    'A farming simulation grounded in real agriculture, real animal genetics, and real market forces.',
                  url: 'https://www.lastgamestudio.com/games/last-acre',
                  operatingSystem: ['iOS', 'Android'],
                  applicationCategory: 'Game',
                  genre: 'Simulation',
                  author: {
                    '@id': 'https://www.lastgamestudio.com/#organization',
                  },
                  image: {
                    '@type': 'ImageObject',
                    url: 'https://www.lastgamestudio.com/og-image.jpg',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
