import Hero from "@/components/home/Hero";
import Intro from "../home/Intro";
import Skills from "../home/Skills";
import Experience from "../home/Experience";
import Contact from "../home/Contact";
import Footer from "../Footer";

export default function Homepage() {
  return (
    <div className="text-base-400">
      <Hero />
      <div className="content">
        <Intro />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}