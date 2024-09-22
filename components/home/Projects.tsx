'use client'

import WebAdminAppsLight from '@/public/images/projects/web-admin-apps-light.svg'
import DashboardLight from '@/public/images/projects/dashboard-light.svg'
import DataManagementLight from '@/public/images/projects/data-management-light.svg'
import GeospatialLight from '@/public/images/projects/geospatial-light.svg'
import LandingPageLight from '@/public/images/projects/landing-page-light.svg'
import WebAdminAppsDark from '@/public/images/projects/web-admin-apps-dark.svg'
import DashboardDark from '@/public/images/projects/dashboard-dark.svg'
import DataManagementDark from '@/public/images/projects/data-management-dark.svg'
import GeospatialDark from '@/public/images/projects/geospatial-dark.svg'
import LandingPageDark from '@/public/images/projects/landing-page-dark.svg'
import { FC, SVGProps } from 'react'
import ProjectCarouselCard from './ProjectCarouselCard'
import Carousel from '@/components/common/Carousel'

interface ProjectCarouselCardData {
  svg: FC<SVGProps<SVGElement>>
  svgDark: FC<SVGProps<SVGElement>>
  header: string
  text: string
}

const CAROUSEL_DATA: ProjectCarouselCardData[] = [
  {
    svg: WebAdminAppsLight,
    svgDark: WebAdminAppsDark,
    header: 'Web admin applications',
    text: 'Applications tailored to manage the custom and specific processes of a corporation, which require extensive access control, form validation,  and handling of large amounts of data.',
  },
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
    svg: GeospatialLight,
    svgDark: GeospatialDark,
    header: 'Geospatial analysis platforms',
    text: 'Geospatial analysis platforms on the web that visualizes geospatial data in a form of satellite images and topographic maps to allow users to analyze problems in a geographical area.',
  },
  {
    svg: LandingPageLight,
    svgDark: LandingPageDark,
    header: 'Product landing pages',
    text: 'Landing pages advertise a product, featuring bold visuals and sleek animations to make statements, and seamlessly combining modern design elements with engaging content to highlight the product’s key features.',
  },
]

export default function Projects() {
  return (
    <section>
      <div className="content-container">
        <h1 className="base-header-text bold mb-6">
          Some projects I have worked on
        </h1>
      </div>
      <Carousel cardWidth={420} gap={48} totalCards={CAROUSEL_DATA.length}>
        {CAROUSEL_DATA.map((d, i) => (
          <ProjectCarouselCard
            key={'carousel' + '-' + i}
            SvgLight={d.svg}
            SvgDark={d.svgDark}
            text={d.text}
            header={d.header}
          />
        ))}
      </Carousel>
    </section>
  )
}
