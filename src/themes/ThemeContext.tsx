import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const ThemeContext = createContext({
  mode: 'dark',
  toggleMode: () => {}
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [mode, setMode] = useState(() => {
    // if (typeof window !== 'undefined') {
    //   return localStorage.getItem('theme') || 'dark'
    // }
    return 'dark'
  })

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('theme', mode)
    // }
  }, [mode])

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
