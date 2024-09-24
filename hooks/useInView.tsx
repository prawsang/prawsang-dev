import { useEffect, useRef, useState } from 'react'

interface InViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean
}

function useInView(options: InViewOptions) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  const callback: IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    if (options.triggerOnce && inView) return
    setInView(entry.isIntersecting)
  }

  useEffect(() => {
    const current = ref?.current
    const observer = new IntersectionObserver(callback, options)
    if (ref.current) observer.observe(ref.current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [options])

  return { ref, inView }
}

export default useInView
