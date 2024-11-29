import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Students from './Components/Students'
import Contact from './Components/Contact'
import Nav from './Components/Nav'

const Routerfile = () => {
  return (
   <>
    <Router>
      <Nav/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/student' element={<Students/>} />
        <Route  path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
   </>
  )
}

export default Routerfile