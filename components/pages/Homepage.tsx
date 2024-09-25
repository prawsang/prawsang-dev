'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import Projects from '@/components/home/Projects'
import Skills from '@/components/home/Skills'
import Experience from '@/components/home/Experience'
import Contact from '@/components/home/Contact'
import Navfloat from '@/components/nav/Navfloat'
import Navbar from '@/components/nav/Navbar'
import useInView from '@/hooks/useInView'

export default function Homepage() {
  const intro = useRef<HTMLDivElement>(null)

  // prevents flickers
  const [mounted, setMounted] = useState<boolean>()

  useEffect(() => {
    setMounted(true)
  }, [])

  const { ref: hero, inView: heroInView } = useInView({
    threshold: 0,
  })
  const { ref: projects, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const { ref: skills, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { ref: experience, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const { ref: contact, inView: contactInView } = useInView({
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
        <Navfloat
          onLinkClick={onNavLinkClick}
          show={(mounted && !heroInView) || false}
        />
        <div ref={hero}>
          <Hero />
        </div>
        <div>
          <div className="section-wrapper" ref={intro}>
            <Intro />
          </div>
          <div className="section-wrapper" ref={projects}>
            <Projects show={projectsInView} />
          </div>
          <div className="section-wrapper" ref={skills}>
            <Skills show={skillsInView} />
          </div>
          <div className="section-wrapper" ref={experience}>
            <Experience show={experienceInView} />
          </div>
          <div className="section-wrapper" ref={contact}>
            <Contact show={contactInView} />
          </div>
        </div>
      </div>
    </>
  )
}
