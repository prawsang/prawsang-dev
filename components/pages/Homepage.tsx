import Hero from '@/components/home/Hero'
import Intro from '../home/Intro'
import Projects from '../home/Projects'
export default function Homepage() {
  return (
    <div className="page-container">
      <Hero />
      <Intro />
      <Projects />
    </div>
  )
}
