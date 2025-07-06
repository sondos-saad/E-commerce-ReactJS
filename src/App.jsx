import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Nav from './Components/nav'
import Rout from './Components/Rout'
import Footer from './Components/Footer'
import { useState } from 'react'
import HomeProduct from './Components/HomeProducts'

function App() {
    const [shop, setShop] = useState(HomeProduct);
    const [search, setSearch] = useState("");

    const Filter = (x) => {
        const cateFilter = HomeProduct.filter((product) => {
            return product.cat === x
        })
        setShop(cateFilter)
    }
    const allCateFilter = () => {
        setShop(HomeProduct)
    }
    const searchProduct = () => {
        const searchFilter = HomeProduct.filter((x) => {
            return x.cat === search
        })
        setShop(searchFilter)
    }

  return (
    <>
        <BrowserRouter>
            <Nav search={search} setSearch={setSearch} searchProduct={searchProduct}/>
            <Rout shop={shop} Filter={Filter} allCateFilter={allCateFilter}/>
            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
