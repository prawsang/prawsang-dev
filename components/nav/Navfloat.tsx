'use client'

import { NAV_LNKS } from '@/constants/NavLinks'
import { useContext, useEffect, useState } from 'react'
import Switch from '../common/Switch'
import { ThemeContext } from '@/contexts/ThemeContext'
import MoonStarsFill from '@/public/icons/moon-stars-fill.svg'
import SunFill from '@/public/icons/sun-fill.svg'

export default function Navfloat({
  onLinkClick,
  show = false,
}: {
  onLinkClick: (value: string) => void
  show: boolean
}) {
  const [open, setOpen] = useState<boolean>(false)
  useEffect(() => {
    if (!show) setOpen(false)
  }, [show])

  const { theme, toggle } = useContext(ThemeContext)

  return (
    <div className={`nav-float ${open && 'open'} ${show && 'show'}`}>
      <div className="nav-float-toggle" onClick={() => setOpen(!open)}>
        <div className="nav-float-toggle-bars">
          <div className="nav-float-toggle-bar bar-1" />
          <div className="nav-float-toggle-bar bar-2" />
          <div className="nav-float-toggle-bar bar-3" />
          <div className="nav-float-toggle-bar bar-cross-1" />
          <div className="nav-float-toggle-bar bar-cross-2" />
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
        <div className="block md:hidden px-4 py-3">
          <Switch
            onChange={toggle}
            value={theme === 'dark'}
            IconOn={MoonStarsFill}
            IconOff={SunFill}
          />
        </div>
      </div>
    </div>
  )
}
