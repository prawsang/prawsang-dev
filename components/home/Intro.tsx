import Image from 'next/image'
import Chip from '@/components/common/Chip'

function yearsSinceJanuary2020(): number {
  const january2020 = new Date(2020, 0) // January is month 0 in Date objects
  const currentDate = new Date()

  // Convert both dates to milliseconds using getTime()
  const differenceInMilliseconds = currentDate.getTime() - january2020.getTime()
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25 // Includes leap years

  const yearsAgo = differenceInMilliseconds / millisecondsPerYear

  // Round down to the nearest 0.5
  return Math.floor(yearsAgo * 2) / 2
}

export default function Intro() {
  return (
    <section>
      <div className="content-container">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:basis-1/5 text-center">
            <Image
              className="m-auto w-3/5 md:w-fit"
              unoptimized
              src="/images/animoji-1.png"
              alt="Prawsang Animoji"
              width={313}
              height={288}
            ></Image>
          </div>
          <div className="md:basis-2/3 flex flex-col gap-5">
            <div>
              <h1 className="primary-header-text mb-3 text-center md:text-left">
                Hello there!
              </h1>
              <p className="p-large">
                <b>My name is Prawsang. </b>I am a frontend developer based in
                Bangkok, Thailand. With {yearsSinceJanuary2020()} years of
                experience in frontend development, I have worked in various
                organizations, focusing on a variety of industries, such as
                robotics, social media, and consultancy. Throughout the years, I
                have experience in a variety of libraries, frameworks, and
                tools, such as React and Angular.
              </p>
            </div>
            <div>
              <h2 className="primary-header-text mb-3">Education</h2>
              <h3>Chulalongkorn University</h3>
              <p className="semi-bold primary-sub-header-text mb-3">
                Bachelor of Engineering (Computer Engineering)
              </p>
              <p className="base-sub-header-text">
                Graduated in 2021 | GPA: 3.40 (2nd Class Honors)
              </p>
            </div>
            <div>
              <h2 className="primary-header-text mb-3">Languages</h2>
              <div className="flex gap-3">
                <Chip>
                  English <span className="chip-sub-text">- Fluent</span>
                </Chip>
                <Chip>
                  Thai <span className="chip-sub-text">- Native</span>
                </Chip>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:basis-1/6"></div>
        </div>
      </div>
    </section>
  )
}
