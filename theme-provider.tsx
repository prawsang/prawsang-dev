'use client'

import { createContext, useState } from 'react'

export const DarkModeContext = createContext<{
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}>({
  darkMode: false,
  setDarkMode: () => {},
})

const checkIsDarkSchemePreferred = () =>
  window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage?.getItem('darkMode') === 'true' || checkIsDarkSchemePreferred
  )
  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode: (value) => {
          setDarkMode(value),
            localStorage?.setItem('darkMode', value ? 'true' : 'false')
        },
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}
