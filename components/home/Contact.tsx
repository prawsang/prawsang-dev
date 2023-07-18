import Image from "next/image";
import Header from "../Header";
import Mono from "../Mono";

export default function Contact() {
  return (
    <div className="pt-24 pb-24 contact">
      <div className="container flex flex-col sm:flex-row">
        <div className="basis-1/6 hidden sm:block">
          <Image src="/contact-bubble-2.svg" alt="Text bubble" width="80" height="80" className="mt-8" />
        </div>
        <div className="basis-4/6 flex flex-col items-center">
          <div className="flex sm:hidden justify-center mb-8">
            <Image src="/contact-bubble-2.svg" alt="Text bubble" width="80" height="80" />
          </div>
          <Header className="mb-12">Let&apos;s Connect</Header>
          <a href="mailto:prawsang.c@gmail.com" className="flex items-center mb-8 gap-x-4">
            <Image src="/email.svg" width="32" height="32" alt="Email" />
            <Mono className="text-lg hover:underline">prawsang.c@gmail.com</Mono>
          </a>
          <a href="https://www.linkedin.com/in/prawsang" className="flex items-center mb-8 gap-x-4">
            <Image src="/linkedin.png" width="32" height="32" alt="Email" />
            <Mono className="text-lg hover:underline">linkedin.com/in/prawsang</Mono>
          </a>
          <a href="https://www.github.com/prawsang" className="flex items-center mb-8 gap-x-4">
            <Image src="/github-mark.svg" width="32" height="32" alt="Email" />
            <Mono className="text-lg hover:underline">github.com/prawsang</Mono>
          </a>
        </div>
        <div className="basis-1/6 hidden sm:flex flex-col justify-end items-end">
          <Image src="/contact-bubble-1.svg" alt="Text bubble" width="80" height="80" className="mb-8" />
        </div>
      </div>
    </div>
  )
}