import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Nav from './Components/nav'
import Rout from './Components/Rout'
import Footer from './Components/Footer'
import { useState } from 'react'
import HomeProduct from './Components/HomeProducts'

function App() {
    const [shop, setShop] = useState(HomeProduct)

  return (
    <>
        <BrowserRouter>
            <Nav/>
            <Rout shop={shop}/>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
