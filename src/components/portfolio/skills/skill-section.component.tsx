import { ISkillSection } from './skills'
import { SkillsCard } from './skill-card.component,'

interface ISkillSectionComponent {
  section: ISkillSection
}

export const SkillSection = (props: ISkillSectionComponent) => {
  const { section } = props

  return (
    <div key={section.section} className="bg-slate-800 p-4 mt-8 rounded-[12px]">
      <h2 className="text-xl font-semibold mb-2">{section.section}</h2>
      {section.items.map((skill) => (
        <div key={skill.name}>
          <SkillsCard skill={skill} />
        </div>
      ))}
    </div>
  )
}
