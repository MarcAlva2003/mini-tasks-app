'use client'

import { ProjectsSidebar } from '@/components/projects/sidebar/projects-sidebar.component'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <ProjectsSidebar />
      <div className='py-6 lg:py-10 px-1 lg:px-6 w-full h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]'>{children}</div>
    </div>
  )
}
