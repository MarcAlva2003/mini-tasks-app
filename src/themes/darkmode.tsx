import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9'
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e'
    },
    text: {
      primary: '#ffffff'
    }
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#616161'
            },
            '&:hover fieldset': {
              borderColor: '#90caf9'
            },
            '&.Mui-focused fieldset': {
              borderColor: '#90caf9'
            },
            color: '#ffffff'
          },
          '& .MuiInputLabel-root': {
            color: '#bdbdbd',
            '&.Mui-focused': {
              color: '#90caf9'
            }
          }
        }
      }
    }
  }
})
