import './globals.scss'
import { Syne } from 'next/font/google'
import { ThemeContextProvider } from '@/contexts/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import { ClickEventContextProvider } from '@/contexts/ClickEventContext'
import ClickEventProvider from '@/providers/ClickEventProvider'
import { SITE_CONTENT } from '@/constants/SiteContent'

const syne = Syne({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.className}`}>
        <ThemeContextProvider>
          <ClickEventContextProvider>
            <ThemeProvider>
              <ClickEventProvider>{children}</ClickEventProvider>
            </ThemeProvider>
          </ClickEventContextProvider>
        </ThemeContextProvider>

        {/* preload content for bots */}
        <div
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
          }}
        >
          <h1>{SITE_CONTENT.bio.title}</h1>
          <p>{SITE_CONTENT.bio.description}</p>
          <h2>{SITE_CONTENT.bio.education.institution}</h2>
          <p>{SITE_CONTENT.bio.education.degree}</p>
          <p>{SITE_CONTENT.bio.education.description}</p>
          {SITE_CONTENT.bio.languages.map((language, index) => (
            <div key={index}>
              <h3>{language.name}</h3>
              <p>{language.level}</p>
            </div>
          ))}
          <h1>Featured Projects</h1>
          {SITE_CONTENT.featuredProjects.map((project, index) => (
            <div key={index}>
              <h2>{project.title}</h2>
              <p>{project.content}</p>
            </div>
          ))}
          <h1>Other Projects</h1>
          {SITE_CONTENT.projects.map((project, index) => (
            <div key={index}>
              <h2>{project.header}</h2>
              <p>{project.text}</p>
            </div>
          ))}
          <h1>Skills</h1>
          {SITE_CONTENT.skills.map((skill, index) => (
            <div key={index}>
              <h2>{skill.header}</h2>
              {skill.skills.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
          ))}
          <h1>Job Experience</h1>
          {SITE_CONTENT.jobExperiences.map((job, index) => (
            <div key={index}>
              <h2>{job.company}</h2>
              <p>{job.position}</p>
              <p>{job.description}</p>
            </div>
          ))}
          <h1>Contact</h1>
          <p>{SITE_CONTENT.contact.email}</p>
          <p>{SITE_CONTENT.contact.linkedIn}</p>
          <p>{SITE_CONTENT.contact.github}</p>
        </div>
      </body>
    </html>
  )
}
