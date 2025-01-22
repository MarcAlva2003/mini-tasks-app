import { useMemo, useState } from 'react'

import { INavItem } from '@/interfaces/nav-items.interface'
import Link from 'next/link'
import { TextField } from '@mui/material'
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
    <div className="h-[calc(100vh-64px)] w-[240px] max-w-[240px] min-w-[240px] border-r border-slate-800 text-slate-100 pr-4 hidden md:visible">
      <h2 className="text pt-10 pb-4">PROJECTS</h2>
      <div className="w-full mb-2">
        <TextField
          className="w-full"
          variant="filled"
          label="Search project"
          size="small"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="">
        {!filteredItems.length ? (
          <p className="text-slate-500 text-base ">No projects found</p>
        ) : (
          filteredItems.map((item: INavItem) => {
            return (
              <Link href={item.link} key={`${item.key}-project-link`}>
                <div
                  className={`px-3 py-2 rounded-[4px] mb-1 ${
                    item.link === pathname ? 'bg-slate-700 bg-opacity-30 text-blue-300' : 'text-slate-300'
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
