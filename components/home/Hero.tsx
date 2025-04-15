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
    <div
      className="hero-container"
      style={{ height: height ? height + 'px' : '100vh' }}
    >
      <div className="gradient-container">
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="round-1" />
        <div className="round-2" />
        <div className="round-3" />
        <div className="round-4" />
        <div className="round-5" />
      </div>
      <div className="noise" />
      <div className="wide-content-container">
        <div className="hero-content flex flex-col py-8 gap-0">
          <div className="flex">
            <Trail open={topOpen} config={{ tension: 1000, friction: 200 }}>
              <span className="hero-sub-text bold whitespace-nowrap">
                Hi! I&apos;m
              </span>
            </Trail>
          </div>
          <div className="flex flex-wrap justify-start md:justify-center mt-3 mb-3 sm:mb-6">
            <Trail open={heroOpen}>
              <div className="hero-text">P</div>
              <div className="hero-text">r</div>
              <div className="hero-text">a</div>
              <div className="hero-text">w</div>
              <div className="hero-break" />
              <div className="hero-text bottom-line">s</div>
              <div className="hero-text bottom-line">a</div>
              <div className="hero-text bottom-line">n</div>
              <div className="hero-text bottom-line">g</div>
            </Trail>
          </div>
          <div className="flex justify-end">
            <div
              className={`hero-sub-text flex flex-col gap-1 fade-in ${
                bottomOpen && 'visible'
              }`}
            >
              <span>A</span>
              <div className="flex gap-4">
                <span>Front</span>
                <span>-</span>
                <span>end</span>
              </div>
              <span>Developer</span>
            </div>
          </div>
        </div>
      </div>
      <svg
        style={{ position: 'absolute', height: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
              color-interpolation-filters="sRGB"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
