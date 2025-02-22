import { ProjectCard } from './project-card.component'
import { projectsData } from './projects'

export const ProjectsSection = () => {
  return (
    <section className="w-full pt-20 lg:mt-0 lg:min-h-[calc(100vh-64px)] flex flex-col justify-center" id='projects'>
      <div className="">
        <h3 className="text-[44px] font-semibold text-center lg:text-left mb-4 lg:mb-0">Projects</h3>
        <p className='text-lg leading-[24px] mb-12 lg:mb-8 md:text-center lg:text-left'>This is a list of some projects I´ve collaborated on or I´ve done myself professionally or as a practice</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {projectsData.map((item) => (
          <ProjectCard key={`project-${item.title}`} data={item}/>
        ))}
      </div>
    </section>
  )
}
