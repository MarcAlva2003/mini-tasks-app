'use client'

import { APP_ROUTES } from '@/constants/routes'
import { HeaderDesktopNavigation } from './header-desktop-navigation.component'
import { HeaderMobileNavigation } from './header-mobile-navigation.component'
import Link from 'next/link'
import { PAGE_PADDING } from '@/constants/fixed-styles'

export const Header = () => {
  return (
    <header className="w-full header-bg h-16 bg-slate-800 flex items-center justify-center shadow sticky top-0 relative z-20 lg:h-16">
      <div className={`header-container w-full max-w-[1440px] flex items-center justify-between ${PAGE_PADDING}`}>
        <div className="min-w-max text-slate-100">
          <Link href={APP_ROUTES.HOME} className="flex items-center">
            <p className='text-2xl'>ÁLVAREZ <b>MARCOS</b></p>
          </Link>
        </div>
        <div className="lg:hidden">
          <HeaderMobileNavigation />
        </div>
        <div className="hidden lg:block">
          <HeaderDesktopNavigation />
        </div>
      </div>
    </header>
  )
}
