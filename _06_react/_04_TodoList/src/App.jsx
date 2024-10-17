import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import IndertData from './components/IndertData'
import Datas from './components/Datas'
import { useState } from 'react'
import AppProvider from './store/AppProvider'
function App() {

  return (
    <AppProvider>
      <div className='flex justify-content-center align-items-center myclass'>
        <Heading />
        <IndertData/>
        <Datas />
      </div>
    </AppProvider>
  )
}

export default App
