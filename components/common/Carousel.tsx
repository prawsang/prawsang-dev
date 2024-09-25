'use client'

import { useTimeoutState } from '@/hooks/useTimeoutState'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function Carousel({
  children,
  totalCards,
}: {
  children: React.ReactNode
  totalCards: number
}) {
  const getWindowWidth = useCallback(() => {
    if (typeof document !== 'undefined') {
      const width = document?.body.clientWidth
      return Math.min(width, 1800) || 0
    } else return 0
  }, [])

  const scrollContainer = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState<number>(() => {
    return getWindowWidth()
  })
  const [indicatorCount, setIndicatorCount] = useState<number>(1)
  const [activeIndicator, setActiveIndicator] = useState<number>(0)
  const [indicatorPositions, setIndicatorPositions] = useState<number[]>([])
  const [ignoreScrollEvent, setIgnoreScrollEvent] =
    useTimeoutState<boolean>(false)

  const getPre = useCallback((windowWidth: number) => {
    return Math.min(windowWidth * 0.05, 48)
  }, [])

  const getCardWidth = useCallback((windowWidth: number) => {
    return Math.min(480, windowWidth * 0.75)
  }, [])

  const getCardsPerPage = useCallback(
    (windowWidth: number, gap: number) => {
      return (
        Math.round(
          (windowWidth - getPre(windowWidth)) /
            (getCardWidth(windowWidth) + gap)
        ) || 1
      )
    },
    [getCardWidth, getPre]
  )

  const getGap = useCallback((windowWidth: number) => {
    return Math.min(windowWidth * 0.05, 48)
  }, [])

  // Calculate indicator count
  useEffect(() => {
    if (!scrollContainer.current) return
    const cardsPerPage = getCardsPerPage(windowWidth, windowWidth * 0.05)
    const _indicatorCount = Math.ceil(totalCards / cardsPerPage)
    setIndicatorCount(_indicatorCount)
    const arr = []
    for (let i = 0; i < _indicatorCount; i++) {
      arr.push(
        i * cardsPerPage * (getCardWidth(windowWidth) + getGap(windowWidth))
      )
    }
    setIndicatorPositions(arr)
  }, [windowWidth, totalCards, getCardsPerPage, getCardWidth, getGap])

  // Resize observer to recalculate indicator count
  useEffect(() => {
    if (scrollContainer.current) {
      const observer = new ResizeObserver(() => {
        setWindowWidth(getWindowWidth())
      })

      observer.observe(scrollContainer.current)

      // Cleanup function
      return () => {
        observer.disconnect()
      }
    }
  }, [getWindowWidth])

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

    const gap = getGap(windowWidth)

    const cardsPerPage = getCardsPerPage(windowWidth, gap)
    scrollContainer.current.scrollTo({
      left:
        getPre(windowWidth) +
        cardsPerPage * i * (getCardWidth(windowWidth) + gap) -
        gap +
        2,
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
        <div className="carousel-post" />
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
