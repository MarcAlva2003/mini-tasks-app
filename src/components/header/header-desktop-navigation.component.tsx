'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { navItemsList } from '@/constants/nav-items'
import { INavItem, INavSubitem } from '@/interfaces/nav-items.interface'
import { IoChevronDownOutline } from 'react-icons/io5'

export const HeaderDesktopNavigation = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)

  return (
    <nav className="flex items-center gap-1">
      {navItemsList.map((item: INavItem) => (
        <div
          key={`header-nav-desktop--${item.key}`}
          className="header-nav-desktop-button relative"
          onMouseEnter={() => setHoveredKey(item.key)}
          onMouseLeave={() => setHoveredKey(null)}
        >
          <Link
            href={item.link}
            className="relative flex items-center px-4 py-2 text-sm font-medium tracking-wide text-gray-400 transition-colors duration-200 hover:text-white"
          >
            {item.name}
            {item.subitems.length > 0 && (
              <IoChevronDownOutline className="ml-1 text-xs" />
            )}

            {/* Animated underline */}
            {hoveredKey === item.key && (
              <motion.div
                className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #A78BFA, #8B5CF6)',
                }}
                layoutId="nav-underline"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              />
            )}
          </Link>

          {/* Dropdown for subitems */}
          {item.subitems.length > 0 && (
            <div className="header-dektop-subitem-list absolute top-full right-0 pt-2 w-full min-w-[160px]">
              <div className="rounded-lg border border-border bg-card/95 backdrop-blur-md py-1 shadow-xl shadow-black/20">
                {item.subitems.map((subitem: INavSubitem) => (
                  <Link
                    href={subitem.link}
                    key={`header-desktop-nav-subitem-${subitem.key}`}
                    className="block px-4 py-2 text-sm text-gray-400 transition-colors hover:text-white hover:bg-white/5"
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
