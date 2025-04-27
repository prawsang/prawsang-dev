'use client'

import { useEffect, useState, createContext } from 'react'

export const ClickEventContext = createContext({
  canHover: true,
  onClickOutside: () => {},
})

export const ClickEventContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [canHover, setCanHover] = useState<boolean>(true)

  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover)').matches)
  }, [])

  const onClickOutside = () => {
    window.dispatchEvent(new Event('click-outside'))
  }

  return (
    <ClickEventContext.Provider value={{ canHover, onClickOutside }}>
      {children}
    </ClickEventContext.Provider>
  )
}
