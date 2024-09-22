'use client'

import { ThemeContext } from '@/contexts/ThemeContext'
import Switch from '../common/Switch'
import MoonStarsFill from '@/public/icons/moon-stars-fill.svg'
import SunFill from '@/public/icons/sun-fill.svg'
import { useContext } from 'react'
import { NAV_LNKS } from '@/constants/NavLinks'

export default function Navbar({
  onLinkClick,
}: {
  onLinkClick: (value: string) => void
}) {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <nav className="nav-bar absolute">
      <div className="content-container">
        <div className="flex justify-between items-center">
          {NAV_LNKS.map(({ text, id }) => (
            <div
              key={'nav-' + id}
              className="nav-link-container"
              onClick={() => onLinkClick(id)}
            >
              <a className="nav-link">{text}</a>
              <div className="nav-link-underline" />
            </div>
          ))}
          <Switch
            onChange={toggle}
            value={theme === 'dark'}
            IconOn={MoonStarsFill}
            IconOff={SunFill}
          />
        </div>
      </div>
    </nav>
  )
}
