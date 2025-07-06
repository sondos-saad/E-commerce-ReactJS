import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'

function Rout({shop , Filter, allCateFilter}) {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='shop' element={<Shop shop={shop} Filter={Filter} allCateFilter={allCateFilter} />}/>
        </Routes>
      
    </>
  )
}

export default Rout
