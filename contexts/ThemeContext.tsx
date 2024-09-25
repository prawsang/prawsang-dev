'use client'

import { useEffect, useState, createContext } from 'react'

export const ThemeContext = createContext({
  theme: 'light',
  toggle: () => {},
})

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value =
      localStorage.getItem('theme') ||
      (window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches
        ? 'dark'
        : 'light')
    return value || 'light'
  } else return 'light'
}

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage()
  })

  const toggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
