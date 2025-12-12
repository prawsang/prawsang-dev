'use client'

import TextEditor from './TextEditor'
import ChevronLeft from '@/public/icons/chevron-left.svg'
import ChevronRight from '@/public/icons/chevron-right.svg'

export default function FeaturedProjects({
  windowHeight,
  show,
}: {
  windowHeight: number | undefined
  show: boolean
}) {
  return (
    <div
      className="section-wrapper"
      style={{ minHeight: windowHeight ? windowHeight + 'px' : '100vh' }}
    >
      <div className="content-container flex-shrink-0">
        <h1 className="base-header-text bold my-6">Featured Projects</h1>
      </div>
      <div className="project-page-container">
        <div className="project-image-container">
          <TextEditor show={show} />
        </div>
        <div className="project-description-container">
          <div />
          <div style={{ maxWidth: 500 }}>
            <h1 className="primary-header-text mb-5">Rich Text Editor</h1>
            <p className="p-large">
              This custom-built rich text editor was designed from the ground up
              to handle complex formatting while keeping the writing experience
              smooth, predictable, and fast. It’s powered by ProseMirror and
              architected in Angular, with a component system that supports
              real-time styling, dynamic layout behavior, and precise cursor
              interactions. Every part of the editor, from baseline text
              rendering to advanced features like auto-lists, tables, automatic
              page breaks, and free-positioning text boxes and images, was
              implemented to behave exactly like users expect. Minute details
              like persisting styles across new paragraphs and selection
              handling logic was handled to make the user experience seamless.
            </p>
          </div>
          <div
            className="flex gap-2 justify-end"
            style={{ maxWidth: 500, width: '100%' }}
          >
            <a className="chip button disabled">
              <ChevronLeft />
            </a>
            <a className="chip button">
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
