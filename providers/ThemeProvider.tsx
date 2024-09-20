'use client'

import { ThemeContext } from '@/contexts/ThemeContext'
import { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (mounted) {
    return (
      <main className={`${theme === 'dark' && 'dark-mode'}`}>{children}</main>
    )
  }
  return <main />
}

export default ThemeProvider
