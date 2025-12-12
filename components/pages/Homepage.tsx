'use client'

import { useEffect, useRef, useState } from 'react'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import Projects from '@/components/home/Projects/Projects'
import Skills from '@/components/home/Skills'
import Experience from '@/components/home/Experience'
import Contact from '@/components/home/Contact'
import Navfloat from '@/components/nav/Navfloat'
import Navbar from '@/components/nav/Navbar'
import useInView from '@/hooks/useInView'
import FeaturedProjects from '../home/FeaturedProjects/FeaturedProjects'

export default function Homepage() {
  const intro = useRef<HTMLDivElement>(null)

  // prevents flickers
  const [mounted, setMounted] = useState<boolean>()
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setHeight(
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0,
        640
      )
    )
  }, [])

  const { ref: hero, inView: heroInView } = useInView({
    threshold: 0,
  })
  const { ref: projects, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  })
  const { ref: featuredProjects, inView: featuredProjectsInView } = useInView({
    threshold: 0.35,
  })
  const skills = useRef<HTMLDivElement>(null)
  const { ref: experience, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  })
  const { ref: contact, inView: contactInView } = useInView({
    threshold: 0.35,
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
          <Hero windowHeight={height} />
        </div>
        <div>
          <div className="section-wrapper" ref={intro}>
            <Intro windowHeight={height} />
          </div>
          <div className="section-wrapper" ref={featuredProjects}>
            <FeaturedProjects
              show={featuredProjectsInView}
              windowHeight={height}
            />
          </div>
          <div className="section-wrapper" ref={projects}>
            <Projects windowHeight={height} show={projectsInView} />
          </div>
          <div className="section-wrapper" ref={skills}>
            <Skills windowHeight={height} />
          </div>
          <div className="section-wrapper" ref={experience}>
            <Experience windowHeight={height} show={experienceInView} />
          </div>
          <div className="section-wrapper" ref={contact}>
            <Contact windowHeight={height} show={contactInView} />
          </div>
        </div>
      </div>
    </>
  )
}
