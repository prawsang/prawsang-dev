import { useTrail, a } from '@react-spring/web'
import React, { ReactNode } from 'react'

export default function Trail({
  open,
  config,
  children,
}: {
  open: boolean
  config?: any
  children?: ReactNode[] | ReactNode
}) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: config || { tension: 1200, friction: 100 },
    width: open ? '100%' : '0%',
    from: { width: '0%' },
  })
  return (
    <>
      {trail.map(({ ...style }, index) => (
        <div key={index}>
          <a.div style={{ ...style, overflow: 'hidden' }}>{items[index]}</a.div>
        </div>
      ))}
    </>
  )
}
