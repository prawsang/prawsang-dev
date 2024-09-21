'use client'

import { useTimeoutState } from '@/hooks/useTimeoutState'
import { useEffect, useRef, useState } from 'react'

const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    const width = window?.innerWidth
    return width || 0
  } else return 0
}

const getPre = (windowWidth: number) => {
  return Math.max(windowWidth * 0.05, (windowWidth - 1440) / 2)
}

const getCardsPerPage = (
  windowWidth: number,
  cardWidth: number,
  gap: number
) => {
  return Math.floor((windowWidth - getPre(windowWidth)) / (cardWidth + gap))
}
export default function Carousel({
  children,
  cardWidth,
  gap,
  totalCards,
}: {
  children: React.ReactNode
  cardWidth: number
  gap: number
  totalCards: number
}) {
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState<number>(() => {
    return getWindowWidth()
  })
  const [indicatorCount, setIndicatorCount] = useState<number>(0)
  const [activeIndicator, setActiveIndicator] = useState<number>(0)
  const [indicatorPositions, setIndicatorPositions] = useState<number[]>([])
  const [ignoreScrollEvent, setIgnoreScrollEvent] =
    useTimeoutState<boolean>(false)

  // Calculate indicator count
  useEffect(() => {
    const cardsPerPage = getCardsPerPage(windowWidth, cardWidth, gap)
    const _indicatorCount = Math.ceil(
      (scrollContainer.current?.scrollWidth || 0 + gap) / windowWidth
    )
    setIndicatorCount(_indicatorCount)
    const arr = []
    for (let i = 0; i < _indicatorCount; i++) {
      arr.push(i * cardsPerPage * (cardWidth + gap))
    }
    setIndicatorPositions(arr)
  }, [windowWidth, cardWidth, gap, totalCards])

  // Resize observer to recalculate indicator count
  useEffect(() => {
    if (scrollContainer.current) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setWindowWidth(entry.contentRect.width)
        }
      })

      observer.observe(scrollContainer.current)

      // Cleanup function
      return () => {
        observer.disconnect()
      }
    }
  }, [])

  const onIndicatorClick = (i: number) => {
    if (!scrollContainer.current) return
    const currentIndicator = activeIndicator
    setIgnoreScrollEvent(true, {
      timeout: Math.abs(currentIndicator - i) * 600,
    })
    setActiveIndicator(i)
    if (i === 0) {
      scrollContainer.current.scrollTo({ left: 0, behavior: 'smooth' })
      return
    }

    const cardsPerPage = getCardsPerPage(windowWidth, cardWidth, gap)
    scrollContainer.current.scrollTo({
      left: getPre(windowWidth) + cardsPerPage * i * (cardWidth + gap) - gap,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (ignoreScrollEvent) return
    if (scrollContainer.current) {
      let closest = 0
      if (
        scrollContainer.current.scrollLeft >=
        scrollContainer.current.scrollWidth - windowWidth
      ) {
        setActiveIndicator(indicatorCount - 1)
        return
      }
      for (let i = 0; i < indicatorPositions.length; i++) {
        if (indicatorPositions[i] >= scrollContainer.current.scrollLeft) {
          break
        }
        closest = i
      }
      setActiveIndicator(closest)
    }
  }

  return (
    <div className="carousel">
      <div
        className="carousel-cards-wrapper"
        ref={scrollContainer}
        onScroll={handleScroll}
      >
        <div className="carousel-pre" />
        {children}
      </div>
      <div className="content-container">
        <div className="indicators">
          {[...Array(indicatorCount)].map((_, i) => (
            <div
              key={'indicator-' + i}
              className={`indicator ${activeIndicator === i && 'active'}`}
              onClick={() => onIndicatorClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
