import { Chip } from '@mui/material'
import Image from 'next/image'
import { SkillSection } from './skill-section.component'
import { SkillsContext } from './skills.context'
import skillAnimation from '@/assets/lottie/skills-animation.gif'
import { skillsData } from './skills'
import { useContext } from 'react'
import { useState } from 'react'

export const Skills = () => {
  const [selectedSkillSection, setSelectedSkillSection] = useState<string>(skillsData[0].id)
  const { setSelectedId } = useContext(SkillsContext)

  const handleChangeSection = (sectionId: string) => {
    setSelectedId(undefined)
    setSelectedSkillSection(sectionId)
  }

  return (
    <section className="w-full lg:flex lg:items-start pt-[180px] lg:justify-between" id="skills">
      <div className="mr-[200px] flex justify-center mt-10 hidden lg:block">
        <Image src={skillAnimation} height={350} width={350} alt={`Intro animation`} unoptimized={true} />
      </div>
      <div className="lg:w-[65%]">
        <h3 className="text-[44px] font-semibold mb-8">Skills</h3>
        <div className="flex flex-wrap">
          {skillsData.map((section, index) => (
            <div key={`skill-section-chip-${index}`} className="mr-2 mb-2">
              <Chip
                label={section.section}
                variant={selectedSkillSection === section.id ? 'filled' : 'outlined'}
                clickable
                onClick={() => {
                  handleChangeSection(section.id)
                }}
              />
            </div>
          ))}
        </div>
        <div>
          {skillsData.map((section, index) => (
            <div key={`skill-section-${index}`} className={selectedSkillSection === section.id ? '' : 'hidden'}>
              <SkillSection section={section} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
