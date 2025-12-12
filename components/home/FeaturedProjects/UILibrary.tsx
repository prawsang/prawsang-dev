import { ThemeContext } from '@/contexts/ThemeContext'
import UILibraryDark from '@/public/images/featured-projects/ui-library-dark.svg'
import UILibraryLight from '@/public/images/featured-projects/ui-library-light.svg'
import { useContext } from 'react'
import UILibraryDropdownDark from '@/public/images/featured-projects/ui-library-parts/ui-library-dropdown-dark.svg'
import UILibraryDropdownLight from '@/public/images/featured-projects/ui-library-parts/ui-library-dropdown-light.svg'
import ChevronDown from '@/public/icons/chevron-down.svg'

export default function UILibrary({
  show,
  runAnimations,
}: {
  show: boolean
  runAnimations: boolean
}) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`slide-transition-wrapper ${show && 'show'} w-full`}>
      <div className="project-animation-wrapper text-editor">
        {theme === 'dark' ? <UILibraryDark /> : <UILibraryLight />}
        <ChevronDown
          className={`library-dropdown-chevron ${runAnimations && 'up'} ${
            theme === 'dark' && 'dark'
          }`}
        />
        <div className={`library-dropdown-wrapper ${runAnimations && 'show'}`}>
          {theme === 'dark' ? (
            <UILibraryDropdownDark className={`library-dropdown`} />
          ) : (
            <UILibraryDropdownLight className={`library-dropdown`} />
          )}
        </div>
      </div>
    </div>
  )
}
