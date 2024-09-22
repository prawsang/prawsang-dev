import Hero from '@/components/home/Hero'
import Intro from '../home/Intro'
import Projects from '../home/Projects'
import Skills from '../home/Skills'
import Experience from '../home/Experience'
import Contact from '../home/Contact'
export default function Homepage() {
  return (
    <div className="page-container">
      <Hero />
      <Intro />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}
