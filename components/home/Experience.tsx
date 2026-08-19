'use-client'

import Laptop from '@/public/images/laptop.svg'
import Image from 'next/image'
import OpacityTrail from '../common/OpacityTrail'
import { useCallback } from 'react'
import useInView from '@/hooks/useInView'
import { SITE_CONTENT } from '@/constants/SiteContent'

const EXPERIENCE = SITE_CONTENT.jobExperiences

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
    [experience2InView, experience3InView, show],
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
