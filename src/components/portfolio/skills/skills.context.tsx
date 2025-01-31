import { createContext, useState } from 'react';

interface ISkillsContext {
  selectedId: string | undefined; // Permitimos que sea null para indicar que no hay nada seleccionado
  setSelectedId: (id: string | undefined) => void; // Función para actualizar el selectedId
}

export const SkillsContext = createContext<ISkillsContext>({
  selectedId: undefined,
  setSelectedId: () => {}, // Función vacía como valor inicial
});

export const SkillsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const value = {
    selectedId,
    setSelectedId,
  };

  return (
    <SkillsContext.Provider value={value}>
      {children}
    </SkillsContext.Provider>
  );
};