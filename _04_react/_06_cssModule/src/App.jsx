import React from 'react'
import Header from './components/Header'
import style from './App.module.css'
function App() {
  return (
    <div>
      <Header></Header>
      <div className={style.header}>this is App</div>
      <div className={`${style.content} ${style.header}`}>this is App</div>
    </div>
  )
}

export default App
