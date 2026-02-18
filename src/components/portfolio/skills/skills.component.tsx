'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillsData } from './skills'
import { SkillCard } from './skill-card.component'

export const Skills = () => {
  const [selectedSectionId, setSelectedSectionId] = useState(skillsData[0].id)

  const activeSection = skillsData.find((s) => s.id === selectedSectionId)

  return (
    <section className="w-full py-20 lg:py-28" id="skills">
      {/* Section header */}
      <motion.div
        className="mb-10 lg:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center lg:text-left">
          Skills
        </h3>
        <p className="mt-3 text-base lg:text-lg text-muted-foreground text-center lg:text-left max-w-2xl">
          Technologies and principles I work with daily.
        </p>
      </motion.div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {skillsData.map((section) => {
          const isActive = selectedSectionId === section.id
          return (
            <button
              key={section.id}
              onClick={() => setSelectedSectionId(section.id)}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{
                color: isActive ? 'white' : 'hsl(var(--muted-foreground))',
              }}
            >
              {/* Sliding active indicator */}
              {isActive && (
                <motion.span
                  layoutId="active-skill-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(167,139,250,0.12))',
                    border: '1px solid rgba(167,139,250,0.25)',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{section.section}</span>
            </button>
          )
        })}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        {activeSection && (
          <motion.div
            key={activeSection.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4"
          >
            {activeSection.items.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
