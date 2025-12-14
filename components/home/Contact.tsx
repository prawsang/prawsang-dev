import { useSpring, a } from '@react-spring/web'
import ContactNameCard from './ContactNameCard'

export default function Contact({
  show,
  windowHeight,
}: {
  show: boolean
  windowHeight: number | undefined
}) {
  const ani1 = useSpring({
    top: show ? '50%' : '150%',
    left: show ? '85%' : '100%',
    transform: show ? 'rotate(-20deg)' : 'rotate(0deg)',
    from: { left: '100%', top: '150%', transform: 'rotate(0deg)' },
  })
  const ani2 = useSpring({
    top: show ? '30%' : '-100%',
    left: show ? '60%' : '55%',
    transform: show ? 'rotate(20deg)' : 'rotate(90deg)',
    from: { left: '55%', top: '-100%', transform: 'rotate(90deg)' },
  })
  const ani3 = useSpring({
    top: show ? '-5%' : '-100%',
    left: show ? '27%' : '-100%',
    transform: show ? 'rotate(-30deg)' : 'rotate(30deg)',
    from: { left: '-100%', top: '-100%', transform: 'rotate(30deg)' },
  })
  const ani4 = useSpring({
    top: show ? '70%' : '150%',
    left: show ? '40%' : '0%',
    transform: show ? 'rotate(5deg)' : 'rotate(-30deg)',
    from: { left: '0%', top: '150%', transform: 'rotate(-30deg)' },
  })
  const ani5 = useSpring({
    top: show ? '95%' : '150%',
    left: show ? '20%' : '-100%',
    transform: show ? 'rotate(15deg)' : 'rotate(-90deg)',
    from: { left: '-100%', top: '150%', transform: 'rotate(-90deg)' },
  })

  return (
    <section
      className="contact-section-wrapper"
      style={{ height: windowHeight ? windowHeight + 'px' : '100vh' }}
    >
      <div className="contact-section">
        <div className="contact-container">
          <div className="noise" />
          <div className="contact-name-card-main">
            <h2 className="contact-name-card-text extra-bold inverted">
              Prawsang
            </h2>
            <div>
              <h3 className="bold mt-2">Let’s Connect.</h3>
              <a
                href="mailto:prawsang.c@gmail.com"
                className="primary-sub-header-text size-h3"
              >
                prawsang.c@gmail.com
              </a>
              <div className="flex gap-4 mt-5">
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
            <div className="paper-overlay" />
          </div>
          <a.div className="contact-name-card-wrapper bg-1" style={ani1}>
            <ContactNameCard background={1} />
          </a.div>
          <a.div className="contact-name-card-wrapper bg-2" style={ani2}>
            <ContactNameCard background={2} />
          </a.div>
          <a.div className="contact-name-card-wrapper bg-3" style={ani3}>
            <ContactNameCard background={3} />
          </a.div>
          <a.div
            className="hidden sm:block contact-name-card-wrapper bg-4"
            style={ani4}
          >
            <ContactNameCard background={4} />
          </a.div>
          <a.div className="contact-name-card-wrapper bg-5" style={ani5}>
            <ContactNameCard background={5} />
          </a.div>
        </div>
      </div>
    </section>
  )
}
