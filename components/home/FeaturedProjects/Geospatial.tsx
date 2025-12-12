import { ThemeContext } from '@/contexts/ThemeContext'
import GeospatialDark from '@/public/images/featured-projects/geospatial-dark.svg'
import GeospatialLight from '@/public/images/featured-projects/geospatial-light.svg'
import { useContext } from 'react'

export default function Geospatial({
  show,
  runAnimations,
}: {
  show: boolean
  runAnimations: boolean
}) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`slide-transition-wrapper ${show && 'show'} w-full`}>
      <div className="project-animation-wrapper">
        {theme === 'dark' ? <GeospatialDark /> : <GeospatialLight />}
      </div>
    </div>
  )
}
