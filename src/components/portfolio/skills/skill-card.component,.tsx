import { Collapse, IconButton, LinearProgress } from '@mui/material'
import { useContext, useMemo } from 'react'

import { ISkill } from './skills'
import { MdExpandMore } from 'react-icons/md'
import { SkillsContext } from './skills.context'

interface ISkillsCard {
  skill: ISkill
}

export const SkillsCard = (props: ISkillsCard) => {
  const { skill } = props
  const { selectedId, setSelectedId } = useContext(SkillsContext)

  const handleExpandClick = () => {
    setSelectedId(selectedId === skill.id ? '' : skill.id)
  }

  const expanded: boolean = useMemo(() => {
    return selectedId === skill.id
  }, [selectedId])

  return (
    <div className="mb-4">
      <div className="flex items-center">
        <h4 className="text-slate-200">{skill.name}</h4>
        <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <MdExpandMore className={expanded ? 'rotate-[180deg]' : ''} />
        </IconButton>
      </div>
      <div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <p className="mb-2 text-slate-300 text-sm">{skill.description}</p>
        </Collapse>
        <LinearProgress variant="determinate" value={skill.level} />
      </div>
    </div>
  )
}
