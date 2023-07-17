import Hero from "@/components/home/Hero";
import Intro from "../home/Intro";
import Skills from "../home/Skills";

export default function Homepage() {
  return (
    <div className="text-base-400">
      <Hero />
      <div className="content">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}