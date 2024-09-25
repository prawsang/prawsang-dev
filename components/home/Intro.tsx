import Image from 'next/image'
import Chip from '@/components/common/Chip'

export default function Intro() {
  return (
    <section>
      <div className="content-container">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:basis-1/5 text-center">
            <Image
              className="m-auto"
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
                Bangkok, Thailand. With 4 years of experience in frontend
                development, I have worked in various organizations, focusing on
                a variety of industries, such as robotics, social media, and
                consultancy. Throughout the years, I have experience in a
                variety of libraries, frameworks, and tools, such as React and
                Angular.
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
