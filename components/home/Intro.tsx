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

const helloThere = [
  'H',
  'e',
  'L',
  'L',
  'o',
  ' ',
  ' ',
  ' ',
  'T',
  'h',
  'e',
  'r',
  'e',
  '!',
]

export default function Intro({
  windowHeight,
}: {
  windowHeight: number | undefined
}) {
  return (
    <section
      className="section-wrapper flex flex-col justify-center"
      style={{ minHeight: windowHeight ? windowHeight + 'px' : '100vh' }}
    >
      <div className="content-container intro-container py-8 md:py-6">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="hello-there">
            {helloThere.map((char, i) => (
              <div
                key={char + i}
                style={{
                  fontSize: windowHeight
                    ? windowHeight / 7 - 2 + 'px'
                    : 'calc(100vh / 7) - 2px',
                  lineHeight: windowHeight
                    ? windowHeight / 7 - 2 + 'px'
                    : 'calc(100vh / 7) - 2px',
                }}
              >
                {char}
              </div>
            ))}
          </div>
          <div className="sm:basis-1/3 hidden lg:block" />
          <div className="intro-content sm:basis-1/2 lg:basis-1/3">
            <Image
              style={{ width: '35%' }}
              className="m-auto mb-6"
              unoptimized
              src="/images/animoji-1.png"
              alt="Prawsang Animoji"
              width={230}
              height={212}
            ></Image>
            <div>
              <h1 className="primary-header-text mb-3 text-center">
                Hello there! <br />
                My name is Prawsang.
              </h1>
              <p className="p-large">
                I am a frontend developer based in Bangkok, Thailand. With{' '}
                <b>{yearsSinceJanuary2020()} years</b> of experience in frontend
                development, I have worked in various organizations, focusing on
                a variety of industries, such as robotics, social media, and
                consultancy. Throughout the years, I have experience in a
                variety of libraries, frameworks, and tools, such as React and
                Angular.
              </p>
            </div>
          </div>
          <div className="md:basis-1/2 lg:basis-1/3 flex items-center">
            <div className="intro-content flex flex-col gap-5">
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
                <div className="flex gap-3 flex-wrap">
                  <Chip className="whitespace-nowrap">
                    English <span className="chip-sub-text">- Fluent</span>
                  </Chip>
                  <Chip className="whitespace-nowrap">
                    Thai <span className="chip-sub-text">- Native</span>
                  </Chip>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-4">
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
          <div className="md:basis-2/3 ">
            
            
          </div>
          <div className="hidden md:block md:basis-1/6"></div>
        </div> */}
      </div>
    </section>
  )
}
