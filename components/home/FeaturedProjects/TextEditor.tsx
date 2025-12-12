import { ThemeContext } from '@/contexts/ThemeContext'
import TextEditorDark from '@/public/images/featured-projects/text-editor-dark.svg'
import TextEditorLight from '@/public/images/featured-projects/text-editor-light.svg'
import { useContext } from 'react'

export default function TextEditor({
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
        {theme === 'dark' ? <TextEditorDark /> : <TextEditorLight />}
        <div className={`text-editor-caret ${runAnimations && 'show'}`} />
      </div>
    </div>
  )
}
