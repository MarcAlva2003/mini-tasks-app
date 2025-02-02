import { createContext, useState } from 'react'

interface ISkillsContext {
  selectedId: string | undefined
  setSelectedId: (id: string | undefined) => void
}

export const SkillsContext = createContext<ISkillsContext>({
  selectedId: undefined,
  setSelectedId: () => {}
})

export const SkillsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)

  const value = {
    selectedId,
    setSelectedId
  }

  return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>
}
