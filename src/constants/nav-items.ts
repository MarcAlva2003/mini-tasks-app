import { APP_ROUTES } from "./routes"
import { INavItem } from "@/interfaces/nav-items.interface"

export const navItemsList: INavItem[] = [
  {
    key: 'home',
    link: APP_ROUTES.HOME,
    name: 'Home',
    subitems: [],
    isUnfolded: false,
  },
  {
    key: 'about_us',
    link: APP_ROUTES.PROJECTS,
    name: 'Projects',
    subitems: [],
    isUnfolded: false,
  },
]

export const projectsNavItemsList: INavItem[] = [
  {
    
  }
]