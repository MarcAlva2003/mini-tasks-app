import { ProjectCard } from './project-card.component'
import { projectsData } from './projects'

export const ProjectsSection = () => {
  return (
    <section className="w-full h-[calc(100vh-64px)] flex flex-col justify-center">
      <div className="">
        <h3 className="text-[44px] font-semibold">Recent Projects</h3>
        <p className='text-sm leading-[24px] mb-8'>This is a list of recent projects I´ve collaborated on or I´ve done myself</p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {projectsData.map((item) => (
          <ProjectCard key={`project-${item.title}`} data={item}/>
        ))}
      </div>
    </section>
  )
}
