import {createContext, useState} from "react"

const ThemeContext = createContext();
export default ThemeContext;


export const ThemeProvider=({children})=>{
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currTheme) => currTheme === 'light' ? 'dark' : 'light')
  }
  const contextVal = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return(
    <ThemeContext.Provider value={contextVal}>
      {children}
    </ThemeContext.Provider>
  )
}