import './projects-section.styles.css'

import { Chip, IconButton } from '@mui/material'

import { BiLinkExternal } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa'
import { IProjectData } from './projects'
import Image from 'next/image'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import Link from 'next/link'
import ReactCardFlip from 'react-card-flip'
import clsx from 'clsx'
import { useState } from 'react'

interface IProjectCard {
  data: IProjectData
}

export const ProjectCard = (props: IProjectCard) => {
  const { data } = props
  const { cover, description, technologies, title, codeLink, projectLink } = data
  const [showCardInfo, setShowCardInfo] = useState<boolean>(false)

  const cardImageClsx = clsx('desc-image w-full pb-[56.25%] rounded relative overflow-hidden border border-slate-700')
  // const cardDescClsx = clsx('card-desc  ')

  const handleItemInfo = () => {
    setShowCardInfo(!showCardInfo)
  }

  return (
    <div className="p-4 w-full bg-[#393E4680] rounded-[12px] flex flex-col justify-between">
      <div>
        <ReactCardFlip isFlipped={showCardInfo} flipDirection="vertical">
          <div>
            <div className={cardImageClsx}>
              <Image alt={title} src={cover} objectFit="cover" fill={true} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <h4 className="font-semibold mt-2 mb-4">{title}</h4>
            </div>
          </div>
          <div className="">
            <h4 className="font-semibold mb-4">{title}</h4>
            <div className="text-sm font-thin h-0 pb-[calc(56.25%_+_1.5px)]">
              <p>{description}</p>
            </div>
          </div>
        </ReactCardFlip>
        <div className={'mt-2'}>
          {technologies.map((techItem: string) => (
            <Chip className="mr-2 mb-2" size="small" key={`item-chip-${techItem}`} label={techItem} />
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
                <BiLinkExternal size={18} />
              </IconButton>
            </Link>
          )}
          {codeLink && (
            <Link href={codeLink} target="_blank" rel="noopener noreferrer">
              <IconButton>
                <FaGithub size={18} />
              </IconButton>
            </Link>
          )}
        </div>
        <IconButton onClick={handleItemInfo}>
          <IoIosInformationCircleOutline size={18} />
        </IconButton>
      </div>
    </div>
  )
}
