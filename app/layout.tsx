'use client'

import './globals.scss'
import { Syne } from 'next/font/google'
import Navbar from '@/components/nav/Navbar'
import ThemeProvider, { DarkModeContext } from '@/theme-provider'

const syne = Syne({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const onNavLinkClick = () => {}

  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <ThemeProvider>
          <DarkModeContext.Consumer>
            {(value) => (
              <main className={`${value.darkMode && 'dark-mode'}`}>
                <Navbar
                  darkMode={value.darkMode}
                  onDarkModeChange={(v) => value.setDarkMode(!v)}
                  onNavLinkClick={onNavLinkClick}
                />
                {children}
              </main>
            )}
          </DarkModeContext.Consumer>
        </ThemeProvider>
      </body>
    </html>
  )
}
