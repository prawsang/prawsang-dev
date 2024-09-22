'use client'

import { NAV_LNKS } from '@/constants/NavLinks'
import { useEffect, useState } from 'react'

export default function Navfloat({
  onLinkClick,
  show,
}: {
  onLinkClick: (value: string) => void
  show: boolean
}) {
  const [open, setOpen] = useState<boolean>(false)
  useEffect(() => {
    if (!show) setOpen(false)
  }, [show])

  return (
    <div className={`nav-float ${open && 'open'} ${show && 'show'}`}>
      <div className="nav-float-toggle" onClick={() => setOpen(!open)}>
        <div className="nav-float-toggle-bars">
          <div className="nav-float-toggle-bar bar-1" />
          <div className="nav-float-toggle-bar bar-2" />
          <div className="nav-float-toggle-bar bar-3" />
        </div>
      </div>
      <div className="nav-float-panel">
        {NAV_LNKS.map(({ text, id }) => (
          <div
            key={`nav-float-${id}`}
            className="nav-float-panel-item"
            onClick={() => {
              onLinkClick(id)
              setOpen(false)
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  )
}
