"use client";

import Image from "next/image";
import Header from "../Header";
import Mono from "../Mono";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Skills() {

  const { ref, inView } = useInView({
    threshold: 0.5
  })
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  useEffect(() => {
    if (inView) setIsLoaded(true)
  }, [inView])

  return (
    <div className="bg-base-200 pt:0 md:pt-36 pb-36 skills" ref={ref}>
      <div className="logos-container-mobile block md:hidden">
        <div className={`logos-row-top ${isLoaded && 'appear'}`}>
          <Image src="./logo-line-2-mobile.svg" alt="Gatsby, HTML, Sass, TypeScript" width="960" height="240" className="m-auto" />
        </div>
        <div className={`logos-row-bottom ${isLoaded && 'appear'}`}>
          <Image src="./logo-line-1-mobile.svg" alt="React, Redux, Angular" width="960" height="240" className="m-auto" />
        </div>
      </div>
      <div className="container flex flex-col md:flex-row gap-x-8">
        <div className="md:basis-1/3 lg:basis-1/4 logos-container hidden md:flex">
          <div className={`logos-row-right ${isLoaded && 'appear'}`}>
            <Image src="./logo-line-1.svg" alt="React, Redux, Angular" width="240" height="470" />
          </div>
          <div className={`logos-row-mid ${isLoaded && 'appear'}`}>
            <Image src="./logo-line-2.svg" alt="Gatsby, HTML, Sass, TypeScript" width="240" height="800" />
          </div>
          <div className={`logos-row-left ${isLoaded && 'appear'}`}>
            <Image src="./logo-line-3.svg" alt="Wordpress, JavaScript, CSS" width="240" height="470" />
          </div>
        </div>
        <div className={`md:basis-2/3 lg:basis-3/4 fade-in-and-slide-up ${isLoaded && 'visible'}`}>
          <Header className="mb-8">Skills</Header>
          <div className="flex flex-col sm:flex-row gap-x-8">
            <div className="basis-1/2">
              <div className="mb-8">
                <div className="mb-4">
                  <Mono className="text-base-800 font-bold text-3xl">
                    Basics
                  </Mono>
                </div>
                <span className="text-xl">
                  HTML, CSS/SCSS/Sass, JavaScript, TypeScript, Git
                </span>
              </div>
              <div className="mb-8 sm:mb-0">
                <div className="mb-4">
                  <Mono className="text-base-800 font-bold text-3xl">
                    Frameworks & Libraries
                  </Mono>
                </div>
                <div className="flex flex-col sm:flex-row text-xl">
                  <div className="basis-1/2">
                    <ul>
                      <li>React</li>
                      <li>Redux</li>
                      <li>NextJS</li>
                      <li>Gatsby</li>
                    </ul>
                  </div>
                  <div className="basis-1/2">
                    <ul>
                      <li>Angular</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="mb-8">
                <div className="mb-4">
                  <Mono className="text-base-800 font-bold text-3xl">
                    CMS & Other Tools
                  </Mono>
                </div>
                <span className="text-xl">
                  <ul>
                    <li>WordPress</li>
                    <li>Webflow</li>
                  </ul>
                </span>
              </div>
              <div className="mb-8">
                <div className="mb-3">
                  <Mono className="text-base-800 font-bold text-2xl">
                    Other Skills
                  </Mono>
                </div>
                <div className="flex text-lg">
                  <span>SQL, MongoDB, Python, Java, NodeJS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
