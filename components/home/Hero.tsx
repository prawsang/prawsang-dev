"use client";

import { useEffect, useRef, useState } from "react";
import Mono from "../Mono";
import Image from "next/image";

export default function Hero() {
  const [animationSeq, setAnimationSeq] = useState<number>(0);

  const NAME = 'prawsang '
  const DESCRIPTION = '// a frontend developer'

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const windowRef = useRef<Window>();
  const [height, setHeight] = useState<number>(0)

  const animate = () => {
    setTimeout(() => {
      setAnimationSeq(1)
    }, 500)
    setTimeout(() => {
      setAnimationSeq(2)
      animateName()
    }, 500)
    setTimeout(() => {
      setAnimationSeq(3)
    }, 1300)
    setTimeout(() => {
      setAnimationSeq(4)
    }, 1600)
    setTimeout(() => {
      setAnimationSeq(5)
      animateDescription()
    }, 2000)
    setTimeout(() => {
      setAnimationSeq(6)
    }, 4000)
    setTimeout(() => {
      setAnimationSeq(7)
    }, 4400)
  }

  const animateName = () => {
    let string = ''
    let i = 0
    let interval = setInterval(() => {
      if (i < NAME.length) {
        string = string + NAME[i]
        setName(string)
        i++
      } else {
        clearInterval(interval)
      }
    }, 80)
  }

  const animateDescription = () => {
    let string = DESCRIPTION[0]
    setDescription(string)
    let i = 1
    let interval = setInterval(() => {
      if (i < DESCRIPTION.length) {
        string = string + DESCRIPTION[i]
        setDescription(string)
        i++
      } else {
        clearInterval(interval)
      }
    }, 80)
  }


  useEffect(() => {
    windowRef.current = window
    setHeight(windowRef.current?.innerHeight || 0)
    animate()
  }, [])

  return (
    <>
      <div className="hero font-bold text-5xl xs:text-6xl sm:text-7xl leading-tight"
        style={{ height: height + 'px'}}>
        <div className="container relative">
          <div>
            <div className="whitespace-nowrap">
              <div className={`cursor ${animationSeq === 0 ? 'inline-block' : 'hidden'}`} />
              <Mono className={`text-primary opacity-50 ${animationSeq > 0 || 'invisible'}`}>.</Mono>
              <div className={`cursor ${animationSeq === 1 ? 'inline-block' : 'hidden'}`} />
              <Mono className={`text-primary ${animationSeq > 1 || 'invisible'}`}>{name}</Mono>
              <div className={`cursor ${animationSeq === 2 ? 'inline-block' : 'hidden'}`} />

              <Mono className={`text-orange ${animationSeq === 3 ? 'inline-block' : 'hidden'}`}>
                <span className="opacity-50">{`{`}</span>
                <div className={`cursor ${animationSeq === 3 ? 'inline-block' : 'hidden'}`} />
                <span className="opacity-50">{`}`}</span>
              </Mono>
              <Mono className={`text-orange opacity-50 ${animationSeq > 3 ? 'inline-block' : 'hidden'}`}>
                {`{`}
              </Mono>
            </div>
            <div className={`pl-12 sm:pl-20 mt-4 mb-4 ml-4 border-l-2 border-base-800 border-solid ${animationSeq === 4 ? 'block' : 'hidden'}`}>
              <div className={`cursor ${animationSeq === 4 ? 'inline-block' : 'hidden'}`} />
            </div>
            <div className={`pl-12 sm:pl-20 mt-4 mb-4 ml-4 border-l-2 border-base-800 border-solid block ${animationSeq > 4 || 'invisible'}`}>
              <div>
                <Mono className="text-base-400 font-normal">
                  {description}
                </Mono>
                <div className={`cursor ${animationSeq === 5 ? 'inline-block' : 'hidden'}`} />
                <div className={`cursor blink ${animationSeq >= 6 ? 'inline-block' : 'hidden'}`} />
              </div>
            </div>
            <Mono className={`text-orange opacity-50 ${animationSeq > 3 || 'invisible'}`}>{`}`}</Mono>
          </div>
        </div>
      </div>
      <div className={`scroll-label-container ${animationSeq === 7 && 'visible'}`}>
        <div>
          <div className="mb-4">
          <Mono className="text-base-300">Scroll Down</Mono>
          </div>
          <Image src="/caret-up.svg" alt="caret up" width="48" height="48" className="scroll-icon" />
        </div>
      </div>
    </>
  );
}
