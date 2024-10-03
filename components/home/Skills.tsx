'use client'

import Chip from '@/components/common/Chip'
import OpacityTrail from '../common/OpacityTrail'
import useInView from '@/hooks/useInView'

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
      'Gatsby',
      'MobX',
      'Storybook',
      'Responsive Web',
    ],
  },
  {
    header: 'Testing & Quality Assurance',
    skills: ['Unit testing', 'Jasmine + Karma', 'Jest', 'Sonarqube'],
  },
  {
    header: 'Programming Languages/Scripts',
    skills: ['TypeScript/JavaScript', 'Python', 'Java'],
  },
  {
    header: 'Backend & Database',
    skills: [
      'Database Design',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Node.js',
      'Express',
      'Sequelize',
    ],
  },
  {
    header: 'Other tools',
    skills: ['Git', 'Figma', 'Webflow', 'Wordpress'],
  },
]

export default function Skills() {
  const inView1 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView2 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView3 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView4 = useInView({ threshold: 0.3, triggerOnce: true })
  const inView5 = useInView({ threshold: 0.3, triggerOnce: true })

  const refs = [inView1, inView2, inView3, inView4, inView5]

  return (
    <section>
      <div className="content-container">
        <h1 className="base-header-text bold mb-6">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-2 md:gap-x-4 gap-y-5 md:gap-y-6">
          {SKILL_LIST.map((s, i) => (
            <div key={`skill-h-${i}`} ref={refs[i]?.ref}>
              <p className="bold base-sub-header-text mb-4">{s.header}</p>
              <div className="flex flex-wrap">
                <OpacityTrail open={refs[i]?.inView}>
                  {s.skills.map((skill) => (
                    <Chip key={`skill-${skill}`} className="mb-3 mr-3">
                      <>{skill}</>
                    </Chip>
                  ))}
                </OpacityTrail>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
