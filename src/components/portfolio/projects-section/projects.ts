import { APP_ROUTES } from '@/constants/routes'
import blogDeCafeApp from '@/assets/project-covers/blogdecafe-cover.png'
import frontendStoreApp from '@/assets/project-covers/frontend-store-cover.png'
import miniProjectsApp from '@/assets/project-covers/mini-tasks-app.png'
import peligrosaNetworkApp from '@/assets/project-covers/peligrosa-network-cover.png'
import quizzGameApp from '@/assets/project-covers/quizz-game-cover.png'
import rockEDMFestApp from '@/assets/project-covers/rock-edm-fest-cover.png'
import tecsopelOldSAApp from '@/assets/project-covers/tecsopel-old-cover.png'
import tecsopelSAApp from '@/assets/project-covers/tecsopelsa-cover.png'
import whereIsMyCountryApp from '@/assets/project-covers/where-is-my-country-cover.png'

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
    title: 'Multi-Projects App',
    cover: miniProjectsApp.src,
    projectLink: APP_ROUTES.PROJECTS,
    codeLink: 'https://github.com/MarcAlva2003/mini-tasks-app',
    description: 'An app with multiple different projects, like an AIChat with OpenAI',
    technologies: ['NextJs 15', 'Typescript', 'Tailwind', 'Vercel']
  },
  // {
  //   title: 'Tecsopel SA (New)',
  //   cover: tecsopelSAApp.src,
  //   projectLink: '',
  //   description:
  //     '(In Progress) E-Commerce for TecsopelSA with payment methods, product detail + an administration panel to manage products',
  //   technologies: ['NextJs 15', 'Typescript', 'Tailwind', 'Vercel']
  // },
  {
    title: 'Tecsopel SA',
    cover: tecsopelOldSAApp.src,
    projectLink: 'https://tecsopel.netlify.app/',
    description:
      'Old Tecsopel SA website. Has product categories, product list and the option to contact and buy via WhatsApp',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Frontend Quiz React',
    cover: quizzGameApp.src,
    projectLink: 'https://quizz-app-react-three.vercel.app/',
    codeLink: 'https://github.com/MarcAlva2003/quizz-app-react',
    description: 'A basic quizz game about HTML, CSS, Javascript and Accessibility',
    technologies: ['ReactJs', 'Vite', 'Typescript', 'Tailwind', 'JSON', 'Vercel']
  },
  {
    title: 'Peligrosa Network',
    cover: peligrosaNetworkApp.src,
    projectLink: 'https://peligrosanetwork.netlify.app/',
    codeLink: 'https://github.com/MarcAlva2003/peligrosa-network-website',
    description: 'Website for a Videogame Multiplayer Server promotion with gallery, blog, shop and more',
    technologies: ['VueJs', 'CSS', 'Javascript']
  },
  {
    title: 'Blog De Café',
    cover: blogDeCafeApp.src,
    projectLink: 'https://blog-del-cafe-dev.netlify.app/',
    codeLink: 'https://github.com/MarcAlva2003/cafe-blog',
    description: 'Practicing app with coffe blog, coffe courses, contact form and "about us" page',
    technologies: ['HTML', 'CSS', 'Javascript']
  },
  // {
  //   title: 'Where is my country',
  //   cover: whereIsMyCountryApp.src,
  //   projectLink: 'https://restcountries-api-project.netlify.app/',
  //   codeLink: 'https://github.com/MarcAlva2003/countries-api',
  //   description: 'Practicing app using countries api with Axios',
  //   technologies: ['VueJs', 'CSS', 'Javascript', 'Axios']
  // },
  {
    title: 'Rock & EDM Festival',
    cover: rockEDMFestApp.src,
    projectLink: 'https://rock-edm-fest-dev.netlify.app/',
    codeLink: 'https://github.com/MarcAlva2003/festival-webpage',
    description: 'Practicing app promoting a concert',
    technologies: ['HTML', 'CSS', 'Javascript']
  },
  // {
  //   title: 'Frontend Store',
  //   cover: frontendStoreApp.src,
  //   projectLink: 'https://frontend-store-develop.netlify.app/',
  //   codeLink: 'https://github.com/MarcAlva2003/front-end-store',
  //   description: 'Practicing app about tech t-shirts store with products scree, about us page and product detail',
  //   technologies: ['HTML', 'CSS', 'Javascript']
  // }
]
