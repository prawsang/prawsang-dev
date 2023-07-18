"use client";

import Image from "next/image";
import Header from "../Header";
import Mono from "../Mono";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Experience() {
  const { ref: refExperience, inView: inViewExperience } = useInView({
    threshold: 0.5,
  });
  const [isLoadedExperience, setIsLoadedExperience] = useState<boolean>(false);
  useEffect(() => {
    if (inViewExperience) setIsLoadedExperience(true);
  }, [inViewExperience]);

  const { ref: refEducation, inView: inViewEducation } = useInView({
    threshold: 0.5,
  });
  const [isLoadedEducation, setIsLoadedEducation] = useState<boolean>(false);
  useEffect(() => {
    if (inViewEducation) setIsLoadedEducation(true);
  }, [inViewEducation]);

  return (
    <div className="pt-32 pb-32 md:pt-40 md:pb-40 bg-base-100">
      <div className="container flex gap-x-8 md:pl-0">
        <div>
          <div
            ref={refExperience}
            className={`flex flex-col-reverse md:flex-row gap-x-8 fade-in-and-slide-up ${
              isLoadedExperience && "visible"
            }`}
          >
            <div className="basis-3/5">
              <Header className="mb-12">Job Experience</Header>
              <div className="pb-12 ml-8 md:ml-0 relative">
                <div className="timeline-container">
                  <div className="timeline-mark" />
                  <div className="timeline-line" />
                </div>
                <div className="mb-1">
                  <Mono className="text-xl font-bold text-base-800 mr-4">
                    IBM Consulting
                  </Mono>
                  <Mono className="text-lg">2021 - present</Mono>
                </div>
                <div className="mb-3">
                  <Mono>
                    <span className="italic">Full-time</span> |{" "}
                    <span className="italic">Full-stack Developer</span>
                  </Mono>
                </div>
                <p className="text-lg">
                  Worked with various clients on a number of projects, mainly on
                  web administration systems.
                </p>
              </div>
              <div className="pb-12 ml-8 md:ml-0 relative">
                <div className="timeline-container">
                  <div className="timeline-mark" />
                  <div className="timeline-line" />
                </div>
                <div className="mb-1">
                  <Mono className="text-xl font-bold text-base-800 mr-4">
                    AI and Robotics Ventures (ARV)
                  </Mono>
                  <Mono className="text-lg">2019 - 2021</Mono>
                </div>
                <div className="mb-3">
                  <Mono>
                    <span className="italic">Part-time</span> |{" "}
                    <span className="italic">Frontend Developer</span>
                  </Mono>
                </div>
                <p className="text-lg">
                  Worked on a number of projects, including web administration,
                  web file management, and marketing websites.
                </p>
              </div>
              <div className="mb-20 ml-8 md:ml-0 relative">
                <div className="timeline-container">
                  <div className="timeline-mark" />
                </div>
                <div className="mb-1">
                  <Mono className="text-xl font-bold text-base-800 mr-4">
                    Wongnai Media
                  </Mono>
                  <Mono className="text-lg">June 2020 - July 2020</Mono>
                </div>
                <div className="mb-3">
                  <Mono className="italic">
                    <span className="italic">Intern</span> |{" "}
                    <span className="italic">Frontend Developer</span>
                  </Mono>
                </div>
                <p className="text-lg">
                  Assisted the frontend development team on updating certain
                  pages of the main website.
                </p>
              </div>
            </div>
            <div className="basis-2/5 flex justify-center md:justify-end items-start mb-20">
              <Image
                src="./wireframe-pixel-alternate.svg"
                alt="Pixel Wireframe"
                width="386"
                height="386"
              ></Image>
            </div>
          </div>

          <div ref={refEducation} className={`fade-in-and-slide-up ${
              isLoadedEducation && "visible"
            }`}>
            <Header className="mb-12">Education</Header>
            <div className="mb-1">
              <Mono className="text-xl font-bold text-base-800 mr-4">
                Chulalongkorn University
              </Mono>
            </div>
            <div className="mb-3">
              <Mono className="font-bold">
                Bachelor of Engineering (Computer Engineering)
              </Mono>
            </div>
            <div>
              <Mono>
                <span className="italic">
                  Graduated in 2021 | GPA: 3.40 (2nd Class Honors)
                </span>
              </Mono>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
