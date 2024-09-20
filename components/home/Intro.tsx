import Image from 'next/image'
import Chip from '../common/Chip'

export default function Intro() {
  return (
    <section>
      <div className="content-container">
        <div className="flex gap-3">
          <div className="basis-1/4">
            <Image
              unoptimized
              src="/images/animoji-1.png"
              alt="Prawsang Animoji"
              width={313}
              height={288}
            ></Image>
          </div>
          <div className="basis-1/2 flex flex-col gap-5">
            <div>
              <h1 className="primary-header-text mb-3">Hello there!</h1>
              <p>
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
              <h3 className="primary-header-text mb-3">Languages</h3>
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
          <div className="basis-1/4"></div>
        </div>
      </div>
    </section>
  )
}
