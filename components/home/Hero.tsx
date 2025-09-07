'use client'
import React, { useEffect, useState } from 'react'
import Trail from '../common/Trail'
import Image from 'next/image'
export default function Hero({
  windowHeight,
}: {
  windowHeight: number | undefined
}) {
  const [heroOpen, setHeroOpen] = useState<boolean>(false)
  const [topOpen, setTopOpen] = useState<boolean>(false)
  const [bottomOpen, setBottomOpen] = useState<boolean>(false)

  const [loadDone, setLoadDone] = useState<boolean>(false)
  const [loaderFadeDone, setLoaderFadeDone] = useState<boolean>(false)

  useEffect(() => {
    if (loadDone && !topOpen) {
      setTopOpen(true)
      setTimeout(() => setHeroOpen(true), 500)
      setTimeout(() => setBottomOpen(true), 1100)
    }
  }, [loadDone, topOpen])

  const onLoadDone = () => {
    setTimeout(() => {
      setLoadDone(true)
    }, 500)
    setTimeout(() => {
      setLoaderFadeDone(true)
    }, 1000)
  }

  return (
    <>
      {!loaderFadeDone && (
        <div className={`loading-overlay ${loadDone ? 'done' : ''}`}>
          <div className="loader"></div>
          <span className="loading-text">Loading</span>
        </div>
      )}
      <div
        className="hero-container"
        style={{ height: windowHeight ? windowHeight + 'px' : '100vh' }}
      >
        <Image
          className="hero-background"
          src="/images/hero-background.png"
          alt="hero-background"
          onLoadingComplete={onLoadDone}
          width={3024}
          height={1964}
          style={{ zIndex: -1, position: 'absolute' }}
          loading="eager"
        />
        <Image
          className="hero-background dark"
          src="/images/hero-background-dark.png"
          alt="hero-background"
          onLoadingComplete={onLoadDone}
          width={3024}
          height={1964}
          style={{ zIndex: -1, position: 'absolute' }}
          loading="eager"
        />
        {loadDone && (
          <>
            <div className="gradient-container">
              <div className="round-1" />
              <div className="round-2" />
              <div className="round-3" />
              <div className="round-4" />
              <div className="round-5" />
            </div>
            <div className="noise hero-noise" />
          </>
        )}
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
      </div>
    </>
  )
}
