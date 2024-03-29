'use client'
import { AuthProvider } from '@/contexts/AuthContext'
import './globals.css'
import { Baloo_2 } from 'next/font/google'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baloo'
})

export const metadata = {
  title: 'Blinkist | UI',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${baloo.variable} font-baloo bg-[#d9d9d9] flex items-center justify-center h-screen`}>
        <AuthProvider>
          <main className='bg-blue-primary h-[950px] w-[415px] rounded-lg'>
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
