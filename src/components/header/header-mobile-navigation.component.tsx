'use client'

import './header.styles.css'

import { INavItem, INavSubitem } from '@/interfaces/nav-items.interface'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { navItemsList } from '@/constants/nav-items'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const HeaderMobileNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [navItems, setNavItems] = useState<INavItem[]>(navItemsList)
  const router = useRouter()

  const handleUnfold = (key: string) => {
    setNavItems(
      navItems.map((item) =>
        key !== item.key ? item : { ...item, isUnfolded: !item.isUnfolded }
      )
    )
  }

  const handleLink = (path: string) => {
    setMenuIsOpen(false)
    router.push(path)
  }

  const handleContact = () => {
    setMenuIsOpen(false)
    router.push('/#contact')
  }

  return (
    <div>
      {/* Hamburger / Close toggle */}
      <button
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="p-2 text-gray-300 hover:text-white transition-colors"
        aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
      >
        {menuIsOpen ? <IoMdClose size={22} /> : <RxHamburgerMenu size={22} />}
      </button>

      {/* Overlay */}
      <div
        onClick={() => setMenuIsOpen(false)}
        className="mobile-drawer-overlay fixed inset-0 top-16 bg-black/50 z-40"
        data-open={menuIsOpen}
      />

      {/* Drawer */}
      <div
        className="mobile-drawer fixed top-16 right-0 h-[calc(100vh-64px)] w-[240px] md:w-[280px] z-50 border-l border-border bg-card/95 backdrop-blur-xl"
        data-open={menuIsOpen}
      >
        <ul className="mt-3 px-2">
          {navItems.map((item: INavItem, index: number) => (
            <li key={`mobile-nav-item-${index}`}>
              {item.subitems.length ? (
                <div>
                  <button
                    className="w-full flex items-center justify-between py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                    onClick={() => handleUnfold(item.key)}
                  >
                    <span>{item.name}</span>
                    {!item.isUnfolded ? (
                      <IoChevronDownOutline className="text-xs" />
                    ) : (
                      <IoChevronUpOutline className="text-xs" />
                    )}
                  </button>
                  {item.isUnfolded && (
                    <ul className="ml-4 border-l border-border pl-2">
                      {item.subitems.map((subitem: INavSubitem) => (
                        <li key={`subitem-${subitem.key}`}>
                          <button
                            onClick={() => handleLink(subitem.link)}
                            className="w-full text-left py-2 px-3 text-sm text-gray-500 hover:text-white transition-colors"
                          >
                            {subitem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleLink(item.link)}
                  className="w-full flex items-center py-3 px-4 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Contact button in mobile drawer */}
        <div className="px-4 mt-4">
          <button
            onClick={handleContact}
            className="w-full py-2.5 rounded-full text-sm font-medium border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
