import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext';

const Themetoggle = () => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <button type="button" className={`text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 `}
    onClick={()=>toggleTheme('dark')}
    >Theme</button>
  )
}

export default Themetoggle
