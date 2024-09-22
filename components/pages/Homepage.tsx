import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import Projects from '@/components/home/Projects'
import Skills from '@/components/home/Skills'
import Experience from '@/components/home/Experience'
import Contact from '@/components/home/Contact'
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
