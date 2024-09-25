'use client'

import { ThemeContext } from '@/contexts/ThemeContext'
import { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (theme === 'dark') document.body.classList.add('dark-mode')
    else if (document.body.classList.contains('dark-mode'))
      document.body.classList.remove('dark-mode')
  }, [theme])
  if (mounted) {
    return <main>{children}</main>
  }
  return <main />
}

export default ThemeProvider
