import React from 'react'
import Welcome from './components/Welcome';
import Themetoggle from './components/Themetoggle';
import { ThemeProvider } from './store/ThemeContext';

const App = () => {

  
  return (
    <ThemeProvider>
      <Welcome></Welcome>
      <Themetoggle></Themetoggle>
    </ThemeProvider>
  )
}
export default App
