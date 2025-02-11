import './projects-section.styles.css'

import { Chip, IconButton } from '@mui/material'

import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { IProjectData } from './projects'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

interface IProjectCard {
  data: IProjectData
}

export const ProjectCard = (props: IProjectCard) => {
  const { data } = props
  const { cover, description, technologies, title, codeLink, projectLink } = data

  const cardImageClsx = clsx('desc-image w-full pb-[56.25%] rounded relative overflow-hidden border border-slate-700')

  return (
    <div className="p-2 lg:p-4 w-full bg-[#393E4680] rounded-[12px] flex flex-col justify-between">
      <div>
          <div>
            <div className={cardImageClsx}>
              <Image alt={title} src={cover} objectFit="cover" fill={true} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <h4 className="font-semibold mt-2 mb-2">{title}</h4>
              <p className='mb-4'>{description}</p>
              </div>
          </div>
        <div className={'mt-2'}>
          {technologies.map((techItem: string) => (
            <Chip className="mr-2 mb-2" size="medium" key={`item-chip-${techItem}`} label={techItem} />
          ))}
        </div>
      </div>

      <div className="flex justify-between  ">
        <div>
          {projectLink && (
            <Link
              href={projectLink}
              target={`${projectLink.includes('https') ? '_blank' : ''}`}
              rel={`${projectLink.includes('https') ? 'noopener noreferrer' : ''}`}
            >
              <IconButton>
                <BiLinkExternal size={22} />
              </IconButton>
            </Link>
          )}
          {codeLink && (
            <Link href={codeLink} target="_blank" rel="noopener noreferrer">
              <IconButton>
                <FaGithub size={22} />
              </IconButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
