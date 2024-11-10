import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuizPage from './Pages/QuizPage'
import Home from './Components/Home'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/quiz' element={<QuizPage/>}></Route>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}

export default AllRoutes