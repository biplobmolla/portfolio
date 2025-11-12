import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import InitialLoader from '@/components/ui/InitialLoader'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biplob Molla - Frontend Developer',
  description: 'Passionate frontend developer creating beautiful, interactive web experiences with modern technologies like React, Next.js, and TypeScript.',
  keywords: ['frontend developer', 'react', 'nextjs', 'typescript', 'web development', 'portfolio'],
  authors: [{ name: 'Biplob Molla' }],
  creator: 'Biplob Molla',
  publisher: 'Biplob Molla',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://biplobmolla.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://biplobmolla.dev',
    title: 'Biplob Molla - Frontend Developer',
    description: 'Passionate frontend developer creating beautiful, interactive web experiences with modern technologies.',
    siteName: 'Biplob Molla Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Biplob Molla - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biplob Molla - Frontend Developer',
    description: 'Passionate frontend developer creating beautiful, interactive web experiences with modern technologies.',
    creator: '@biplobmolla',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased font-mono`}>
        <ThemeProvider>
          <InitialLoader>
            <div className="relative min-h-screen dark:bg-[#0a0a0a] light:bg-[#fafafa] transition-colors duration-300">
              {/* Terminal Grid Background - Dark */}
              <div className="fixed inset-0 opacity-10 pointer-events-none dark:block light:hidden" style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
              
              {/* Terminal Grid Background - Light */}
              <div className="fixed inset-0 opacity-5 pointer-events-none dark:hidden light:block" style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
              
              {/* Scanline Effect */}
              <div className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-5 light:opacity-3" style={{
                background: 'linear-gradient(transparent 50%, rgba(34, 197, 94, 0.03) 50%)',
                backgroundSize: '100% 4px',
              }} />
              
              <Header />
              <main className="relative z-10 min-h-screen">
                {children}
              </main>
              <Footer />
            </div>
          </InitialLoader>
        </ThemeProvider>
      </body>
    </html>
  )
}