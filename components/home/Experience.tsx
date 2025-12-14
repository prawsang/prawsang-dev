'use-client'

import Laptop from '@/public/images/laptop.svg'
import Image from 'next/image'
import OpacityTrail from '../common/OpacityTrail'
import { useCallback } from 'react'
import useInView from '@/hooks/useInView'

const EXPERIENCE = [
  {
    company: 'IBM Consulting',
    period: '2021 - present',
    position: 'Full-time | Full-stack Developer',
    description: [
      'Delivered large-scale web and mobile solutions for major banks and top companies in Thailand, improving real operational workflows and smoothing out complicated business processes that clients relied on daily.',
      'Built and maintained the company’s Angular UI library, giving developers a solid foundation to launch client projects faster, with consistent styling and reusable components that cut down repetitive work.',
      'Took on unfamiliar technical challenges, researched options, and turned them into working proofs of concept, allowing the team to explore new directions and expand its internal codebase with approaches that hadn’t been used before.',
      'Wrote extensive unit tests that protected the stability of ongoing releases, reducing regression effort and helping the team move faster without breaking existing features.',
    ],
  },
  {
    company: 'AI & Robotics Ventures (ARV)',
    period: '2020 - 2021',
    position: 'Part-time | Front-end Developer',
    description: [
      'Developed various web applications using React for products of various purposes, such as data management and geo-spatial analysis. ',
      'Built a React + Turf.js geospatial tool capable of instantly rendering complicated latitude/longitude shape data from a legacy system, turning raw coordinates into clear visual insights for users.',
      'Created a React-based image management system connected to an AI anomaly detector, letting users browse files, manage data, and view algorithm-flagged issues directly on each image with visual markers.',
      'Designed and built Webflow landing pages that looked polished, performed well, and gave non-technical teammates control over updating text and visuals without needing developer assistance.',
    ],
  },
  {
    company: 'Wongnai Media Co.,Ltd.',
    period: 'June 2020 - July 2020',
    position: 'Intern | Front-end Developer',
    description: [
      'Contributed improvements to the company’s main React (TypeScript) application, a platform with millions of active users, working directly on sections that impacted daily user experience.',
      'Built pixel-perfect pages using the company’s React based private UI library and strict design rules, while also making small improvements to the library where needed.',
      'Implemented automated and unit tests using React Testing Library to comply with strict release standards, consistently hitting 90%+ coverage and ensuring stable deployments.',
    ],
  },
]

export default function Experience({
  show,
  windowHeight,
}: {
  show: boolean
  windowHeight: number | undefined
}) {
  const { ref: experience2, inView: experience2InView } = useInView({
    triggerOnce: false,
    threshold: 0.35,
  })

  const { ref: experience3, inView: experience3InView } = useInView({
    triggerOnce: false,
    threshold: 0.35,
  })

  const refs = [null, experience2, experience3]

  const open = useCallback(
    (index: number) => {
      if (index === 0) return show
      else if (index === 1) return experience2InView || experience3InView
      else return experience3InView
    },
    [experience2InView, experience3InView, show]
  )

  return (
    <section
      className="section-wrapper experience-container py-5 md:py-7 my-6"
      style={{ minHeight: windowHeight ? windowHeight + 'px' : '100vh' }}
    >
      <div className="emoji-container">
        <div className="animoji">
          <div className="emoji-img-wrapper">
            <OpacityTrail open={show} slide="up">
              <div className="animoji-img">
                <Image
                  unoptimized
                  className="animoji-img"
                  src="/images/animoji-2.png"
                  alt="Prawsang Animoji"
                  width={320}
                  height={320}
                ></Image>
              </div>
            </OpacityTrail>
          </div>
        </div>
        <div className="laptop">
          <div className="emoji-img-wrapper">
            <OpacityTrail gutter={16} open={show} slide="up">
              <div className="laptop-img">
                <Laptop />
              </div>
            </OpacityTrail>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="flex">
          <div className="hidden sm:flex sm:basis-1/6 lg:basis-1/4" />
          <div className="sm:basis-2/3 lg:basis-1/2 lg:shrink-0">
            <div className="text-center mb-8 sm:mb-9">
              <h1>Job Experience</h1>
            </div>
            <div className="experience-content">
              <div className={`timeline-conceal ${show && 'show'}`} />
              {EXPERIENCE.map((e, i) => (
                <div key={`exp-${i}`} className="flex gap-5" ref={refs[i]}>
                  <div className="timeline-container">
                    <div
                      className={`timeline-mark  ${open(i) || 'invisible'}`}
                    />
                    {i !== EXPERIENCE.length - 1 && (
                      <div
                        className={`timeline-line ${open(i + 1) && 'show'}`}
                      />
                    )}
                  </div>
                  <OpacityTrail open={open(i)}>
                    <div className="mb-8 sm:mb-9">
                      <div className="sm:flex items-end gap-4 mb-1">
                        <h3 className="bold">{e.company}</h3>
                        <h4 className="base-sub-header-text text-regular">
                          {e.period}
                        </h4>
                      </div>
                      <h4 className="mb-3 text-regular base-sub-header-text">
                        {e.position}
                      </h4>
                      <ul>
                        <OpacityTrail open={open(i)} slide="up">
                          {e.description.map((d, di) => (
                            <li key={`d-${i + di}`}>{d}</li>
                          ))}
                        </OpacityTrail>
                      </ul>
                    </div>
                  </OpacityTrail>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden sm:basis-1/6 lg:flex lg:basis-1/4" />
        </div>
      </div>
    </section>
  )
}
