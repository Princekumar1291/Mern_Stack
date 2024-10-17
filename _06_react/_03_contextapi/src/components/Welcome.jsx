import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext';
const Welcome = () => {
  const {theme}=useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`text-center text-3xl font-bold bg-slate-200 p-2 ${theme==='dark' ? 'bg-slate-800 text-white' : ''}`}>
      Welcome to theme changing App
    </div>
  )
}

export default Welcome
