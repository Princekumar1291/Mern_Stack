import React, { useState } from 'react'
import Welcome from './components/Welcome';
import Themetoggle from './components/Themetoggle';
import ThemeContext, { ThemeProvider } from './store/ThemeContext';

const App = () => {

  
  return (
    <ThemeProvider>
      <Welcome></Welcome>
      <Themetoggle></Themetoggle>
    </ThemeProvider>
  )
}
export default App
