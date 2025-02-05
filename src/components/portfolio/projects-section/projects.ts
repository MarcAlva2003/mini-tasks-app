import { APP_ROUTES } from '@/constants/routes'
import miniProjectsApp from '@/assets/project-covers/mini-tasks-app.png'
import quizzGameApp from '@/assets/project-covers/quizz-game-cover.png'
import tecsopelSAApp from '@/assets/project-covers/tecsopelsa-cover.png'

export interface IProjectData {
  title: string
  cover: string
  projectLink?: string
  codeLink?: string
  description: string
  technologies: string[]
}

export const projectsData: IProjectData[] = [
  {
    title: 'Mini Projects App',
    cover: miniProjectsApp.src,
    projectLink: APP_ROUTES.PROJECTS,
    codeLink: 'https://github.com/MarcAlva2003/mini-tasks-app',
    description: 'An app with multiple mini projects, like an AIChat with OpenAI',
    technologies: ['NextJs 15', 'Typescript', 'Tailwind', 'Vercel']
  },
  {
    title: 'Tecsopel SA',
    cover: tecsopelSAApp.src,
    projectLink: '',
    description: '(In Progress) E-Commerce for TecsopelSA + an administration panel',
    technologies: ['NextJs 15', 'Typescript', 'Tailwind', 'Vercel']
  },
  {
    title: 'Frontend Quiz React',
    cover: quizzGameApp.src,
    projectLink: 'https://quizz-app-react-three.vercel.app/',
    codeLink: 'https://github.com/MarcAlva2003/quizz-app-react',
    description: 'A basic quizz game about HTML, CSS, Javascript and Accessibility',
    technologies: ['ReactJs', 'Vite', 'Typescript', 'Tailwind', 'JSON', 'Vercel']
  },
  // {
  //   title: '',
  //   cover: '',
  //   projectLink: '',
  //   codeLink: '',
  //   description: '',
  //   technologies: ['ReactJs', 'Vite', 'Typescript', 'Tailwind', 'Vercel']
  // },
]