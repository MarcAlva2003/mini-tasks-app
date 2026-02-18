'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './project-card.component'
import { projectsData } from './projects'

export const ProjectsSection = () => {
  return (
    <section
      className="w-full py-20 lg:py-28"
      id="projects"
    >
      {/* ── Section header ── */}
      <motion.div
        className="mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center lg:text-left">
          Main Projects
        </h3>
        <p className="mt-3 text-base lg:text-lg text-muted-foreground text-center lg:text-left max-w-2xl">
          A collection of projects I&apos;ve built professionally and as personal experiments.
        </p>
      </motion.div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {projectsData.map((item, i) => (
          <ProjectCard key={`project-${item.title}`} data={item} index={i} />
        ))}
      </div>
    </section>
  )
}
