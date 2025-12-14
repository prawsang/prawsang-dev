'use client'

import Chip from '@/components/common/Chip'
import OpacityTrail from '../common/OpacityTrail'
import useInView from '@/hooks/useInView'
// import { useEffect, useState } from 'react'

const SKILL_LIST: { header: string; skills: string[] }[] = [
  {
    header: 'Front-end Skills',
    skills: [
      'Angular',
      'React',
      'Vue.js',
      'CSS/SCSS',
      'NextJS',
      'Redux',
      'MobX',
      'Storybook',
      'Responsive Web',
      'Turf.js',
      'ProseMirror',
    ],
  },
  {
    header: 'Testing & Quality Assurance',
    skills: [
      'Unit testing',
      'Jasmine + Karma',
      'Jest',
      'React Testing Library',
      'Sonarqube',
    ],
  },
  {
    header: 'Programming Languages/Scripts',
    skills: ['TypeScript/JavaScript', 'Python', 'Java'],
  },
  {
    header: 'Backend & Database',
    skills: ['Database Design', 'SQL', 'PostgreSQL', 'MongoDB', 'Node.js'],
  },
  {
    header: 'Other tools',
    skills: ['Git', 'Figma', 'Jira', 'Webflow', 'Wordpress'],
  },
]

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
            <div />
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
