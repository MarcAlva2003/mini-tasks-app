import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

interface IContactInfo {
  title: string
  value: string
}
interface ILinksInfo {
  link: string
  icon: React.ReactNode
}

export const contactInfo: IContactInfo[] = [
  {
    title: 'Email',
    value: 'alvarez2003marcos@gmail.com'
  },
  {
    title: 'Phone',
    value: '+54 9 11 3766 7914'
  },
  {
    title: 'Location',
    value: 'Ciudad Autónoma de Buenos Aires, Argentina'
  }
]

export const links: ILinksInfo[] = [
  {
    link: 'https://www.linkedin.com/in/marcos-alvarez-4a3926225/',
    icon: FaLinkedin({ size: 24 })
  },
  {
    link: 'https://github.com/MarcAlva2003',
    icon: FaGithub({ size: 24 })
  }
]
