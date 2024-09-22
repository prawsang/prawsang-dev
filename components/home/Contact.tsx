'use client'

import { useSpring, a } from '@react-spring/web'
import ContactNameCard from './ContactNameCard'
import { useEffect, useState } from 'react'

export default function Contact() {
  const ani1 = useSpring({
    from: { left: '100%', top: '150%', transform: 'rotate(0deg)' },
    to: { left: '85%', top: '50%', transform: 'rotate(-20deg)' },
  })
  const ani2 = useSpring({
    from: { left: '55%', top: '-100%', transform: 'rotate(90deg)' },
    to: { left: '60%', top: '30%', transform: 'rotate(20deg)' },
  })
  const ani3 = useSpring({
    from: { left: '-100%', top: '-100%', transform: 'rotate(30deg)' },
    to: { left: '27%', top: '-5%', transform: 'rotate(-30deg)' },
  })
  const ani4 = useSpring({
    from: { left: '0%', top: '150%', transform: 'rotate(-30deg)' },
    to: { left: '40%', top: '70%', transform: 'rotate(5deg)' },
  })
  const ani5 = useSpring({
    from: { left: '-100%', top: '150%', transform: 'rotate(-90deg)' },
    to: { left: '20%', top: '95%', transform: 'rotate(15deg)' },
  })
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section>
      <div className="contact-container">
        <div className="contact-name-card-main">
          <div>
            <h3 className="mb-1 bold">Contact me</h3>
            <a
              href="mailto:prawsang.c@gmail.com"
              className="base-sub-header-text size-h3 block mb-5"
            >
              prawsang.c@gmail.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/prawsang/"
                className="medium underlined block size-h3"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/prawsang"
                className="medium underlined block size-h3"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {mounted && (
          <>
            <a.div
              className="contact-name-card-wrapper bg-1"
              style={{ ...ani1 }}
            >
              <ContactNameCard background={1} />
            </a.div>
            <a.div
              className="contact-name-card-wrapper bg-2"
              style={{ ...ani2 }}
            >
              <ContactNameCard background={2} />
            </a.div>
            <a.div
              className="contact-name-card-wrapper bg-3"
              style={{ ...ani3 }}
            >
              <ContactNameCard background={3} />
            </a.div>
            <a.div
              className="contact-name-card-wrapper bg-4"
              style={{ ...ani4 }}
            >
              <ContactNameCard background={4} />
            </a.div>
            <a.div
              className="contact-name-card-wrapper bg-5"
              style={{ ...ani5 }}
            >
              <ContactNameCard background={5} />
            </a.div>
          </>
        )}
      </div>
    </section>
  )
}
