'use client'

import { useTimeoutState } from '@/hooks/useTimeoutState'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function Carousel({
  children,
  totalCards,
  autoScroll,
  beginAutoScroll,
}: {
  children: React.ReactNode
  totalCards: number
  autoScroll?: boolean
  beginAutoScroll?: boolean
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
  const [autoScrollCleared, setAutoScrollCleared] = useState<boolean>(false)
  const [currentTimeoutId, setCurrentTimeoutId] = useState<
    NodeJS.Timeout | undefined
  >()

  const getPre = useCallback((windowWidth: number) => {
    return Math.min(windowWidth * 0.05, 48)
  }, [])

  const getCardWidth = useCallback((windowWidth: number) => {
    return Math.max(Math.min(450, windowWidth * 0.75), 320)
  }, [])

  const getCardsPerPage = useCallback(
    (windowWidth: number, gap: number) => {
      return (
        Math.floor(
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
    const cardsPerPage = getCardsPerPage(windowWidth, getGap(windowWidth))
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
  }, [getWindowWidth, currentTimeoutId])

  const scrollToIndicator = useCallback(
    (i: number) => {
      if (i === 0) {
        scrollContainer?.current?.scrollTo({ left: 0, behavior: 'smooth' })
        return
      }

      const gap = getGap(windowWidth)

      const cardsPerPage = getCardsPerPage(windowWidth, gap)
      scrollContainer?.current?.scrollTo({
        left:
          getPre(windowWidth) +
          cardsPerPage * i * (getCardWidth(windowWidth) + gap) -
          gap +
          2,
        behavior: 'smooth',
      })
    },
    [getCardWidth, getGap, getPre, getCardsPerPage, windowWidth]
  )

  const onIndicatorClick = useCallback(
    (i: number) => {
      if (!scrollContainer.current) return
      const currentIndicator = activeIndicator
      setIgnoreScrollEvent(true, {
        timeout: Math.abs(currentIndicator - i) * 600,
      })
      setActiveIndicator(i)
      scrollToIndicator(i)
    },
    [activeIndicator, scrollToIndicator, setIgnoreScrollEvent]
  )

  const handleScroll = () => {
    if (ignoreScrollEvent) return
    if (scrollContainer.current) {
      let closest = 0
      if (
        scrollContainer.current.scrollWidth -
          scrollContainer.current.clientWidth -
          scrollContainer.current.scrollLeft <
        100
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

  // AUTO SCROLL
  // Begin autoScroll
  const startTimeout = useCallback(() => {
    if (currentTimeoutId) clearTimeout(currentTimeoutId)
    const id = setTimeout(() => {
      const nextIndicator =
        activeIndicator < indicatorCount - 1 ? activeIndicator + 1 : 0
      onIndicatorClick(nextIndicator)
    }, 5000)
    setCurrentTimeoutId(id)
  }, [currentTimeoutId, activeIndicator, indicatorCount, onIndicatorClick])

  useEffect(() => {
    if (autoScroll && beginAutoScroll && !autoScrollCleared) {
      startTimeout()
    }
  }, [autoScrollCleared, beginAutoScroll, activeIndicator])

  // if the active indicator count changes, clear the timeout and restart
  useEffect(() => {
    if (currentTimeoutId) {
      clearTimeout(currentTimeoutId)
      startTimeout()
    }
  }, [indicatorCount])

  // clear timeout on unmount
  useEffect(() => {
    return () => {
      if (currentTimeoutId) clearTimeout(currentTimeoutId)
    }
  }, [])

  // clear on click
  const clearAutoScroll = useCallback(() => {
    if (currentTimeoutId) {
      clearTimeout(currentTimeoutId)
      setAutoScrollCleared(true)
    }
  }, [currentTimeoutId])

  return (
    <div
      className="carousel"
      onClick={(e) => {
        clearAutoScroll()
        e.stopPropagation()
      }}
    >
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
