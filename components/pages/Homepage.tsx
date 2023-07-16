import Hero from "@/components/home/Hero";
import Intro from "../home/Intro";

export default function Homepage() {
  return (
    <div className="text-base-400">
      <Hero />
      <div className="content">
        <Intro />
      </div>
    </div>
  );
}