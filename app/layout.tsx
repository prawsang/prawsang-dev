import './globals.scss'
import { Syne } from 'next/font/google'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'

const syne = Syne({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <ThemeContextProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
