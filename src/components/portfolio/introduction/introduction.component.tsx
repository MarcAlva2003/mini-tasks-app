'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineArrowDown } from 'react-icons/hi'
import Link from 'next/link'

/* ───────────────────────── 3D Floating Shapes ───────────────────────── */

const FloatingShapes = () => {
  const prefersReduced = useReducedMotion()

  const shapes = [
    // Large torus-like ring — top right
    {
      className:
        'w-44 h-44 lg:w-64 lg:h-64 rounded-full border-[6px] lg:border-[8px] border-transparent',
      style: {
        background:
          'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(167,139,250,0.05))',
        borderImage: 'linear-gradient(135deg, #A78BFA44, #8B5CF622) 1',
        boxShadow: '0 0 60px rgba(139,92,246,0.08), inset 0 0 40px rgba(139,92,246,0.04)',
      },
      position: 'top-[5%] right-[5%] lg:top-[8%] lg:right-[10%]',
      animate: {
        rotateX: [0, 25, 0, -15, 0],
        rotateY: [0, -30, 0, 20, 0],
        y: [0, -20, 0, 15, 0],
      },
      duration: 18,
    },
    // Floating sphere — center right
    {
      className: 'w-28 h-28 lg:w-40 lg:h-40 rounded-full',
      style: {
        background:
          'radial-gradient(circle at 35% 30%, rgba(167,139,250,0.25), rgba(139,92,246,0.08) 50%, rgba(15,15,20,0.4) 100%)',
        boxShadow:
          '0 0 80px rgba(139,92,246,0.12), inset 0 -20px 40px rgba(0,0,0,0.3)',
      },
      position: 'top-[35%] right-[15%] lg:top-[30%] lg:right-[18%]',
      animate: {
        rotateX: [0, -20, 0, 10, 0],
        rotateY: [0, 15, 0, -25, 0],
        y: [0, 25, 0, -18, 0],
        scale: [1, 1.04, 1, 0.97, 1],
      },
      duration: 14,
    },
    // Small cube-ish shape — bottom right
    {
      className: 'w-16 h-16 lg:w-24 lg:h-24 rounded-xl',
      style: {
        background:
          'linear-gradient(135deg, rgba(167,139,250,0.2), rgba(139,92,246,0.06))',
        boxShadow: '0 0 40px rgba(139,92,246,0.06)',
        border: '1px solid rgba(167,139,250,0.1)',
      },
      position: 'bottom-[25%] right-[8%] lg:bottom-[20%] lg:right-[12%]',
      animate: {
        rotateX: [0, 35, 0, -20, 0],
        rotateY: [0, -40, 0, 35, 0],
        rotateZ: [0, 15, 0, -10, 0],
        y: [0, -15, 0, 20, 0],
      },
      duration: 12,
    },
    // Tiny accent dot — floating freely
    {
      className: 'w-6 h-6 lg:w-8 lg:h-8 rounded-full',
      style: {
        background: 'radial-gradient(circle, #A78BFA55, #8B5CF622)',
        boxShadow: '0 0 20px rgba(167,139,250,0.15)',
      },
      position: 'top-[55%] right-[40%] lg:top-[50%] lg:right-[35%]',
      animate: {
        y: [0, -30, 0, 20, 0],
        x: [0, 10, 0, -8, 0],
        scale: [1, 1.3, 1, 0.8, 1],
      },
      duration: 10,
    },
    // Medium diamond — upper middle area
    {
      className: 'w-12 h-12 lg:w-16 lg:h-16 rounded-lg',
      style: {
        background:
          'linear-gradient(45deg, rgba(139,92,246,0.18), rgba(167,139,250,0.04))',
        border: '1px solid rgba(167,139,250,0.08)',
        transform: 'rotate(45deg)',
      },
      position: 'top-[15%] right-[38%] lg:top-[18%] lg:right-[32%]',
      animate: {
        rotateZ: [45, 90, 45, 0, 45],
        y: [0, 18, 0, -12, 0],
      },
      duration: 16,
    },
    // Elongated pill — bottom left of shape area
    {
      className: 'w-20 h-8 lg:w-32 lg:h-10 rounded-full',
      style: {
        background:
          'linear-gradient(90deg, rgba(167,139,250,0.12), rgba(139,92,246,0.04))',
        border: '1px solid rgba(167,139,250,0.06)',
      },
      position: 'bottom-[35%] right-[30%] lg:bottom-[32%] lg:right-[25%]',
      animate: {
        rotateZ: [0, 8, 0, -5, 0],
        y: [0, -10, 0, 14, 0],
        x: [0, -8, 0, 6, 0],
      },
      duration: 20,
    },
  ]

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: '1200px' }}
    >
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.position} ${shape.className}`}
          style={{ ...shape.style, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={
            prefersReduced
              ? { opacity: 1, scale: 1 }
              : {
                opacity: 1,
                scale: 1,
                ...shape.animate,
              }
          }
          transition={{
            opacity: { duration: 1.2, delay: 0.4 + i * 0.15 },
            scale: { duration: 1.2, delay: 0.4 + i * 0.15 },
            ...(prefersReduced
              ? {}
              : {
                rotateX: {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotateY: {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotateZ: {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                y: {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                x: {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }),
          }}
        />
      ))}
    </div>
  )
}

/* ───────────────────── Staggered Text Reveal ────────────────────── */

const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
}

const StaggeredTitle = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => (
  <span className={`inline-flex flex-wrap ${className ?? ''}`}>
    {text.split(' ').map((word, i) => (
      <motion.span
        key={`${word}-${i}`}
        className="mr-[0.25em] inline-block"
        custom={i}
        variants={wordReveal}
        initial="hidden"
        animate="visible"
      >
        {word}
      </motion.span>
    ))}
  </span>
)

/* ───────────────────────── Background Mesh ──────────────────────── */

const BackgroundMesh = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    {/* Top-right purple glow */}
    <motion.div
      className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    {/* Bottom-left subtle glow */}
    <motion.div
      className="absolute -bottom-[20%] -left-[15%] w-[50vw] h-[50vw] rounded-full"
      style={{
        background:
          'radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 60%)',
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    {/* Noise grain overlay */}
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
)

/* ───────────────────────── Scroll Indicator ──────────────────────── */

const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2, duration: 0.8 }}
  >
    <motion.div
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      className="flex flex-col items-center text-muted-foreground/50"
    >
      <IoIosArrowDown size={22} className="mb-[-10px]" />
      <IoIosArrowDown size={22} />
    </motion.div>
  </motion.div>
)

/* ═══════════════════════════ MAIN COMPONENT ═══════════════════════════ */

export const Introduction = () => {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv/CV_Alvarez_Marcos_Frontend_Developer.pdf'
    link.download = 'CV_Alvarez_Marcos_Frontend_Developer.pdf'
    link.click()
  }

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col justify-center py-10 lg:py-20 overflow-hidden">
      <BackgroundMesh />
      <FloatingShapes />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        {/* ── Text content ── */}
        <div className="lg:w-[55%] xl:w-[50%]">
          <div className="text-center lg:text-left">
            {/* Name */}
            <motion.p
              className="font-heading text-lg lg:text-xl tracking-widest uppercase text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Álvarez Marcos
            </motion.p>

            {/* Main title */}
            <h1 className="font-heading font-bold leading-[0.95] tracking-tight text-[clamp(3rem,8vw,6rem)]">
              <StaggeredTitle
                text="FRONTEND"
                className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              />
              <StaggeredTitle
                text="DEVELOPER"
                className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              />
            </h1>

            {/* Description */}
            <motion.p
              className="mt-6 lg:mt-8 text-base lg:text-lg leading-relaxed text-muted-foreground max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="text-primary font-medium">+3 years</span> of
              experience crafting clean, scalable interfaces for web aplications
              — specializing in{' '}
              <span className="text-primary font-medium">Next.js</span> and{' '}
              <span className="text-primary font-medium">TypeScript</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mt-8 lg:mt-10"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {/* Primary — Download CV */}
              <motion.button
                onClick={downloadCV}
                className="group relative px-8 py-3.5 rounded-full font-heading text-sm font-semibold tracking-wide text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    '0 0 30px rgba(139,92,246,0.35), 0 0 60px rgba(139,92,246,0.15)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <HiOutlineArrowDown className="text-base" />
                  Download CV
                </span>
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </motion.button>

              {/* Secondary — Projects */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#projects"
                  className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-medium tracking-wide border border-border text-muted-foreground hover:text-white hover:border-primary/40 transition-colors duration-300"
                >
                  Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Right side spacer for shape area on desktop ── */}
        <div className="hidden lg:block lg:w-[45%] xl:w-[50%]" aria-hidden />
      </div>

      <ScrollIndicator />
    </section>
  )
}
