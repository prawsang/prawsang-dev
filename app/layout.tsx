import './globals.scss'
import { Syne } from 'next/font/google'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import { ClickEventContextProvider } from '@/contexts/ClickEventContext'
import ClickEventProvider from '@/providers/ClickEventProvider'

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
          <ClickEventContextProvider>
            <ThemeProvider>
              <ClickEventProvider>{children}</ClickEventProvider>
            </ThemeProvider>
          </ClickEventContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
