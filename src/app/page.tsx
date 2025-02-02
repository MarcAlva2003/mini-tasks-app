'use client'

import { AboutMe } from '@/components/portfolio/about-me/about-me.component'
import { Introduction } from '@/components/portfolio/introduction/introduction.component'
import { ProjectsSection } from '@/components/portfolio/projects-section/projects-section.component'
import { SectionComponent } from '@/components/portfolio/contact/contact-section.component'
import { Skills } from '@/components/portfolio/skills/skills.component'
import { SkillsContextProvider } from '@/components/portfolio/skills/skills.context'

export default function Home() {
  return (
    <div className="md:px-10 lg:px-20">
      <Introduction />
      <AboutMe />
      <ProjectsSection />
      <SkillsContextProvider>
        <Skills />
      </SkillsContextProvider>
      <SectionComponent />
    </div>
  )
}
