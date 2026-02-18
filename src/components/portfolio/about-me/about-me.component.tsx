'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/* ─────────────────────── Timeline Data ─────────────────────── */

const milestones = [
  {
    title: 'Technical Stack & Experience',
    description:
      'Frontend Developer with +3 years of professional experience building scalable web and mobile applications using React, Next.js, and React Native with TypeScript. Strong focus on clean architecture, component reusability, and maintainable code following SOLID, KISS, and DRY principles.',
    label: '01',
  },
  {
    title: 'Goals & Aspirations',
    description:
      'Driven to grow into a Full-Stack Developer by deepening backend knowledge and building end-to-end applications prioritizing software quality, scalability, and improving both technical and product understanding.',
    label: '02',
  },
  {
    title: 'Soft Skills & Approach',
    description:
      'Curious, analytical, and highly adaptable. Proactive problem-solver who enjoys debugging, researching, and validating solutions. Clear communicator and team-oriented — values collaboration, constructive feedback, and shared growth.',
    label: '03',
  },
  {
    title: 'AI Implementation',
    description:
      'I leverage the potential of Claude Code as my primary development AI assistant. My methodology is centered on generating context, comprehensive technical documentation and precise specifications that enable AI agents to execute complex tasks with maximum accuracy. This approach significantly accelerates delivery timelines while consistently elevating code quality and architectural standards.',
    label: '04',
  },
]

/* ─────────────────── Pulsing Dot Component ──────────────────── */

const TimelineDot = ({ index }: { index: number }) => (
  <motion.div
    className="relative z-10 flex items-center justify-center"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{
      duration: 0.5,
      delay: index * 0.15,
      ease: [0.25, 0.1, 0.25, 1],
    }}
  >
    {/* Outer glow pulse */}
    <motion.div
      className="absolute w-8 h-8 rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)',
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 0.2, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.4,
      }}
    />
    {/* Core dot */}
    <div
      className="w-3.5 h-3.5 rounded-full border-2 border-background"
      style={{
        background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
        boxShadow: '0 0 12px rgba(139,92,246,0.5)',
      }}
    />
  </motion.div>
)

/* ─────────────────── Timeline Card Component ────────────────── */

const TimelineCard = ({
  title,
  description,
  label,
  index,
  side,
}: {
  title: string
  description: string
  label: string
  index: number
  side: 'left' | 'right'
}) => {
  const xOffset = side === 'left' ? -40 : 40

  return (
    <motion.div
      className="rounded-xl border border-white/[0.06] p-5 lg:p-6 backdrop-blur-md"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.008))',
      }}
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: 0.1 + index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Label number */}
      <span className="font-heading text-xs font-bold tracking-widest text-primary/50 uppercase">
        {label}
      </span>

      <h4 className="font-heading text-lg lg:text-xl font-semibold text-foreground mt-2 mb-3">
        {title}
      </h4>
      <p className="text-sm lg:text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  )
}

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */

export const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.7'],
  })

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} id="about-me" className="py-20 lg:py-28">
      {/* Section header */}
      <motion.div
        className="mb-14 lg:mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center lg:text-left">
          About Me
        </h3>
        <p className="mt-3 text-base lg:text-lg text-muted-foreground text-center lg:text-left max-w-2xl">
          A quick look at my journey, goals, and how I work.
        </p>
      </motion.div>

      {/* ── Timeline ── */}
      <div className="relative">
        {/* ── Growing vertical line ── */}
        {/* Mobile: left-aligned (left-4). Desktop: centered (left-1/2) */}
        <div className="absolute top-0 bottom-0 left-4 lg:left-1/2 lg:-translate-x-1/2 w-px">
          {/* Background track */}
          <div className="absolute inset-0 bg-border/30" />
          {/* Animated fill */}
          <motion.div
            className="absolute inset-x-0 top-0 bottom-0 origin-top"
            style={{
              scaleY: lineScaleY,
              background: 'linear-gradient(180deg, #8B5CF6, #A78BFA)',
            }}
          />
        </div>

        {/* ── Milestone items ── */}
        <div className="flex flex-col gap-16 lg:gap-20">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={milestone.label}
                className="relative grid items-center"
                style={{
                  /* Mobile: icon at left, card fills right.
                     Desktop: two equal columns with dot centered between them */
                  gridTemplateColumns: '32px 1fr',
                  gap: '16px',
                }}
              >
                {/* ── Desktop layout uses CSS to reposition ── */}
                <div className="hidden lg:grid lg:absolute lg:inset-0" style={{
                  gridTemplateColumns: '1fr 40px 1fr',
                  gap: '24px',
                }}>
                  {/* Left card area */}
                  <div className={`flex items-center ${isEven ? '' : 'order-3'}`}>
                    {isEven && (
                      <TimelineCard
                        title={milestone.title}
                        description={milestone.description}
                        label={milestone.label}
                        index={index}
                        side="left"
                      />
                    )}
                    {!isEven && (
                      <TimelineCard
                        title={milestone.title}
                        description={milestone.description}
                        label={milestone.label}
                        index={index}
                        side="right"
                      />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="flex items-center justify-center order-2">
                    <TimelineDot index={index} />
                  </div>

                  {/* Right card area */}
                  <div className={`flex items-center ${isEven ? 'order-3' : ''}`}>
                    {!isEven && null}
                    {isEven && null}
                  </div>
                </div>

                {/* ── Mobile layout (always visible, hidden on lg) ── */}
                <div className="flex items-start justify-center lg:hidden pt-1">
                  <TimelineDot index={index} />
                </div>
                <div className="lg:hidden">
                  <TimelineCard
                    title={milestone.title}
                    description={milestone.description}
                    label={milestone.label}
                    index={index}
                    side="right"
                  />
                </div>

                {/* Desktop invisible spacer to maintain row height */}
                <div className="hidden lg:block col-span-2" style={{ minHeight: '140px' }} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
