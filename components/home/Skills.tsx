import Chip from '@/components/common/Chip'
import OpacityTrail from '../common/OpacityTrail'

const SKILL_LIST: { header: string; skills: string[] }[] = [
  {
    header: 'Front-end Frameworks & Libraries',
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

export default function Skills({ show }: { show: boolean }) {
  return (
    <section>
      <div className="content-container">
        <h1 className="base-header-text bold mb-6">My Skills</h1>
        <div className="grid grid-cols-3 gap-x-4 gap-y-6">
          {SKILL_LIST.map((s, i) => (
            <div key={`skill-h-${i}`}>
              <p className="bold base-sub-header-text mb-4">{s.header}</p>
              <div className="flex flex-wrap">
                <OpacityTrail open={show}>
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
