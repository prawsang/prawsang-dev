import Laptop from '@/public/images/laptop.svg'
import Image from 'next/image'
import OpacityTrail from '../common/OpacityTrail'

const EXPERIENCE = [
  {
    company: 'IBM Consulting',
    period: '2021 - present',
    position: 'Full-time | Full-stack Developer',
    description: [
      'Working in the consulting department, delivering solutions, such as web applications and mobile applications, to clients, which include banks and top companies in Thailand.',
      'Created, enhanced, and maintained the company’s private UI library for Angular.',
      'Wrote extensive unit test specifications to ensure quality of products delivered to clients.',
    ],
  },
  {
    company: 'AI & Robotics Ventures (ARV)',
    period: '2019 - 2021',
    position: 'Part-time | Front-end Developer',
    description: [
      'Developed various web applications using React for products of various purposes, such as data management and geospatial analysis.',
      'Created landing pages for the company’s various products using Webflow.',
    ],
  },
  {
    company: 'Wongnai Media Co.,Ltd.',
    period: 'June 2020 - July 2020',
    position: 'Intern | Front-end Developer',
    description: [
      'Worked with React, TypeScript, and various tools to enhance parts of the company’s main web pages and private libraries.',
      'Created pixel-perfect web pages using an existing strict styling system',
      'Worked with automated tests and unit tests for React (TypeScript).',
    ],
  },
]

export default function Experience({ show }: { show: boolean }) {
  return (
    <section className="experience-container">
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
            <OpacityTrail open={show} slide="up">
              <div className="laptop-img">
                <Laptop />
              </div>
            </OpacityTrail>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="flex">
          <div className="hidden lg:flex lg:basis-1/6" />
          <div className="lg:basis-2/3 lg:shrink-0">
            <div className="text-center mb-6">
              <h1>Job Experience</h1>
            </div>
            <div className="experience-content">
              <div className={`timeline-conceal ${show && 'show'}`} />
              {EXPERIENCE.map((e, i) => (
                <div key={`exp-${i}`} className="flex gap-5">
                  <div className="timeline-container">
                    <div className="timeline-mark" />
                    {i !== EXPERIENCE.length - 1 && (
                      <div className="timeline-line" />
                    )}
                  </div>
                  <div className="mb-6">
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
                      {e.description.map((d, di) => (
                        <li key={`d-${i + di}`}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex lg:basis-1/6" />
        </div>
      </div>
    </section>
  )
}
