import { INavItem, INavSubitem } from '@/interfaces/nav-items.interface'

import { IoChevronDownOutline } from 'react-icons/io5'
import Link from 'next/link'
import { navItemsList } from '@/constants/nav-items'

export const HeaderDesktopNavigation = () => {
  return (
    <div className="flex">
      {navItemsList.map((item: INavItem) => (
        <div key={`header-nav-desktop--${item.key}`} className="header-nav-desktop-button relative text-slate-100">
          <Link href={item.link} className="flex px-3 py-2 hover:opacity-90 items-center">
            {item.name}
            {item.subitems.length > 0 && <IoChevronDownOutline className="ml-1" />}
          </Link>
          {item.subitems.length > 0 && (
            <div className="header-dektop-subitem-list absolute top-[100%] right-0 pt-1 w-full">
              <div className="bg-slate-950 py-2 bounded flex flex-col">
                {item.subitems.map((subitem: INavSubitem) => (
                  <Link
                    href={subitem.link}
                    key={`header-desktop-nav-subitem-${subitem.key}`}
                    className="text-gray-50 hover:bg-slate-800 py-2 px-4 w-full text-start"
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
