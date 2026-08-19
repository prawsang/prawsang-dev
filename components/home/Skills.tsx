'use client'

import Chip from '@/components/common/Chip'
import OpacityTrail from '../common/OpacityTrail'
import useInView from '@/hooks/useInView'
import { SITE_CONTENT } from '@/constants/SiteContent'
// import { useEffect, useState } from 'react'

const SKILL_LIST: { header: string; skills: string[] }[] = SITE_CONTENT.skills

const ACTIVE_SKILLS = new Set([
  'Angular',
  'React',
  'NextJS',
  'Redux',
  'Storybook',
  'Responsive Web',
  'Unit testing',
  'Jasmine + Karma',
  'TypeScript/JavaScript',
  'CSS/SCSS',
  'Git',
  'Figma',
  'Jira',
])

export default function Skills({
  windowHeight,
}: {
  windowHeight: number | undefined
}) {
  const inView1 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView2 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView3 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView4 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView5 = useInView({ threshold: 0.3, triggerOnce: true })

  const refs = [inView1, inView2, inView3, inView4, inView5]

  return (
    <section
      style={{ minHeight: windowHeight ? windowHeight + 'px' : '100vh' }}
      className="skills-container py-8"
    >
      <div className="gradient-container"></div>
      <div className="noise" />
      <div className="content-container" style={{ zIndex: 100 }}>
        <div className="py-8">
          <h1
            className="base-header-text bold mb-6"
            style={{ mixBlendMode: 'difference' }}
          >
            My Skills
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-2 md:gap-x-4 gap-y-5 md:gap-y-6">
            {SKILL_LIST.map((s, i) => (
              <div key={`skill-h-${i}`} ref={refs[i]?.ref}>
                <p className="bold primary-sub-header-text mb-4">{s.header}</p>
                <div className="flex flex-wrap">
                  <OpacityTrail open={refs[i]?.inView}>
                    {s.skills.map((skill) => (
                      <Chip
                        key={`skill-${skill}`}
                        className={`mb-3 mr-3 ${
                          ACTIVE_SKILLS.has(skill) && 'solid'
                        }`}
                      >
                        <>{skill}</>
                      </Chip>
                    ))}
                  </OpacityTrail>
                </div>
              </div>
            ))}
            <div className="hidden sm:block" />
            <div className="flex gap-1 items-center">
              <div className="legend" />
              <span className="base-sub-text">Actively Used Skill</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
