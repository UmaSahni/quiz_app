import { useState } from 'react'
import './App.scss'
import Home from './Components/Home'
import AllRoutes from './AllRoutes'

function App() {
 
  return (
    <div className='main-container' >
      <AllRoutes/>
     {/* <Home/> */}
    </div>
  )
}

export default App
