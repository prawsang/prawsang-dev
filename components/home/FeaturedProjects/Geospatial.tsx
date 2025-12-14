import { ThemeContext } from '@/contexts/ThemeContext'
import GeospatialDark from '@/public/images/featured-projects/geospatial-dark.svg'
import GeospatialLight from '@/public/images/featured-projects/geospatial-light.svg'
import { useContext } from 'react'
import GeospatialLightPart1 from '@/public/images/featured-projects/geospatial-parts/geospatial-part-light-1.svg'
import GeospatialLightPart2 from '@/public/images/featured-projects/geospatial-parts/geospatial-part-light-2.svg'
import GeospatialLightPart3 from '@/public/images/featured-projects/geospatial-parts/geospatial-part-light-3.svg'
import GeospatialDarkPart1 from '@/public/images/featured-projects/geospatial-parts/geospatial-part-dark-1.svg'
import GeospatialDarkPart2 from '@/public/images/featured-projects/geospatial-parts/geospatial-part-dark-2.svg'
import GeospatialDarkPart3 from '@/public/images/featured-projects/geospatial-parts/geospatial-part-dark-3.svg'
import MapMarkIcon from '@/public/icons/geo-alt-fill.svg'

export default function Geospatial({
  show,
  runAnimations,
  isLast = false,
}: {
  show: boolean
  runAnimations: boolean
  isLast?: boolean
}) {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`slide-transition-wrapper ${show && 'show'} w-full ${
        isLast && 'last'
      }`}
    >
      <div className="project-animation-wrapper">
        {theme === 'dark' ? <GeospatialDark /> : <GeospatialLight />}
        {theme === 'dark' ? (
          <>
            <GeospatialDarkPart1
              className={`geospatial-part-1 ${runAnimations && 'show'}`}
            />
            <GeospatialDarkPart2
              className={`geospatial-part-2 ${runAnimations && 'show'}`}
            />
            <GeospatialDarkPart3
              className={`geospatial-part-3 ${runAnimations && 'show'}`}
            />
            <MapMarkIcon
              className={`geospatial-mark-1 dark icon ${
                runAnimations && 'show'
              }`}
            />
            <MapMarkIcon
              className={`geospatial-mark-2 dark icon ${
                runAnimations && 'show'
              }`}
            />
            <MapMarkIcon
              className={`geospatial-mark-3 dark icon ${
                runAnimations && 'show'
              }`}
            />
          </>
        ) : (
          <>
            <GeospatialLightPart1
              className={`geospatial-part-1 ${runAnimations && 'show'}`}
            />
            <GeospatialLightPart2
              className={`geospatial-part-2 ${runAnimations && 'show'}`}
            />
            <GeospatialLightPart3
              className={`geospatial-part-3 ${runAnimations && 'show'}`}
            />
            <MapMarkIcon
              className={`geospatial-mark-1 icon ${runAnimations && 'show'}`}
            />
            <MapMarkIcon
              className={`geospatial-mark-2 icon ${runAnimations && 'show'}`}
            />
            <MapMarkIcon
              className={`geospatial-mark-3 icon ${runAnimations && 'show'}`}
            />
          </>
        )}
      </div>
    </div>
  )
}
