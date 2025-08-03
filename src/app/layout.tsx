import '../styles/globals.css'
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sabina Guerrero | Portfolio',
  description: 'Showcasing web development projects, skills, and experience.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
