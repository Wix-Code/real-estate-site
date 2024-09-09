import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Buy from './Buy/Buy'
import Rent from './Rent/Rent'
import Single from './Single/Single'
import About from './About/About'
import ScrollTop from './ScroolTop/ScrollTop'

const Rout = () => {
  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/buy' element={<Buy />}/>
        <Route path='/rent' element={<Rent />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/single/:id' element={<Single />}/>
      </Routes>
    </div>
  )
}

export default Rout