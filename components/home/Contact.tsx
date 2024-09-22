import { useSpring, a } from '@react-spring/web'
import ContactNameCard from './ContactNameCard'

export default function Contact({ show }: { show: boolean }) {
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
    <section className="contact-section">
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
        <a.div className="contact-name-card-wrapper bg-1" style={ani1}>
          <ContactNameCard background={1} />
        </a.div>
        <a.div className="contact-name-card-wrapper bg-2" style={ani2}>
          <ContactNameCard background={2} />
        </a.div>
        <a.div className="contact-name-card-wrapper bg-3" style={ani3}>
          <ContactNameCard background={3} />
        </a.div>
        <a.div className="contact-name-card-wrapper bg-4" style={ani4}>
          <ContactNameCard background={4} />
        </a.div>
        <a.div className="contact-name-card-wrapper bg-5" style={ani5}>
          <ContactNameCard background={5} />
        </a.div>
      </div>
    </section>
  )
}
