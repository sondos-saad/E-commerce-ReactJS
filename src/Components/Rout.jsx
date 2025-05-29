import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'

function Rout() {
  return (
    <>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='shop' Component={Shop}/>
        </Routes>
      
    </>
  )
}

export default Rout
