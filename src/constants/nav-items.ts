import { APP_ROUTES, PROJECTS_ROUTES } from './routes'

import { INavItem } from '@/interfaces/nav-items.interface'

export const navItemsList: INavItem[] = [
  {
    key: 'home',
    link: APP_ROUTES.HOME,
    name: 'Home',
    subitems: [],
    isUnfolded: false
  },
  {
    key: 'projects',
    link: `${APP_ROUTES.HOME}#projects`,
    name: 'Projects',
    subitems: [],
    isUnfolded: false
  },
  {
    key: 'skills',
    link: `${APP_ROUTES.HOME}#skills`,
    name: 'Skills',
    subitems: [],
    isUnfolded: false
  },
  {
    key: 'about-me',
    link: `${APP_ROUTES.HOME}#about-me`,
    name: 'About Me',
    subitems: [],
    isUnfolded: false
  },
]

export const projectsNavItemsList: INavItem[] = [
  {
    key: 'ai-chatbox',
    link: PROJECTS_ROUTES.AI_CHATBOX,
    name: 'AI Chatbox',
    subitems: [],
    isUnfolded: false
  },
]
