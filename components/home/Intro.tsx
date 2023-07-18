"use client"

import Image from "next/image"
import Mono from "../Mono"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Intro() {

  const { ref, inView } = useInView({
    threshold: 0.2
  })
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  useEffect(() => {
    if (inView) setIsLoaded(true)
  }, [inView])

  const [animationSeq, setAnimationSeq] = useState<number>(0)
  useEffect(() => {
    // animate
    if (!isLoaded) return
    setTimeout(() => {
      setAnimationSeq(1)
    }, 1000)
    setTimeout(() => {
      setAnimationSeq(2)
    }, 1700)
    setTimeout(() => {
      setAnimationSeq(3)
    }, 2700)
    setTimeout(() => {
      setAnimationSeq(4)
    }, 3500)
  },[isLoaded])

  const getFrameImageName = () => {
    switch (animationSeq) {
      case 0: return '/frame3.svg';
      case 1: return '/frame1.svg';
      case 2: return '/frame3.svg';
      default: return '/frame2.svg';
    }
  }

  return (
    <div className="bg-base-100 pt-40 pb-40">
      <div className="container flex flex-col-reverse sm:flex-row justify-start items-center sm:items-start gap-x-12" ref={ref}>
        <div className={`basis-3/5 fade-in-and-slide-up ${isLoaded && 'visible'}`}>
          <Mono className="font-bold text-6xl text-base-900 leading-loose">Hi!</Mono><br/>
          <p>My name is Prawsang. I am a frontend developer based in Bangkok, Thailand. 
            With 3 years of experience in frontend development, I have worked in various organizations, 
            focusing on a variety of industries, such as robotics, social media, and consultancy. 
            Throughout the years, I have experience in a variety of libraries, frameworks, and tools, 
            such as React and Angular. Having a design background, I prioritize both the aesthetics of 
            the user interface and the functionality of the web applications I develop.</p>
        </div>
        <div className={`basis-2/5 flex justify-center mb-8 sm:mb-0 fade-in-and-slide-up ${isLoaded && 'visible'}`}>
          {animationSeq === 1 && <Image src="/hi.svg" alt="Hi bubble" width="139" height="106" className="hi-bubble" />}
          <div className="relative">
            <Image src="/heart.svg" alt="Heart" width="80" height="80" className={`heart ${animationSeq === 4 && 'visible'}`} />
            <Image src={getFrameImageName()} alt="Intro avatar" width="246" height="265" className="mt-8" />
          </div>
        </div>
      </div>
    </div>
  )
}