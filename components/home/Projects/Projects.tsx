'use client'

import WebAdminAppsLight from '@/public/images/projects/web-admin-apps-light.svg'
import DashboardLight from '@/public/images/projects/dashboard-light.svg'
import DataManagementLight from '@/public/images/projects/data-management-light.svg'
import LandingPageLight from '@/public/images/projects/landing-page-light.svg'
import WebAdminAppsDark from '@/public/images/projects/web-admin-apps-dark.svg'
import DashboardDark from '@/public/images/projects/dashboard-dark.svg'
import DataManagementDark from '@/public/images/projects/data-management-dark.svg'
import LandingPageDark from '@/public/images/projects/landing-page-dark.svg'
import { FC, SVGProps, useContext, useEffect, useState } from 'react'
import ProjectCarouselCard from './ProjectCarouselCard'
import Carousel from '@/components/common/Carousel'
import OpacityTrail from '../../common/OpacityTrail'
import { ClickEventContext } from '@/contexts/ClickEventContext'
import { SITE_CONTENT } from '@/constants/SiteContent'

interface ProjectCarouselCardData {
  svg: FC<SVGProps<SVGElement>>
  svgDark: FC<SVGProps<SVGElement>>
  header: string
  text: string
}

const CAROUSEL_DATA: ProjectCarouselCardData[] = [
  // {
  //   svg: UILibraryLight,
  //   svgDark: UILibraryDark,
  //   header: 'Private UI Libraries',
  //   text: 'Libraries consisting of common components, such as buttons, dropdowns, carousels, date pickers, and much more. Such libraries are used to kickstart a project, greatly reducing development time.',
  // },
  {
    svg: DashboardLight,
    svgDark: DashboardDark,
    header: SITE_CONTENT.projects[0].header,
    text: SITE_CONTENT.projects[0].text,
  },
  {
    svg: WebAdminAppsLight,
    svgDark: WebAdminAppsDark,
    header: SITE_CONTENT.projects[1].header,
    text: SITE_CONTENT.projects[1].text,
  },
  {
    svg: DataManagementLight,
    svgDark: DataManagementDark,
    header: SITE_CONTENT.projects[2].header,
    text: SITE_CONTENT.projects[2].text,
  },
  {
    svg: LandingPageLight,
    svgDark: LandingPageDark,
    header: SITE_CONTENT.projects[3].header,
    text: SITE_CONTENT.projects[3].text,
  },
]

export default function Projects({
  show,
  windowHeight,
}: {
  show: boolean
  windowHeight: number | undefined
}) {
  const { canHover } = useContext(ClickEventContext)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!canHover) {
      window.addEventListener('click-outside', () => {
        setExpandedIndex(null)
      })
    }
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('click-outside', () => {
        setExpandedIndex(null)
      })
    }
  })

  const handleCardClick = (index: number) => {
    if (expandedIndex === null) {
      setExpandedIndex(index)
    } else {
      setExpandedIndex(null)
    }
  }

  return (
    <section
      className="section-wrapper flex flex-col justify-center"
      style={{ minHeight: windowHeight ? windowHeight + 'px' : '100vh' }}
    >
      <div className="py-8">
        <div className="content-container">
          <h1 className="base-header-text bold mb-6">
            Other projects I have worked on
          </h1>
        </div>
        <Carousel
          totalCards={CAROUSEL_DATA.length}
          autoScroll={true}
          beginAutoScroll={show}
        >
          <OpacityTrail open={show} slide="right">
            {CAROUSEL_DATA.map((d, i) => (
              <ProjectCarouselCard
                key={'carousel' + '-' + i}
                SvgLight={d.svg}
                SvgDark={d.svgDark}
                text={d.text}
                header={d.header}
                expanded={expandedIndex === i}
                onClick={() => {
                  !canHover && handleCardClick(i)
                }}
              />
            ))}
          </OpacityTrail>
        </Carousel>
      </div>
    </section>
  )
}
