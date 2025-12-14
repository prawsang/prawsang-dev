'use client'

import { ThemeContext } from '@/contexts/ThemeContext'
import { FC, MouseEventHandler, SVGProps, useContext } from 'react'

export default function ProjectCarouselCard({
  SvgLight,
  SvgDark,
  header,
  text,
  expanded,
  onClick,
}: {
  SvgLight: FC<SVGProps<SVGElement>>
  SvgDark: FC<SVGProps<SVGElement>>
  header: string
  text: string
  expanded: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
}) {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="project-carousel-card" onClick={onClick}>
      <div className="project-carousel-card-image">
        {theme === 'dark' ? <SvgDark /> : <SvgLight />}
        <div className="noise" />
      </div>
      <div className="project-carousel-card-content">
        <div className="project-carousel-card-content-expand">
          <h3 className="project-carousel-card-header">{header}</h3>
          <p
            className={`project-carousel-card-text ${
              expanded ? 'expanded' : ''
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}
