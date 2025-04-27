'use client'

import { ClickEventContext } from '@/contexts/ClickEventContext'
import { useContext } from 'react'

const ClickEventProvider = ({ children }: { children: React.ReactNode }) => {
  const { onClickOutside } = useContext(ClickEventContext)
  return <div onClick={onClickOutside}>{children}</div>
}

export default ClickEventProvider
