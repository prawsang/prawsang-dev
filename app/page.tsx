import Homepage from '@/components/pages/Homepage'
import { SITE_CONTENT } from '@/constants/SiteContent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prawsang | A Frontend Developer',
  description: 'A frontend developer based in Bangkok.',
}

export default function Home() {
  return (
    <>
      <Homepage />
      <div style={{ height: '0', overflow: 'hidden' }}>
        {/* preload content for bots */}
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
    </>
  )
}
