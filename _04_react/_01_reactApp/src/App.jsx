import React, { Component } from 'react'
import DangerButton from './components/DangerButton'

class App extends Component {
  render() {
    const arr = [1, 2, 3, 4, 5];
    const arr2 = [6, 7, 8, 9, 10];
    return (
      <div>
        <DangerButton arr={arr} arr2={arr2}></DangerButton>
        <button className="btn btn-danger" >add to cart</button>
      </div>
    )
  }
}

export default App 