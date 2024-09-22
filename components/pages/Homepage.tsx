'use client'

import { useRef } from 'react'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import Projects from '@/components/home/Projects'
import Skills from '@/components/home/Skills'
import Experience from '@/components/home/Experience'
import Contact from '@/components/home/Contact'
import Navfloat from '@/components/nav/Navfloat'
import Navbar from '@/components/nav/Navbar'
import { useInView } from 'react-intersection-observer'
export default function Homepage() {
  const intro = useRef<HTMLDivElement>(null)
  const projects = useRef<HTMLDivElement>(null)
  const skills = useRef<HTMLDivElement>(null)
  const experience = useRef<HTMLDivElement>(null)
  const contact = useRef<HTMLDivElement>(null)

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0,
  })
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.2,
  })

  const onNavLinkClick = (id: string) => {
    switch (id) {
      case 'intro':
        intro.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'projects':
        projects.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'skills':
        skills.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'job_experience':
        experience.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'contact':
        contact.current?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        return
    }
    return
  }

  return (
    <>
      <Navbar onLinkClick={onNavLinkClick} />
      <div className="page-container">
        <Navfloat onLinkClick={onNavLinkClick} show={!heroInView} />
        <div ref={heroRef}>
          <Hero />
        </div>
        <div>
          <div className="section-wrapper" ref={intro}>
            <Intro />
          </div>
          <div className="section-wrapper" ref={projects}>
            <Projects />
          </div>
          <div className="section-wrapper" ref={skills}>
            <Skills />
          </div>
          <div className="section-wrapper" ref={experience}>
            <Experience />
          </div>
          <div className="section-wrapper" ref={contact}>
            <div ref={contactRef}>
              <Contact show={contactInView} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
