'use client'

import { ProjectsSidebar } from '@/components/projects/sidebar/projects-sidebar.component'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <ProjectsSidebar />
      <div className='py-10 px-6 w-full max-h-[calc(100vh-64px)]'>{children}</div>
    </div>
  )
}
