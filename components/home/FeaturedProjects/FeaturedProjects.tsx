'use client'

import TextEditor from './TextEditor'
import ChevronLeft from '@/public/icons/chevron-left.svg'
import ChevronRight from '@/public/icons/chevron-right.svg'
import { useCallback, useState } from 'react'
import Geospatial from './Geospatial'

const CONTENT = [
  {
    title: 'Rich Text Editor',
    content:
      'This custom-built rich text editor was designed from the ground up to handle complex formatting while keeping the writing experience smooth, predictable, and fast. It’s powered by ProseMirror and architected in Angular, with a component system that supports real-time styling, dynamic layout behavior, and precise cursor interactions. Every part of the editor, from baseline text rendering to advanced features like auto-lists, tables, automatic page breaks, and free-positioning text boxes and images, was implemented to behave exactly like users expect. Minute details like persisting styles across new paragraphs and selection handling logic was handled to make the user experience seamless.',
  },
  {
    title: 'Geospatial analysis platform',
    content:
      'This geospatial analysis tool was built to take GeoJSON shape data from a legacy system and render it instantly on an interactive map, even when dealing with large or highly detailed geometries. The original approach hit performance limits with complex shapes, so the tool was rebuilt using React and Turf.js to handle spatial processing efficiently on the client side. The result was a dramatic improvement in responsiveness, with shapes appearing immediately and interactions staying smooth. Users can zoom, pan, and inspect shapes without delay, making it easy to interpret boundaries, overlays, and spatial patterns at a glance.',
  },
  {
    title: 'Private UI Library',
    content:
      'This internal Angular UI library was built to give the development team a consistent, dependable foundation for every new client project. Instead of rewriting components from scratch, the library offers solid, reusable building blocks that teams can easily re-style to match each client’s design system. It includes everything from simple elements like buttons, badges, and toast messages, to fully custom form components such as date pickers, time pickers, and comboboxes. The form components integrate cleanly with both Angular Forms and Reactive Forms, making them straightforward to use in any project setup.\n\nEach component comes with its own dedicated unit tests to guarantee correctness and long-term stability. By centralizing these components in one place, the library removes a huge amount of repetitive setup work and gives new projects and proofs of concept a much faster and more reliable starting point.',
  },
]

export default function FeaturedProjects({
  windowHeight,
  show,
}: {
  windowHeight: number | undefined
  show: boolean
}) {
  const [page, setPage] = useState<number>(0)

  const nextPage = useCallback(() => {
    if (page < CONTENT.length) setPage(page + 1)
  }, [page])

  const prevPage = useCallback(() => {
    if (page > 0) setPage(page - 1)
  }, [page])

  return (
    <div
      className="section-wrapper"
      style={{
        minHeight: windowHeight ? Math.max(windowHeight, 500) + 'px' : '100vh',
      }}
    >
      <div className="content-container flex-shrink-0">
        <h1 className="base-header-text bold my-6">Featured Projects</h1>
      </div>
      <div
        className="project-page-container"
        style={{
          minHeight: `calc(${Math.max(
            windowHeight || 0,
            900
          )}px - 3.25rem - 96px)`,
        }}
      >
        <div
          className="project-image-container"
          style={{
            minHeight: `calc(${Math.max(
              windowHeight || 0,
              900
            )}px - 3.25rem - 96px)`,
          }}
        >
          <TextEditor runAnimations={show && page === 0} show={page === 0} />
          <Geospatial runAnimations={show && page === 1} show={page === 1} />
        </div>
        <div className="project-description-container">
          <div
            className="relative flex justify-center"
            style={{ minWidth: '100%', flexBasis: '100%' }}
          >
            {CONTENT.map((c, i) => (
              <div
                key={`project-f-${i}`}
                className={`slide-transition-wrapper ${page === i && 'show'}`}
                style={{ maxWidth: 500 }}
              >
                <h1 className="primary-header-text mb-5">{c.title}</h1>
                <p className="p-large" style={{ whiteSpace: 'pre-wrap' }}>
                  {c.content}
                </p>
              </div>
            ))}
          </div>
          <div
            className="flex gap-2 justify-end"
            style={{ maxWidth: 500, width: '100%' }}
          >
            <a
              className={`chip button ${page === 0 && 'disabled'}`}
              onClick={prevPage}
            >
              <ChevronLeft style={{ transform: 'translateX(-1px)' }} />
            </a>
            <a
              className={`chip button ${
                page === CONTENT.length - 1 && 'disabled'
              }`}
              onClick={nextPage}
            >
              <ChevronRight style={{ transform: 'translateX(1px)' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
