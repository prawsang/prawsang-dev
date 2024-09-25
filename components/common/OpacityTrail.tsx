import { useTrail, a, SpringConfig } from '@react-spring/web'
import React, { ReactNode } from 'react'

const getSlideTransform = (slide: 'up' | 'right') => {
  if (slide === 'up') {
    return { open: 'translateY(0)', close: 'translateY(48px)' }
  } else if (slide === 'right') {
    return { open: 'translateX(0)', close: 'translateX(-48px)' }
  } else {
    return { open: 'none', close: 'none' }
  }
}

export default function OpacityTrail({
  open,
  slide,
  config,
  children,
  gutter,
}: {
  open: boolean
  slide?: 'up' | 'right'
  config?: SpringConfig
  children?: ReactNode[] | ReactNode
  gutter?: number
}) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: config || { tension: 1200, friction: 200 },
    opacity: open ? 1 : 0,
    transform: slide
      ? open
        ? getSlideTransform(slide).open
        : getSlideTransform(slide).close
      : 'none',
  })
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={{ ...style, padding: gutter + 'px 0' }}>
          {items[index]}
        </a.div>
      ))}
    </>
  )
}
