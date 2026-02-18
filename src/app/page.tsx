'use client'

import { AboutMe } from '@/components/portfolio/about-me/about-me.component'
import { Introduction } from '@/components/portfolio/introduction/introduction.component'
import { ProjectsSection } from '@/components/portfolio/projects-section/projects-section.component'
import { SectionComponent } from '@/components/portfolio/contact/contact-section.component'
import { Skills } from '@/components/portfolio/skills/skills.component'

export default function Home() {
  return (
    <div>
      <Introduction />
      <ProjectsSection />
      <Skills />
      <AboutMe />
      <SectionComponent />
    </div>
  )
}
