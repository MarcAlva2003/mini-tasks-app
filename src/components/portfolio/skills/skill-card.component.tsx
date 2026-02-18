'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ISkill } from './skills'

interface ISkillCardProps {
  skill: ISkill
  index: number
}

const CIRCLE_SIZE = 80
const STROKE_BG = 2
const STROKE_FG = 4
const RADIUS = (CIRCLE_SIZE - STROKE_FG) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export const SkillCard = ({ skill, index }: ISkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const offset = CIRCUMFERENCE - (skill.level / 100) * CIRCUMFERENCE
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col items-center gap-3 rounded-xl border border-white/[0.06] p-4 lg:p-5 backdrop-blur-md"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Circular Progress */}
      <div className="relative" style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}>
        <svg
          width={CIRCLE_SIZE}
          height={CIRCLE_SIZE}
          className="-rotate-90"
          viewBox={`0 0 ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id={`grad-${skill.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#A78BFA" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={STROKE_BG}
          />

          {/* Progress circle */}
          <motion.circle
            cx={CIRCLE_SIZE / 2}
            cy={CIRCLE_SIZE / 2}
            r={RADIUS}
            fill="none"
            stroke={`url(#grad-${skill.id})`}
            strokeWidth={STROKE_FG}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            animate={{
              strokeDashoffset: isInView ? offset : CIRCUMFERENCE,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2 + index * 0.06,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </svg>

        {/* Center content: icon ↔ percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Icon (default) */}
          <motion.div
            className="text-muted-foreground"
            animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {Icon && <Icon size={26} />}
          </motion.div>

          {/* Percentage (hover) */}
          <motion.span
            className="absolute font-heading text-sm font-bold text-primary"
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {skill.level}%
          </motion.span>
        </div>
      </div>

      {/* Name */}
      <span className="text-xs lg:text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors duration-200 leading-tight">
        {skill.name}
      </span>
    </motion.div>
  )
}
