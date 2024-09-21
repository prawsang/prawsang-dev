'use client'
import React, { useEffect, useState } from 'react'
import Trail from '../common/Trail'
export default function Hero() {
  const [heroOpen, setHeroOpen] = useState<boolean>(false)
  const [topOpen, setTopOpen] = useState<boolean>(false)
  const [bottomOpen, setBottomOpen] = useState<boolean>(false)

  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setTopOpen(true)
    setTimeout(() => setHeroOpen(true), 500)
    setTimeout(() => setBottomOpen(true), 1100)

    setHeight(
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      )
    )
  }, [])

  return (
    <div className="hero-container" style={{ height: height + 'px' }}>
      <div className="gradient-container">
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="round-1" />
        <div className="round-2" />
        <div className="round-3" />
        <div className="round-4" />
        <div className="round-5" />
      </div>
      <div className="content-container">
        <div className="hero-content flex flex-col py-8 gap-0">
          <Trail open={topOpen} config={{ tension: 1000, friction: 200 }}>
            <h2 className="hero-sub-text bold whitespace-nowrap">
              Hi! I&apos;m
            </h2>
          </Trail>
          <div className="text-center">
            <Trail open={heroOpen} containerClasses="justify-center">
              <span className="hero-text">P</span>
              <span className="hero-text">r</span>
              <span className="hero-text">a</span>
              <span className="hero-text">w</span>
              <span className="hero-text">s</span>
              <span className="hero-text">a</span>
              <span className="hero-text">n</span>
              <span className="hero-text">g</span>
            </Trail>
          </div>
          <div className="flex justify-end">
            <div
              className={`hero-sub-text flex flex-col gap-1 fade-in ${
                bottomOpen && 'visible'
              }`}
            >
              {/* <Trail open={bottomOpen} containerClasses=""> */}
              <h2>A</h2>
              <div className="flex gap-4">
                <h2>Front</h2>
                <h2>-</h2>
                <h2>end</h2>
              </div>
              <h2>Developer</h2>
              {/* </Trail> */}
            </div>
          </div>
        </div>
      </div>
      <svg style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
