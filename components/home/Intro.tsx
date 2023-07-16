"use client"

import Image from "next/image"
import Mono from "../Mono"

export default function Intro() {

  return (
    <div className="bg-base-100 pt-40 pb-40">
      <div className="container flex justify-start align-start gap-x-8">
        <div className="basis-3/5">
          <Mono className="font-bold text-6xl text-base-900 leading-loose">Hi!</Mono><br/>
          <p>My name is Prawsang. I am a frontend developer based in Bangkok, Thailand. 
            With 4 years of experience in frontend development, I have worked in various organizations, 
            focusing on a variety of industries, such as robotics, social media, and consultancy. 
            Throughout the years, I have experience in a variety of libraries, frameworks, and tools, 
            such as React and Angular.</p>
        </div>
        <div className="basis-2/5 relative">
          <Image src="/hi.svg" alt="Hi bubble" width="139" height="106" className="hi-bubble" />
          <Image src="/frame1.svg" alt="Intro avatar" width="246" height="265" className="mx-auto mt-8" />
        </div>
      </div>
    </div>
  )
}