import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact'

function Rout({shop , Filter, allCateFilter , addToCart, cart, setCart}) {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home addToCart={addToCart} />}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
            <Route path='shop' element={<Shop shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart}/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      
    </>
  )
}

export default Rout
