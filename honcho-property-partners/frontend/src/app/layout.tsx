import type { Metadata } from 'next'
import { Inter, Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
})

export const metadata: Metadata = {
  title: 'HONCHO Property Partners Limited | Uganda\'s Trusted Real Estate Platform',
  description: 'Technology-driven real estate platform in Uganda. Verified property listings, smart search, and seamless transactions for houses, apartments, commercial spaces, and land.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}