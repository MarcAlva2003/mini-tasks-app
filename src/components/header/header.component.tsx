'use client'

import { motion } from 'framer-motion'
import { APP_ROUTES } from '@/constants/routes'
import { HeaderDesktopNavigation } from './header-desktop-navigation.component'
import { HeaderMobileNavigation } from './header-mobile-navigation.component'
import Link from 'next/link'
import { PAGE_PADDING } from '@/constants/fixed-styles'

export const Header = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header-glass fixed top-0 left-0 right-0 z-50 w-full h-16">
      <div
        className={`h-full w-full max-w-[1440px] mx-auto flex items-center justify-between ${PAGE_PADDING}`}
      >
        {/* Logo — left */}
        <Link href={APP_ROUTES.HOME} className="flex items-center shrink-0">
          <span className="font-heading text-xl tracking-tight text-gray-300">
            ÁLVAREZ{' '}
            <span className="font-bold text-white">MARCOS</span>
          </span>
        </Link>

        {/* Desktop nav — center */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <HeaderDesktopNavigation />
        </div>

        {/* Contact button — right (desktop only) */}
        <div className="hidden lg:block shrink-0">
          <motion.button
            onClick={scrollToContact}
            className="group relative px-6 py-2 rounded-full text-sm font-medium border border-primary/40 text-primary overflow-hidden transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-primary/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
              }}
            />
            <span className="relative z-10">Contact</span>
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <HeaderMobileNavigation />
        </div>
      </div>
    </header>
  )
}
