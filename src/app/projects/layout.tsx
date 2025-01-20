import { ProjectsSidebar } from '@/components/projects/sidebar/projects-sidebar.component'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex'>
      <ProjectsSidebar />
      {children}
    </div>
  )
}
