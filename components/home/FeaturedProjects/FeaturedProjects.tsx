'use client'

import TextEditor from './TextEditor'
import ChevronLeft from '@/public/icons/chevron-left.svg'
import ChevronRight from '@/public/icons/chevron-right.svg'
import ChevronCompactUp from '@/public/icons/chevron-compact-up.svg'
import ChevronCompactDown from '@/public/icons/chevron-compact-down.svg'
import { useCallback, useState } from 'react'
import Geospatial from './Geospatial'
import UILibrary from './UILibrary'
import { SITE_CONTENT } from '@/constants/SiteContent'

const CONTENT = SITE_CONTENT.featuredProjects

export default function FeaturedProjects({
  windowHeight,
  show,
}: {
  windowHeight: number | undefined
  show: boolean
}) {
  const [page, setPage] = useState<number>(0)

  const nextPage = useCallback(() => {
    if (page < CONTENT.length) {
      setPage(page + 1)
      setExpanded(false)
    }
  }, [page])

  const prevPage = useCallback(() => {
    if (page > 0) {
      setPage(page - 1)
      setExpanded(false)
    }
  }, [page])

  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div
      className="section-wrapper featured-projects"
      style={{
        //@ts-expect-error: I'm just definine a variable here so I can use it in css
        '--window-height': windowHeight
          ? Math.max(windowHeight, 640) + 'px'
          : '100vh',
        minHeight: windowHeight ? Math.max(windowHeight, 640) + 'px' : '100vh',
        marginBottom: 48,
        maxWidth: 1920,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div className="content-container flex-shrink-0">
        <h1 className="base-header-text bold pb-6 pt-4">Featured Projects</h1>
      </div>
      <div className="project-page-container">
        <div className="project-image-container">
          <Geospatial
            runAnimations={show && page === 2}
            show={true}
            isLast={true}
          />
          <TextEditor runAnimations={show && page === 1} show={page <= 1} />
          <UILibrary runAnimations={show && page === 0} show={page === 0} />
          <div className="noise" />
        </div>
        <div
          className={`project-description-container ${expanded && 'expanded'}`}
        >
          <div
            onClick={() => setExpanded(!expanded)}
            style={{ cursor: 'pointer' }}
            className="block md:hidden flex justify-center w-full mb-2 flex-shrink-0"
          >
            {expanded ? (
              <ChevronCompactDown
                className="icon"
                style={{ width: 48, height: 48 }}
              />
            ) : (
              <ChevronCompactUp
                className="icon"
                style={{ width: 48, height: 48 }}
              />
            )}
          </div>
          <div
            className="project-description relative flex justify-center"
            style={{ minWidth: '100%', flexBasis: '100%' }}
          >
            {CONTENT.map((c, i) => (
              <div
                key={`project-f-${i}`}
                className={`project-description-slide slide-transition-wrapper ${
                  page <= i && 'show'
                } ${i === CONTENT.length - 1 && 'last'}`}
                style={{ zIndex: CONTENT.length - i }}
              >
                <div className="content-container">
                  <h1
                    className={`primary-header-text mb-5 ${
                      page !== i && expanded && 'invisible'
                    }`}
                  >
                    {c.title}
                  </h1>
                  <p
                    className={`p-large mb-5 md:mb-1 ${
                      page !== i && expanded && 'invisible'
                    }`}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {c.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="project-pagination">
            <div className="content-container">
              <div
                className="flex justify-center md:justify-start gap-2 "
                style={{ width: '100%' }}
              >
                <a
                  className={`chip button ${page === 0 && 'disabled'}`}
                  onClick={prevPage}
                >
                  <ChevronLeft
                    className="icon"
                    style={{
                      transform: 'translateX(-1px)',
                      width: 24,
                      height: 24,
                    }}
                  />
                </a>
                <a
                  className={`chip button ${
                    page === CONTENT.length - 1 && 'disabled'
                  }`}
                  onClick={nextPage}
                >
                  <ChevronRight
                    className="icon"
                    style={{
                      transform: 'translateX(1px)',
                      width: 24,
                      height: 24,
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
