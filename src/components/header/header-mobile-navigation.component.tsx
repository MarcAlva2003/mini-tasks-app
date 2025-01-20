import './header.styles.css'

import { INavItem, INavSubitem } from '@/interfaces/nav-items.interface'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

import { IconButton } from '@mui/material'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import clsx from 'clsx'
import { navItemsList } from '@/constants/nav-items'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const HeaderMobileNavigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [navItems, setNavItems] = useState<INavItem[]>(navItemsList)

  const menuBgOpenStyles = clsx({
    'bg-mobile-nav-open': menuIsOpen,
    'bg-mobile-nav-closed': !menuIsOpen
  })
  const menuNavOpenStyles = clsx({
    'mobile-nav-open': menuIsOpen,
    'mobile-nav-closed': !menuIsOpen
  })

  const handleUnfold = (key: string) => {
    setNavItems(
      navItems.map((item) => {
        return key !== item.key
          ? item
          : {
              ...item,
              isUnfolded: !item.isUnfolded
            }
      })
    )
  }

  const router = useRouter()
  const handleLink = (path: string) => {
    setMenuIsOpen(false)
    router.push(path)
  }

  return (
    <div>
      <IconButton
        onClick={() => {
          setMenuIsOpen(!menuIsOpen)
        }}
      >
        {menuIsOpen ? <IoMdClose /> : <RxHamburgerMenu />}
      </IconButton>
      <button
        onClick={() => {
          setMenuIsOpen(false)
        }}
        className={`absolute hedaer-mobile-nav-bg bg-slate-950 w-full transition-opacity h-[calc(100vh-64px)] left-0 top-[100%] opacity-0 ${menuBgOpenStyles}`}
      ></button>
      <div className={`hedaer-mobile-nav absolute top-[100%] h-[calc(100vh-64px)] bg-slate-200 ${menuNavOpenStyles}`}>
        <ul className="text-slate-600 mt-2">
          {navItems.map((item: INavItem, index: number) => (
            <li key={`mobile-nav-item-${index}`} className="w-full">
              {item.subitems.length ? (
                <div>
                  <button
                    className="w-full"
                    onClick={() => {
                      handleUnfold(item.key)
                    }}
                  >
                    <div className="link flex items-center py-2 px-4">
                      {item.icon && <div className="mr-3">{item.icon}</div>}
                      <p>{item.name}</p>
                      <div className="mr-0 ml-auto">
                        {!item.isUnfolded ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
                      </div>
                    </div>
                  </button>
                  {item.isUnfolded && (
                    <ul className="ml-4 border-l border-solid border-slate-300">
                      {item.subitems.map((subitem: INavSubitem) => {
                        return (
                          <li className="w-full py-1 pl-4" key={`subitem-${subitem.key}`}>
                            <button
                              onClick={() => {
                                handleLink(subitem.link)
                              }}
                            >
                              <p className="text-[16px]">{subitem.name}</p>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleLink(item.link)
                  }}
                >
                  <div className="link flex items-center py-2 px-4">
                    {item.icon && <div className="mr-3">{item.icon}</div>}
                    <p>{item.name}</p>
                  </div>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
