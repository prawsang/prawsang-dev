'use client'

import { ThemeContext } from '@/contexts/ThemeContext'
import { FC, SVGProps, useContext } from 'react'

export default function ProjectCarouselCard({
  SvgLight,
  SvgDark,
  header,
  text,
}: {
  SvgLight: FC<SVGProps<SVGElement>>
  SvgDark: FC<SVGProps<SVGElement>>
  header: string
  text: string
}) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="project-carousel-card">
      <div className="project-carousel-card-image">
        {theme === 'dark' ? <SvgDark /> : <SvgLight />}
        <div className="noise" />
      </div>
      <div className="project-carousel-card-content">
        <h3 className="project-carousel-card-header mb-1">{header}</h3>
        <p className="project-carousel-card-text">{text}</p>
      </div>
    </div>
  )
}
