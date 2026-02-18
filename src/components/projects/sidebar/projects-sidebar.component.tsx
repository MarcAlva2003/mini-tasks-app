'use client'

import { useMemo, useState } from 'react'

import { INavItem } from '@/interfaces/nav-items.interface'
import Link from 'next/link'
import { projectsNavItemsList } from '@/constants/nav-items'
import { usePathname } from 'next/navigation'

export const ProjectsSidebar = () => {
  const pathname = usePathname()
  const [search, setSearch] = useState<string>('')

  const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.target.value)
  }

  const filteredItems: INavItem[] = useMemo(() => {
    if (!search) {
      return projectsNavItemsList
    }

    const filtroNormalizado = search
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

    return projectsNavItemsList.filter((item) => {
      const formattedItemName = item.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
      const formattedKey = item.key
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')

      const nombreCoincide =
        formattedItemName.localeCompare(filtroNormalizado, undefined, { sensitivity: 'base' }) === 0 ||
        formattedItemName.includes(filtroNormalizado)
      const claveCoincide =
        formattedKey.localeCompare(filtroNormalizado, undefined, { sensitivity: 'base' }) === 0 ||
        formattedKey.includes(filtroNormalizado)

      return nombreCoincide || claveCoincide
    })
  }, [search])

  return (
    <div className="h-[calc(100vh-64px)] w-[240px] max-w-[240px] min-w-[240px] border-r border-border text-foreground pr-4 hidden md:block">
      <h2 className="font-heading pt-10 pb-4 text-sm tracking-widest uppercase text-muted-foreground">Projects</h2>
      <div className="w-full mb-3">
        <input
          type="text"
          placeholder="Search project..."
          className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        {!filteredItems.length ? (
          <p className="text-muted-foreground text-sm">No projects found</p>
        ) : (
          filteredItems.map((item: INavItem) => {
            return (
              <Link href={item.link} key={`${item.key}-project-link`}>
                <div
                  className={`px-3 py-2 rounded-md mb-1 text-sm transition-colors ${
                    item.link === pathname
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}
