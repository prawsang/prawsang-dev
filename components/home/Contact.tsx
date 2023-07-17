import Image from "next/image";
import Header from "../Header";
import Mono from "../Mono";

export default function Contact() {
  return (
    <div className="pt-24 pb-24 contact">
      <div className="container flex flex-col items-center">
        <Header className="mb-12">Let's Connect</Header>
        <a href="mailto:prawsang.c@gmail.com" className="flex items-center mb-8 gap-x-4">
          <Image src="/email.svg" width="32" height="32" alt="Email" />
          <Mono className="text-lg hover:underline">prawsang.c@gmail.com</Mono>
        </a>
        <a href="https://www.linkedin.com/in/prawsang" className="flex items-center mb-8 gap-x-4">
          <Image src="/linkedin.png" width="32" height="32" alt="Email" />
          <Mono className="text-lg hover:underline">linkedin.com/in/prawsang</Mono>
        </a>
        <a href="https://www.github.com/prawsang" className="flex items-center gap-x-4">
          <Image src="/github-mark.svg" width="32" height="32" alt="Email" />
          <Mono className="text-lg hover:underline">github.com/prawsang</Mono>
        </a>
      </div>
    </div>
  )
}