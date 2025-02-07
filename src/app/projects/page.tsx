'use client'

import { PROJECTS_ROUTES } from '@/constants/routes'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProjectsPage() {
  const router = useRouter()

  useEffect(() => {
    router.push(PROJECTS_ROUTES.AI_CHATBOX)
  }, [])

  return <div/>
}
