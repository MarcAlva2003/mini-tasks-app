'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactInfo, links } from './contact-info'
import Link from 'next/link'
import { sendMessage } from './contac.services'
import { useForm } from 'react-hook-form'

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

/* ─────────────────── Reusable Input Component ───────────────── */

interface InputFieldProps {
  label: string
  error?: string
  multiline?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registration: any
  onChangeExtra?: () => void
}

const InputField = ({
  label,
  error,
  multiline,
  registration,
  onChangeExtra,
}: InputFieldProps) => {
  const baseClasses =
    'w-full rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 focus:shadow-[0_0_12px_rgba(139,92,246,0.1)]'
  const errorClasses = error
    ? 'border-red-500/50'
    : 'border-border hover:border-border/80'

  const props = {
    ...registration,
    placeholder: label,
    className: `${baseClasses} ${errorClasses}`,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      registration.onChange(e)
      onChangeExtra?.()
    },
  }

  return (
    <div className="mb-3">
      {multiline ? (
        <textarea {...props} rows={4} />
      ) : (
        <input {...props} type="text" />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            className="mt-1.5 text-xs text-red-400"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ══════════════════════ MAIN COMPONENT ══════════════════════ */

export const SectionComponent = () => {
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    clearErrors,
    reset,
  } = useForm<Inputs>()

  const [successSubmit, setSuccessSubmit] = useState(false)
  const [errorSubmit, setErrorSubmit] = useState(false)

  const onSubmit = async () => {
    const isValid = await trigger()
    if (isValid) {
      sendMessage(getValues()).then((res) => {
        if (res?.ok) {
          setSuccessSubmit(true)
          setErrorSubmit(false)
          reset()
        } else {
          setErrorSubmit(true)
          setSuccessSubmit(false)
        }
      })
    }
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const nameTextPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
  const simpleTextPattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s0-9]+$/

  return (
    <motion.section
      className="pb-20 pt-20 lg:pt-28"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Header */}
      <div className="mb-12 lg:mb-16">
        <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center lg:text-left">
          Contact Me
        </h3>
        <p className="mt-3 text-base lg:text-lg text-muted-foreground text-center lg:text-left max-w-2xl">
          Have a project in mind or just want to say hi? Let&apos;s talk.
        </p>
      </div>

      <div className="lg:flex lg:gap-12 xl:gap-16">
        {/* ── Left: Contact info ── */}
        <div className="mb-10 lg:mb-0 lg:w-[35%] shrink-0">
          <div className="space-y-5 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <p className="text-xs font-medium tracking-widest uppercase text-primary/60 mb-1">
                  {info.title}
                </p>
                <p className="text-sm text-foreground">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {links.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="lg:flex-1">
          <form>
            <InputField
              label="Name *"
              error={errors.name?.message}
              registration={register('name', {
                required: { value: true, message: 'Name is required' },
                maxLength: { value: 50, message: 'Name must be less than 50 characters' },
                minLength: { value: 3, message: 'Name must be at least 3 characters' },
                pattern: { value: nameTextPattern, message: 'No special characters or numbers allowed' },
              })}
              onChangeExtra={() => clearErrors('name')}
            />
            <InputField
              label="Email *"
              error={errors.email?.message}
              registration={register('email', {
                required: { value: true, message: 'Email is required' },
                pattern: { value: emailPattern, message: 'Please enter a valid email' },
              })}
              onChangeExtra={() => clearErrors('email')}
            />
            <InputField
              label="Subject *"
              error={errors.subject?.message}
              registration={register('subject', {
                required: { value: true, message: 'Subject is required' },
                maxLength: { value: 250, message: 'Subject must be less than 250 characters' },
                minLength: { value: 3, message: 'Subject must be at least 3 characters' },
                pattern: { value: simpleTextPattern, message: 'No special characters allowed' },
              })}
              onChangeExtra={() => clearErrors('subject')}
            />
            <InputField
              label="Message *"
              error={errors.message?.message}
              multiline
              registration={register('message', {
                required: { value: true, message: 'Message is required' },
                maxLength: { value: 3000, message: 'Message must be less than 3000 characters' },
                minLength: { value: 3, message: 'Message must be at least 3 characters' },
                pattern: { value: simpleTextPattern, message: 'No special characters allowed' },
              })}
              onChangeExtra={() => clearErrors('message')}
            />

            {/* Feedback messages */}
            <AnimatePresence>
              {successSubmit && (
                <motion.p
                  className="text-green-400 text-sm mb-3"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {errorSubmit && (
                <motion.p
                  className="text-red-400 text-sm mb-3"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <motion.button
              type="button"
              onClick={onSubmit}
              className="group relative mt-2 px-8 py-3 rounded-full font-heading text-sm font-semibold tracking-wide text-white overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 24px rgba(139,92,246,0.3)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  )
}
