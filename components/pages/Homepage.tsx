import Hero from '@/components/home/Hero'
import Intro from '../home/Intro'
import Projects from '../home/Projects'
import Skills from '../home/Skills'
export default function Homepage() {
  return (
    <div className="page-container">
      <Hero />
      <Intro />
      <Projects />
      <Skills />
    </div>
  )
}
