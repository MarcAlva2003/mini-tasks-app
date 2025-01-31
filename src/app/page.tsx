'use client'

import { AboutMe } from "@/components/portfolio/about-me/about-me.component"
import { Introduction } from "@/components/portfolio/introduction/introduction.component"
import { ProjectsSection } from "@/components/portfolio/projects-section/projects-section.component"

export default function Home() {
  return <div className="">
    <Introduction/>
    <AboutMe/>
    <ProjectsSection/>
  </div>
}
