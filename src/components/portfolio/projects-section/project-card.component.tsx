'use client'

import { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { IProjectData } from './projects'
import Image from 'next/image'
import Link from 'next/link'

interface IProjectCard {
  data: IProjectData
  index: number
}

export const ProjectCard = ({ data, index }: IProjectCard) => {
  const { cover, description, technologies, title, codeLink, projectLink } = data
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-500 hover:shadow-xl hover:shadow-primary/[0.04] hover:border-primary/20"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* ── Spotlight overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(320px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(167,139,250,0.07), transparent 60%)',
        }}
      />

      {/* ── Cover image ── */}
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <Image
          alt={title}
          src={cover}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle bottom fade into card body */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col p-4 lg:p-5">
        <h4 className="font-heading text-base lg:text-lg font-semibold text-foreground mb-1.5">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {technologies.map((tech: string) => (
            <span
              key={`pill-${tech}`}
              className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary/80 tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          {projectLink && (
            <Link
              href={projectLink}
              target={projectLink.includes('https') ? '_blank' : undefined}
              rel={projectLink.includes('https') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <BiLinkExternal size={15} />
              <span>Live</span>
            </Link>
          )}
          {codeLink && (
            <Link
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <FaGithub size={14} />
              <span>Code</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}
