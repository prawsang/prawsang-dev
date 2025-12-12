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
    header: 'Dashboards',
    text: 'A web admin dashboard presents key metrics and data through various visualizations, such as pie charts, bar charts, and line graphs, allowing for a customized display of information.',
  },
  {
    svg: DataManagementLight,
    svgDark: DataManagementDark,
    header: 'Data management platforms',
    text: 'Web data management platforms allows users to store, organize, and process files securely. Files and folder are stored and retrieved using a secured cloud service.',
  },
  {
    svg: WebAdminAppsLight,
    svgDark: WebAdminAppsDark,
    header: 'Web admin applications',
    text: 'Applications tailored to manage the custom and specific processes of a corporation, which require extensive access control, form validation,  and handling of large amounts of data.',
  },
  // {
  //   svg: TextEditorLight,
  //   svgDark: TextEditorDark,
  //   header: 'Rich Text Editors',
  //   text: 'A rich text editor for creating and formatting structured documents. It supports styled text, tables, and page breaks, making it suitable for producing organized and print-ready content.',
  // },
  // {
  //   svg: GeospatialLight,
  //   svgDark: GeospatialDark,
  //   header: 'Geospatial analysis platforms',
  //   text: 'Geospatial analysis platforms on the web that visualizes geospatial data in a form of satellite images and topographic maps to allow users to analyze problems in a geographical area.',
  // },
  {
    svg: LandingPageLight,
    svgDark: LandingPageDark,
    header: 'Product landing pages',
    text: 'Landing pages advertise a product, featuring bold visuals and sleek animations to make statements, and seamlessly combining modern design elements with engaging content to highlight the product’s key features.',
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
